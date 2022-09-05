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
  infoWrapper,
} from '../utils';
import {
  DefenderAutotask,
  DefenderContract,
  DefenderNotification,
  DefenderRelayer,
  DefenderSentinel,
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

  async info() {
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
    await infoWrapper<YSentinel, DefenderSentinel>(
      this.serverless,
      'Sentinels',
      // @ts-ignore
      this.serverless.service.resources.sentinels,
      listSentinels,
      (resource: DefenderSentinel) => `${resource.stackResourceId}: ${resource.subscriberId}`,
      stdOut.sentinels,
    );

    // Autotasks
    const listAutotasks = () =>
      getAutotaskClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await infoWrapper<YAutotask, DefenderAutotask>(
      this.serverless,
      'Autotasks',
      // @ts-ignore
      this.serverless.service.functions,
      listAutotasks,
      (resource: DefenderAutotask) => `${resource.stackResourceId}: ${resource.autotaskId}`,
      stdOut.autotasks,
    );

    // Contracts
    const listContracts = () => getAdminClient(this.teamKey!).listContracts();
    await infoWrapper<YContract, DefenderContract>(
      this.serverless,
      'Contracts',
      // @ts-ignore
      this.serverless.service.resources.contracts,
      listContracts,
      (resource: DefenderContract) => `${resource.name}: ${resource.network}-${resource.address}`,
      stdOut.contracts,
    );

    // Relayers
    const listRelayers = () =>
      getRelayClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await infoWrapper<YRelayer, DefenderRelayer>(
      this.serverless,
      'Relayers',
      // @ts-ignore
      this.serverless.service.resources.relayers,
      listRelayers,
      (resource: DefenderRelayer) => `${resource.stackResourceId}: ${resource.relayerId}`,
      stdOut.relayers,
    );

    // Notifications
    const listNotifications = () => getSentinelClient(this.teamKey!).listNotificationChannels();
    await infoWrapper<YNotification, DefenderNotification>(
      this.serverless,
      'Notifications',
      // @ts-ignore
      this.serverless.service.resources.notifications,
      listNotifications,
      (resource: DefenderNotification) => `${resource.stackResourceId}: ${resource.notificationId}`,
      stdOut.notifications,
    );

    // Secrets
    const listSecrets = () =>
      getAutotaskClient(this.teamKey!)
        .listSecrets()
        .then((r) => r.secretNames ?? []);
    await infoWrapper<YSecret, string>(
      this.serverless,
      'Secrets',
      // @ts-ignore
      this.serverless.service.resources.secrets,
      listSecrets,
      (resource: string) => `${resource}`,
      stdOut.secrets,
    );

    this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
