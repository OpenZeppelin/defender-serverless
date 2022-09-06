import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import { getStackName, getTeamAPIkeysOrThrow } from '../utils';
import { TeamKey } from '../types';

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
      'remove:remove': this.remove.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  async remove() {
    const stackName = getStackName(this.serverless);
    this.log.progress('info', `Running Defender Remove on stack: ${stackName}`);
    const stdOut = {
      stack: stackName,
      sentinels: [],
      autotasks: [],
      contracts: [],
      relayers: [],
      notifications: [],
      secrets: [],
    };

    removeWrapper
    this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
