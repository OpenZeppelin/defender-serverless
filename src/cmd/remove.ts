import Serverless from 'serverless';
import prompt from 'prompt';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import {
  getAdminClient,
  getAutotaskClient,
  getRelayClient,
  getSentinelClient,
  getStackName,
  getTeamAPIkeysOrThrow,
  isTemplateResource,
} from '../utils';
import {
  DefenderAutotask,
  DefenderContract,
  DefenderNotification,
  DefenderRelayer,
  DefenderRelayerApiKey,
  DefenderSentinel,
  ResourceType,
  TeamKey,
  YAutotask,
  YContract,
  YNotification,
  YRelayer,
  YSecret,
  YSentinel,
} from '../types';

export default class DefenderRemove {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  log: any;
  hooks: any;
  teamKey?: TeamKey;

  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    this.log = Logger.getInstance();

    this.hooks = {
      'before:remove:remove': () => this.validateKeys(),
      'remove:remove': this.requestConfirmation.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  private async wrapper<Y, D>(
    context: Serverless,
    resourceType: ResourceType,
    resources: Y[] | undefined,
    retrieveExistingResources: () => Promise<D[]>,
    onRemove: (resources: D[]) => Promise<void>,
    output: any[] = [],
  ) {
    this.log.progress('component-info', `Retrieving ${resourceType}`);
    const existing = (await retrieveExistingResources()).filter((e) =>
      isTemplateResource<Y, D>(context, e, resourceType, resources ?? []),
    );
    this.log.progress('component-remove', `Removing ${resourceType} from Defender`);
    await onRemove(existing);
    output.push(...existing);
  }

  private async requestConfirmation() {
    if (process.stdout.isTTY) {
      const properties = [
        {
          name: 'confirm',
          validator: /^(y|n){1}$/i,
          warning: 'Confirmation must be `y` (yes) or `n` (no)',
        },
      ];
      prompt.start({
        message:
          'This action will remove your resources from Defender permanently. Are you sure you wish to continue [y/n]?',
      });
      const { confirm } = await prompt.get(properties);

      if (confirm.toString().toLowerCase() !== 'y') {
        this.log.error('Confirmation not acquired. Terminating command');
        return;
      }
      this.log.success('Confirmation acquired');
    }

    await this.remove();
  }

  private async remove() {
    this.log.notice('========================================================');
    const stackName = getStackName(this.serverless);
    this.log.progress('remove', `Running Defender Remove on stack: ${stackName}`);
    const stdOut: {
      stack: string;
      sentinels: DefenderSentinel[];
      autotasks: DefenderAutotask[];
      contracts: DefenderContract[];
      relayers: { relayerId: string; relayerApiKeys: DefenderRelayerApiKey[] }[];
      notifications: DefenderNotification[];
      secrets: string[];
    } = {
      stack: stackName,
      sentinels: [],
      autotasks: [],
      contracts: [],
      relayers: [],
      notifications: [],
      secrets: [],
    };
    // Sentinels
    const sentinelClient = getSentinelClient(this.teamKey!);
    const listSentinels = () => sentinelClient.list().then((i) => i.items);
    await this.wrapper<YSentinel, DefenderSentinel>(
      this.serverless,
      'Sentinels',
      this.serverless.service.resources?.Resources?.sentinels,
      listSentinels,
      async (sentinels: DefenderSentinel[]) => {
        await Promise.all(
          sentinels.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.subscriberId}) from Defender`,
            );
            await sentinelClient.delete(e.subscriberId);
            this.log.success(`Removed ${e.stackResourceId} (${e.subscriberId})`);
          }),
        );
      },
      stdOut.sentinels,
    );

    // Autotasks
    const autotaskClient = getAutotaskClient(this.teamKey!);
    const listAutotasks = () => autotaskClient.list().then((i) => i.items);
    await this.wrapper<YAutotask, DefenderAutotask>(
      this.serverless,
      'Autotasks',
      // @ts-ignore
      this.serverless.service.functions,
      listAutotasks,
      async (autotasks: DefenderAutotask[]) => {
        await Promise.all(
          autotasks.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.autotaskId}) from Defender`,
            );
            await autotaskClient.delete(e.autotaskId);
            this.log.success(`Removed ${e.stackResourceId} (${e.autotaskId})`);
          }),
        );
      },
      stdOut.autotasks,
    );

    // Contracts
    const adminClient = getAdminClient(this.teamKey!);
    const listContracts = () => adminClient.listContracts();
    await this.wrapper<YContract, DefenderContract>(
      this.serverless,
      'Contracts',
      this.serverless.service.resources?.Resources?.contracts,
      listContracts,
      async (contracts: DefenderContract[]) => {
        await Promise.all(
          contracts.map(async (e) => {
            const id = `${e.network}-${e.address}`;
            this.log.progress('component-remove-extra', `Removing ${id} (${e.name}) from Defender`);
            await adminClient.deleteContract(id);
            this.log.success(`Removed ${id} (${e.name})`);
          }),
        );
      },
      stdOut.contracts,
    );

    // Relayer API keys
    const relayClient = getRelayClient(this.teamKey!);
    const listRelayers = (await relayClient.list()).items;
    const existingRelayers = listRelayers.filter((e) =>
      isTemplateResource<YRelayer, DefenderRelayer>(
        this.serverless,
        e,
        'Relayers',
        this.serverless.service.resources?.Resources?.relayers ?? [],
      ),
    );
    this.log.error('Deleting Relayers is currently only possible via the Defender UI.');
    this.log.progress('component-info', `Retrieving Relayer API Keys`);
    await Promise.all(
      existingRelayers.map(async (relayer) => {
        this.log.progress('component-info', `Retrieving API Keys for relayer ${relayer.stackResourceId}`);
        const relayerApiKeys = await relayClient.listKeys(relayer.relayerId);
        await Promise.all(
          relayerApiKeys.map(async (e) => {
            this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.keyId}) from Defender`);
            await relayClient.deleteKey(e.relayerId, e.keyId);
            this.log.success(`Removed ${e.stackResourceId} (${e.keyId})`);
          }),
        );
        stdOut.relayers.push({ relayerId: relayer.relayerId, relayerApiKeys });
      }),
    );

    // Notifications
    const listNotifications = () => sentinelClient.listNotificationChannels();
    await this.wrapper<YNotification, DefenderNotification>(
      this.serverless,
      'Notifications',
      this.serverless.service.resources?.Resources?.notifications,
      listNotifications,
      async (notifications: DefenderNotification[]) => {
        await Promise.all(
          notifications.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.notificationId}) from Defender`,
            );
            await sentinelClient.deleteNotificationChannel(e);
            this.log.success(`Removed ${e.stackResourceId} (${e.notificationId})`);
          }),
        );
      },
      stdOut.notifications,
    );

    // Secrets
    const listSecrets = () => autotaskClient.listSecrets().then((r) => r.secretNames ?? []);
    await this.wrapper<YSecret, string>(
      this.serverless,
      'Secrets',
      this.serverless.service.resources?.Resources?.secrets,
      listSecrets,
      async (secrets: string[]) => {
        this.log.progress('component-remove-extra', `Removing (${secrets.join(', ')}) from Defender`);
        await autotaskClient.createSecrets({
          deletes: secrets,
          secrets: {},
        });
        this.log.success(`Removed (${secrets.join(', ')})`);
      },
      stdOut.secrets,
    );
    this.log.notice('========================================================');
    if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
