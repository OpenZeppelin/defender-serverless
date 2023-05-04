import Serverless from 'serverless';

import _ from 'lodash';
import { AutotaskClient } from 'defender-autotask-client';
import { SentinelClient } from 'defender-sentinel-client';
import { RelayClient } from 'defender-relay-client';
import { AdminClient } from 'defender-admin-client';

import {
  YSecret,
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
  YContract,
  DefenderContract,
  ResourceType,
  DefenderBlockWatcher,
  YCategory,
  DefenderCategory,
  DefenderAPIError,
  YAutotask,
  DefenderNotificationReference,
} from '../types';
import { sanitise } from './sanitise';
import { BlockExplorerApiKeyClient, DeploymentConfigClient } from 'platform-deploy-client';

/**
 * @dev this function retrieves the Defender equivalent object of the provided template resource
 * This will not work for resources that do not have the stackResourceId property, ie. secrets and contracts
 */
export const getEquivalentResource = <Y, D>(
  context: Serverless,
  resource: Y,
  resources: Y[] | undefined,
  currentResources: D[],
) => {
  if (resource) {
    const [key, value] = Object.entries(resources ?? []).find(a => _.isEqual(a[1], resource))!;
    return currentResources.find((e: D) => (e as any).stackResourceId === getResourceID(getStackName(context), key));
  }
};

export const validateTypesAndSanitise = (o: object): object => {
  return sanitise(o) as object;
};

export const getEquivalentResourceByKey = <D>(resourceKey: string, currentResources: D[]) => {
  return currentResources.find((e: D) => (e as any).stackResourceId === resourceKey);
};

/**
 * @dev returns both a list of consolidated secrets for both global and stack, where the latter will be preceded with the stack name.
 * */
export const getConsolidatedSecrets = (context: Serverless): YSecret[] => {
  const globalSecrets: YSecret = context.service.resources?.Resources?.secrets?.global ?? {};
  const stackSecrets: YSecret = context.service.resources?.Resources?.secrets?.stack ?? {};
  const stackSecretsPrecededWithStackName = Object.entries(stackSecrets).map(([ssk, ssv]) => {
    return {
      [`${getStackName(context)}_${ssk}`]: ssv,
    };
  });
  return _.map(_.entries(Object.assign(globalSecrets, ...stackSecretsPrecededWithStackName)), ([k, v]) => ({
    [k]: v as string,
  }));
};

export const isTemplateResource = <Y, D>(
  context: Serverless,
  resource: D,
  resourceType: ResourceType,
  resources: Y[],
): boolean => {
  return !!Object.entries(resources).find(a =>
    resourceType === 'Secrets'
      ? // if secret, just compare key
        Object.keys(a[1] as unknown as YSecret)[0] === (resource as unknown as string)
      : resourceType === 'Contracts'
      ? // if contracts, compare network and address
        (a[1] as unknown as YContract).network === (resource as unknown as DefenderContract).network &&
        (a[1] as unknown as YContract).address === (resource as unknown as DefenderContract).address
      : // anything else, compare stackResourceId
        getResourceID(getStackName(context), a[0]) === (resource as D & { stackResourceId: string }).stackResourceId,
  );
};

export const getResourceID = (stackName: string, resourceName: string): string => {
  return `${stackName}.${resourceName}`;
};

export const getStackName = (context: Serverless): string => {
  if ((context.service.provider as any).stackName && typeof (context.service.provider as any).stackName === 'string') {
    return (context.service.provider as any).stackName;
  }
  if (context.service.provider.stage) return `${context.service.service}-${context.service.provider.stage}`;
  throw new Error(
    `Unable to get stack name. Missing "provider.stage" property. Alternatively, define "stackName" under "provider" in your serverless.yaml file.`,
  );
};

export const isSSOT = (context: Serverless): boolean => {
  return !!(context.service.provider as any).ssot;
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

export const getDeploymentConfigClient = (key: TeamKey): DeploymentConfigClient => {
  return new DeploymentConfigClient(key);
};

export const getBlockExplorerApiKeyClient = (key: TeamKey): BlockExplorerApiKeyClient => {
  return new BlockExplorerApiKeyClient(key);
};

export const constructNotification = (notification: YNotification, stackResourceId: string) => {
  const commonNotification = {
    type: notification.type,
    name: notification.name,
    paused: notification.paused,
    stackResourceId,
  };

  let currentConfig;
  let config;

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

export const constructNotificationCategory = (
  context: Serverless,
  category: YCategory,
  stackResourceId: string,
  notifications: DefenderNotification[],
) => {
  return {
    name: category.name,
    description: category.description,
    notificationIds: (category['notification-ids']
      ? category['notification-ids']
          .map(notification => {
            const maybeNotification = getEquivalentResource<YNotification, DefenderNotification>(
              context,
              notification,
              context.service.resources?.Resources?.notifications,
              notifications,
            );
            if (maybeNotification)
              return {
                notificationId: maybeNotification.notificationId,
                type: maybeNotification.type,
              } as DefenderNotificationReference;
          })
          .filter(isResource)
      : []) as [] | [DefenderNotificationReference] | [DefenderNotificationReference, DefenderNotificationReference],
    stackResourceId,
  };
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
  blockwatchers: DefenderBlockWatcher[],
  categories: DefenderCategory[],
): DefenderBlockSentinel | DefenderFortaSentinel => {
  const autotaskCondition =
    sentinel['autotask-condition'] && autotasks.find(a => a.name === sentinel['autotask-condition']!.name);
  const autotaskTrigger =
    sentinel['autotask-trigger'] && autotasks.find(a => a.name === sentinel['autotask-trigger']!.name);

  const notificationChannels = sentinel['notify-config'].channels
    .map(notification => {
      const maybeNotification = getEquivalentResource<YNotification, DefenderNotification>(
        context,
        notification,
        context.service.resources?.Resources?.notifications,
        notifications,
      );
      return maybeNotification?.notificationId;
    })
    .filter(isResource);

  const sentinelCategory = sentinel['notify-config'].category;
  const notificationCategoryId = sentinelCategory && categories.find(c => c.name === sentinelCategory.name)?.categoryId;

  const commonSentinel = {
    type: sentinel.type,
    name: sentinel.name,
    network: sentinel.network,
    addresses: sentinel.addresses,
    abi: sentinel.abi && JSON.stringify(typeof sentinel.abi === 'string' ? JSON.parse(sentinel.abi) : sentinel.abi),
    paused: sentinel.paused,
    autotaskCondition: autotaskCondition && autotaskCondition.autotaskId,
    autotaskTrigger: autotaskTrigger && autotaskTrigger.autotaskId,
    alertThreshold: sentinel['alert-threshold'] && {
      amount: sentinel['alert-threshold'].amount,
      windowSeconds: sentinel['alert-threshold']['window-seconds'],
    },
    alertMessageBody: sentinel['notify-config'].message,
    alertMessageSubject: sentinel['notify-config']['message-subject'],
    alertTimeoutMs: sentinel['notify-config'].timeout,
    notificationChannels,
    notificationCategoryId: _.isEmpty(notificationChannels) ? notificationCategoryId : undefined,
    riskCategory: sentinel['risk-category'],
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
    const compatibleBlockWatcher = blockwatchers.find(b => b.confirmLevel === sentinel['confirm-level']);
    if (!compatibleBlockWatcher) {
      throw new Error(
        `A blockwatcher with confirmation level (${sentinel['confirm-level']}) does not exist on ${sentinel.network}. Choose another confirmation level.`,
      );
    }
    const blockSentinel: DefenderBlockSentinel = {
      ...commonSentinel,
      type: 'BLOCK',
      network: sentinel.network,
      addresses: sentinel.addresses,
      confirmLevel: compatibleBlockWatcher!.confirmLevel,
      eventConditions:
        sentinel.conditions &&
        sentinel.conditions.event &&
        sentinel.conditions.event.map(c => {
          return {
            eventSignature: c.signature,
            expression: c.expression,
          };
        }),
      functionConditions:
        sentinel.conditions &&
        sentinel.conditions.function &&
        sentinel.conditions.function.map(c => {
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

export const validateAdditionalPermissionsOrThrow = async <T>(
  context: Serverless,
  resources: T[] | undefined,
  resourceType: ResourceType,
) => {
  if (!resources) return;
  const teamApiKey = getTeamAPIkeysOrThrow(context);
  switch (resourceType) {
    case 'Sentinels':
      // Check for access to Autotasks
      // Enumerate all sentinels, and check if any sentinel has an autotask associated
      const sentinelsWithAutotasks = (Object.values(resources) as unknown as YSentinel[]).filter(
        r => !!r['autotask-condition'] || !!r['autotask-trigger'],
      );
      // If there are sentinels with autotasks associated, then try to list autotasks
      if (!_.isEmpty(sentinelsWithAutotasks)) {
        try {
          await getAutotaskClient(teamApiKey).list();
          return;
        } catch (e) {
          // catch the error and verify it is an unauthorised access error
          if (isUnauthorisedError(e)) {
            // if this fails (due to permissions issue), we re-throw the error with more context
            throw new Error(
              'At least one Sentinel is associated with an Autotask. Additional API key permissions are required to access Autotasks. Alternatively, remove the association with the autotask to complete this action.',
            );
          }
          // also throw with original error if its not a permission issue
          throw e;
        }
      }
    case 'Autotasks':
      // Check for access to Relayers
      // Enumerate all autotasks, and check if any autotask has a relayer associated
      const autotasksWithRelayers = (Object.values(resources) as unknown as YAutotask[]).filter(r => !!r.relayer);
      // If there are autotasks with relayers associated, then try to list relayers
      if (!_.isEmpty(autotasksWithRelayers)) {
        try {
          await getRelayClient(teamApiKey).list();
          return;
        } catch (e) {
          // catch the error and verify it is an unauthorised access error
          if (isUnauthorisedError(e)) {
            // if this fails (due to permissions issue), we re-throw the error with more context
            throw new Error(
              'At least one Autotask is associated with a Relayer. Additional API key permissions are required to access Relayers. Alternatively, remove the association with the relayer to complete this action.',
            );
          }
          // also throw with original error if its not a permission issue
          throw e;
        }
      }
    // No other resources require additional permissions
    default:
      return;
  }
};

export const isUnauthorisedError = (e: any): boolean => {
  try {
    const defenderErrorStatus = (e as DefenderAPIError).response.status as number;
    return defenderErrorStatus === 403;
  } catch {
    // if it is not a DefenderApiError,
    // the error is most likely caused due to something else
    return false;
  }
};

export const formatABI = (abi: YContract['abi']) => {
  return abi && JSON.stringify(typeof abi === 'string' ? JSON.parse(abi) : abi);
};
