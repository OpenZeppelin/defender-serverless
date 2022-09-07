import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import { getAutotaskClient, getEquivalentResourceByKey, getTeamAPIkeysOrThrow } from '../utils';
import { DefenderAutotask, TeamKey } from '../types';

export default class DefenderInvoke {
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
      'before:invoke:invoke': () => this.validateKeys(),
      'invoke:invoke': this.invoke.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  async invoke() {
    this.log.notice('========================================================');
    this.log.progress('logs', `Running Defender Invoke on stack function: ${this.options.function}`);
    // @ts-ignore
    const payload = JSON.parse(this.options?.data ?? '{}');
    const client = getAutotaskClient(this.teamKey!);
    const list = (await client.list()).items;
    const defenderAutotask = getEquivalentResourceByKey<DefenderAutotask>(this.options.function!, list);
    if (defenderAutotask) {
      const response = await client.runAutotask(defenderAutotask.autotaskId, payload);
      this.log.notice(JSON.stringify(response, null, 2));
      if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(response, null, 2));
    } else {
      this.log.error(`No autotask with stackResourceId: ${this.options.function} found.`);
    }
    this.log.notice('========================================================');
  }
}
