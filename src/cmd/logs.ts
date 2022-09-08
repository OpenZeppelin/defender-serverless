import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import { tailLogsFor } from 'defender-autotask-client/lib/utils';

import {
  getAdminClient,
  getAutotaskClient,
  getEquivalentResource,
  getEquivalentResourceByKey,
  getRelayClient,
  getResourceID,
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

export default class DefenderLogs {
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
      'before:logs:logs': () => this.validateKeys(),
      'logs:logs': this.logs.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  async logs() {
    try {
      this.log.notice('========================================================');
      this.log.progress('logs', `Running Defender Logs on stack function: ${this.options.function}`);
      const client = getAutotaskClient(this.teamKey!);
      const list = (await client.list()).items;

      const defenderAutotask = getEquivalentResourceByKey<DefenderAutotask>(this.options.function!, list);

      if (defenderAutotask) await tailLogsFor(client, defenderAutotask!.autotaskId);
      else this.log.error(`No autotask with stackResourceId: ${this.options.function} found.`);
      this.log.notice('========================================================');
    } catch (e) {
      this.log.error(e);
    }
  }
}
