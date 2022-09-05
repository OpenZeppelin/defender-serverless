import Serverless from 'serverless';

import { differenceWith, isEqual } from 'lodash';
import { AutotaskClient } from 'defender-autotask-client';
import { SentinelClient } from 'defender-sentinel-client';
import { RelayClient } from 'defender-relay-client';
import { AdminClient } from 'defender-admin-client';

import Logger from './logger';
import {
  YSentinel,
  YNotification,
  YTelegramConfig,
  YSlackConfig,
  YEmailConfig,
  YDiscordConfig,
  YDatadogConfig,
  DefenderAutotask,
  DefenderNotification,
  DefenderBlockSentinel,
  DefenderFortaSentinel,
  TeamKey,
  DeployResponse,
  DefenderRelayerApiKey,
  DeployOutput,
  DefenderAPIError,
} from '../types';

/**
 * @dev this function retrieves the Defender equivalent object of the provided template resource
 * This will not work for resources that do not have the stackResourceId property, ie. secrets and contracts
 */
export const getEquivalentResource = <R, D>(
  context: Serverless,
  resource: R,
  resources: R[],
  currentResources: D[],
) => {
  if (resource) {
    const [key, _] = Object.entries(resources).find((a) => isEqual(a[1], resource))!;
    return currentResources.find((e: D) => (e as any).stackResourceId === getResourceID(getStackName(context), key));
  }
};

export const isTemplateResource = <R, D>(
  context: Serverless,
  resource: D,
  resourceType: 'Sentinels' | 'Relayers' | 'Notifications' | 'Autotasks' | 'Contracts' | 'Secrets',
  resources: R[],
): boolean => {
  return !!Object.entries(resources).find((a) =>
    resourceType === 'Secrets'
      ? // if secret, just compare key
        a[0] === (resource as any)
      : resourceType === 'Contracts'
      ? // if contracts, compare network and address
        (a[1] as any).network === (resource as any).network && (a[1] as any).address === (resource as any).address
      : // anything else, compare stackResourceId
        getResourceID(getStackName(context), a[0]) === (resource as any).stackResourceId,
  );
};

export const infoWrapper = async <R, D>(
  context: Serverless,
  resourceType: 'Sentinels' | 'Relayers' | 'Notifications' | 'Autotasks' | 'Contracts' | 'Secrets',
  resources: R[],
  retrieveExistingResources: () => Promise<D[]>,
  format: (resource: D) => string,
  output: any[],
) => {
  const logger = Logger.getInstance();
  logger.progress('component-info', `Retrieving ${resourceType}`);
  logger.notice(`${resourceType}`);
  const existing = (await retrieveExistingResources()).filter((e) =>
    isTemplateResource<R, D>(context, e, resourceType, resources),
  );
  await Promise.all(
    existing.map(async (e) => {
      logger.notice(`${format(e)}`, 1);
      let keys: DefenderRelayerApiKey[] = [];
      // Also print relayer API keys
      if (resourceType === 'Relayers') {
        // @ts-ignore
        const listRelayerAPIKeys = await getRelayClient(getTeamAPIkeysOrThrow(context)).listKeys(e.relayerId);
        listRelayerAPIKeys.map((k) => {
          logger.notice(`${k.stackResourceId}: ${k.keyId}`, 2);
        });
        keys = listRelayerAPIKeys;
      }
      if (resourceType === 'Relayers') output.push({ ...e, relayerKeys: keys });
      else output.push(e);
    }),
  );
};

export const deployWrapper = async <R, D>(
  context: Serverless,
  resourceType: 'Sentinels' | 'Relayers' | 'Notifications' | 'Autotasks' | 'Contracts' | 'Secrets',
  resources: R[],
  retrieveExistingResources: () => Promise<D[]>,
  onUpdate: (resource: R, match: D) => Promise<DeployResponse>,
  onCreate: (resource: R, stackResourceId: string) => Promise<DeployResponse>,
  onRemove?: (resources: D[]) => Promise<void>,
  overrideMatchDefinition?: (a: D, b: R) => boolean,
  output: DeployOutput<any> = { removed: [], created: [], updated: [] },
) => {
  const logger = Logger.getInstance();

  try {
    const stackName = getStackName(context);
    logger.progress('component-deploy', `Initialising deployment of ${resourceType}`);
    logger.notice(`${resourceType}`);

    const existing = await retrieveExistingResources();

    // only remove if template is considered single source of truth
    if (isSSOT(context) && onRemove) {
      const inDefenderButNotInTemplate = differenceWith(existing, Object.keys(resources), (a: any, b: any) =>
        overrideMatchDefinition ? overrideMatchDefinition(a, b) : a.stackResourceId === getResourceID(stackName, b),
      );

      if (inDefenderButNotInTemplate.length > 0) {
        logger.info(`Unused resources found on Defender:`);
        logger.info(JSON.stringify(inDefenderButNotInTemplate, null, 2));
        logger.progress('component-deploy-extra', `Removing resources from Defender`);
        await onRemove(inDefenderButNotInTemplate);
        logger.success(`Removed resources from Defender`);
        output.removed.push(...inDefenderButNotInTemplate);
      }
    }

    for (const [id, resource] of Object.entries(resources)) {
      // always refresh list after each addition as some resources rely on the previous one
      const existing = await retrieveExistingResources();

      const entryStackResourceId = getResourceID(stackName, id);
      let match;
      if (overrideMatchDefinition) {
        match = existing.find((e: D) =>
          resourceType === 'Secrets' ? overrideMatchDefinition(e, id as any) : overrideMatchDefinition(e, resource),
        );
      } else {
        match = existing.find((e: any) => e.stackResourceId === entryStackResourceId);
      }

      if (match) {
        logger.progress(
          'component-deploy-extra',
          `Updating ${
            // @ts-ignore
            resourceType === 'Contracts' ? match.name : resourceType === 'Secrets' ? id : match.stackResourceId
          }`,
        );
        const result = await onUpdate(resource, match);
        if (result.success) {
          logger.success(`Updated ${result.name} (${result.id})`);
          output.updated.push(result.response);
        }
        if (result.notice) logger.info(`${result.notice}`, 1);
        if (result.error) logger.error(`${result.error}`);
      } else {
        logger.progress('component-deploy-extra', `Creating ${resourceType === 'Secrets' ? id : entryStackResourceId}`);
        const result = await onCreate(resource, entryStackResourceId);
        if (result.success) {
          logger.success(`Created ${result.name} (${result.id})`);
          output.created.push(result.response);
        }
        if (result.notice) logger.info(`${result.notice}`, 1);
        if (result.error) logger.error(`${result.error}`);
      }
    }
  } catch (e) {
    logger.error(((e as DefenderAPIError).response.data as any).message);
  }
};

export const getResourceID = (stackName: string, resourceName: string): string => {
  return `${stackName}.${resourceName}`;
};

export const getStackName = (context: Serverless): string => {
  // @ts-ignore
  if (context.service.provider.stackName && typeof context.service.provider.stackName === 'string') {
    // @ts-ignore
    return context.service.provider.stackName;
  }
  if (context.service.provider.stage) return `${context.service.service}-${context.service.provider.stage}`;
  throw new Error(
    `Unable to get stack name. Missing "provider.stage" property. Alternatively, define "stackName" under "provider" in your serverless.yaml file.`,
  );
};

export const isSSOT = (context: Serverless): string => {
  // @ts-ignore
  return context.service.provider.ssot;
};

export const getTeamAPIkeysOrThrow = (context: Serverless): TeamKey => {
  const defenderConfig: { key: string; secret: string } = context.service.initialServerlessConfig.defender;
  if (!defenderConfig)
    throw new Error(
      `Missing "defender" top-level property in configuration. Please define "defender" with the "key" and "secret" properties in your serverless.yaml file.`,
    );
  if (!defenderConfig.key || !defenderConfig.secret)
    throw new Error(
      `Missing "defender" key or secret properties in configuration. Please define a "key" and "secret" property under "defender" in your serverless.yaml file.`,
    );
  return { apiKey: defenderConfig.key, apiSecret: defenderConfig.secret };
};

export const getSentinelClient = (key: TeamKey): SentinelClient => {
  return new SentinelClient(key);
};

export const getAutotaskClient = (key: TeamKey): AutotaskClient => {
  return new AutotaskClient(key);
};

export const getRelayClient = (key: TeamKey): RelayClient => {
  return new RelayClient(key);
};

export const getAdminClient = (key: TeamKey): AdminClient => {
  return new AdminClient(key);
};

export const constructNotification = (notification: YNotification, stackResourceId: string) => {
  const commonNotification = {
    type: notification.type,
    name: notification.name,
    paused: notification.paused,
    stackResourceId,
  };

  var currentConfig;
  var config;

  switch (notification.type) {
    case 'datadog':
      currentConfig = notification.config as YDatadogConfig;
      config = {
        apiKey: currentConfig['api-key'],
        metricPrefix: currentConfig['metric-prefix'],
      };
      return { ...commonNotification, config };
    case 'discord':
      currentConfig = notification.config as YDiscordConfig;
      config = {
        url: currentConfig.url,
      };
      return { ...commonNotification, config };
    case 'email':
      currentConfig = notification.config as YEmailConfig;
      config = {
        emails: currentConfig.emails,
      };
      return { ...commonNotification, config };
    case 'slack':
      currentConfig = notification.config as YSlackConfig;
      config = {
        url: currentConfig.url,
      };
      return { ...commonNotification, config };
    case 'telegram':
      currentConfig = notification.config as YTelegramConfig;
      config = {
        botToken: currentConfig['bot-token'],
        chatId: currentConfig['chat-id'],
      };
      return { ...commonNotification, config };
    default:
      throw new Error(`Incompatible notification type ${notification.type}`);
  }
};

const isResource = <T>(item: T | undefined): item is T => {
  return !!item;
};

export const constructSentinel = (
  context: Serverless,
  stackResourceId: string,
  sentinel: YSentinel,
  notifications: DefenderNotification[],
  autotasks: DefenderAutotask[],
): DefenderBlockSentinel | DefenderFortaSentinel => {
  const autotaskCondition =
    sentinel['autotask-condition'] && autotasks.find((a) => a.name === sentinel['autotask-condition']!.name);
  const commonSentinel = {
    type: sentinel.type,
    name: sentinel.name,
    network: sentinel.network,
    addresses: sentinel.addresses,
    abi: sentinel.abi && JSON.stringify(sentinel.abi),
    paused: sentinel.paused,
    autotaskCondition: autotaskCondition && autotaskCondition.autotaskId,
    autotaskTrigger: sentinel['autotask-trigger'],
    alertThreshold: sentinel['alert-threshold'] && {
      amount: sentinel['alert-threshold'].amount,
      windowSeconds: sentinel['alert-threshold']['window-seconds'],
    },
    alertMessageBody: sentinel['notify-config'].message,
    alertTimeoutMs: sentinel['notify-config'].timeout,
    notificationChannels: sentinel['notify-config'].channels
      .map((notification) => {
        const maybeNotification = getEquivalentResource<YNotification, DefenderNotification>(
          context,
          notification,
          // @ts-ignore
          context.service.resources.notifications,
          notifications,
        );
        return maybeNotification?.notificationId;
      })
      .filter(isResource),
    stackResourceId: stackResourceId,
  };

  if (sentinel.type === 'FORTA') {
    const fortaSentinel: DefenderFortaSentinel = {
      ...commonSentinel,
      type: 'FORTA',
      privateFortaNodeId: sentinel['forta-node-id'],
      agentIDs: sentinel['agent-ids'],
      fortaConditions: {
        alertIDs: sentinel.conditions && sentinel.conditions['alert-ids'],
        minimumScannerCount: (sentinel.conditions && sentinel.conditions['min-scanner-count']) || 1, // default to 1
        severity: sentinel.conditions?.severity,
      },
      fortaLastProcessedTime: sentinel['forta-last-processed-time'],
    };
    return fortaSentinel;
  }

  if (sentinel.type === 'BLOCK') {
    const blockSentinel: DefenderBlockSentinel = {
      ...commonSentinel,
      type: 'BLOCK',
      network: sentinel.network,
      addresses: sentinel.addresses,
      confirmLevel: sentinel['confirm-level'],
      eventConditions:
        sentinel.conditions &&
        sentinel.conditions.event.map((c) => {
          return {
            eventSignature: c.signature,
            expression: c.expression,
          };
        }),
      functionConditions:
        sentinel.conditions &&
        sentinel.conditions.function.map((c) => {
          return {
            functionSignature: c.signature,
            expression: c.expression,
          };
        }),
      txCondition: sentinel.conditions && sentinel.conditions.transaction,
    };
    return blockSentinel;
  }

  throw new Error('Incompatible sentinel type. Type must be either FORTA or BLOCK');
};
