import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import {
  getAdminClient,
  getAutotaskClient,
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
    this.log.notice('========================================================');
    this.log.progress('info', `Running Defender Logs on stack function: ${this.options.function}`);

    this.log.notice('========================================================');
    // this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
