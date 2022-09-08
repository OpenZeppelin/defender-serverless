import Serverless from 'serverless';

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

export default class DefenderInfo {
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
      'before:info:info': () => this.validateKeys(),
      'info:info': this.info.bind(this),
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
    format: (resource: D) => string,
    output: any[],
  ) {
    this.log.progress('component-info', `Retrieving ${resourceType}`);
    this.log.notice(`${resourceType}`);
    const existing = (await retrieveExistingResources()).filter((e) =>
      isTemplateResource<Y, D>(context, e, resourceType, resources ?? []),
    );

    await Promise.all(
      existing.map(async (e) => {
        this.log.notice(`${format(e)}`, 1);
        let keys: DefenderRelayerApiKey[] = [];
        // Also print relayer API keys
        if (resourceType === 'Relayers') {
          const listRelayerAPIKeys = await getRelayClient(getTeamAPIkeysOrThrow(context)).listKeys(
            (e as unknown as DefenderRelayer).relayerId,
          );
          listRelayerAPIKeys.map((k) => {
            this.log.notice(`${k.stackResourceId}: ${k.keyId}`, 2);
          });
          keys = listRelayerAPIKeys;
        }
        if (resourceType === 'Relayers') output.push({ ...e, relayerKeys: keys });
        else output.push(e);
      }),
    );
  }

  async info() {
    this.log.notice('========================================================');
    const stackName = getStackName(this.serverless);
    this.log.progress('info', `Running Defender Info on stack: ${stackName}`);
    const stdOut = {
      stack: stackName,
      sentinels: [],
      autotasks: [],
      contracts: [],
      relayers: [],
      notifications: [],
      secrets: [],
    };
    // Sentinels
    const listSentinels = () =>
      getSentinelClient(this.teamKey!)
        .list()
        .then((i) => i.items);

    await this.wrapper<YSentinel, DefenderSentinel>(
      this.serverless,
      'Sentinels',
      this.serverless.service.resources.Resources.sentinels,
      listSentinels,
      (resource: DefenderSentinel) => `${resource.stackResourceId}: ${resource.subscriberId}`,
      stdOut.sentinels,
    );

    // Autotasks
    const listAutotasks = () =>
      getAutotaskClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await this.wrapper<YAutotask, DefenderAutotask>(
      this.serverless,
      'Autotasks',
      this.serverless.service.functions as unknown as YAutotask[],
      listAutotasks,
      (resource: DefenderAutotask) => `${resource.stackResourceId}: ${resource.autotaskId}`,
      stdOut.autotasks,
    );

    // Contracts
    const listContracts = () => getAdminClient(this.teamKey!).listContracts();
    await this.wrapper<YContract, DefenderContract>(
      this.serverless,
      'Contracts',
      this.serverless.service.resources.Resources.contracts,
      listContracts,
      (resource: DefenderContract) => `${resource.network}-${resource.address}: ${resource.name}`,
      stdOut.contracts,
    );

    // Relayers
    const listRelayers = () =>
      getRelayClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await this.wrapper<YRelayer, DefenderRelayer>(
      this.serverless,
      'Relayers',
      this.serverless.service.resources.Resources.relayers,
      listRelayers,
      (resource: DefenderRelayer) => `${resource.stackResourceId}: ${resource.relayerId}`,
      stdOut.relayers,
    );

    // Notifications
    const listNotifications = () => getSentinelClient(this.teamKey!).listNotificationChannels();
    await this.wrapper<YNotification, DefenderNotification>(
      this.serverless,
      'Notifications',
      this.serverless.service.resources.Resources.notifications,
      listNotifications,
      (resource: DefenderNotification) => `${resource.stackResourceId}: ${resource.notificationId}`,
      stdOut.notifications,
    );

    // Secrets
    const listSecrets = () =>
      getAutotaskClient(this.teamKey!)
        .listSecrets()
        .then((r) => r.secretNames ?? []);
    await this.wrapper<YSecret, string>(
      this.serverless,
      'Secrets',
      this.serverless.service.resources.Resources.secrets,
      listSecrets,
      (resource: string) => `${resource}`,
      stdOut.secrets,
    );
    this.log.notice('========================================================');
    this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
