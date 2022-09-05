import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';
import { TeamKey } from '../types';

import { getTeamAPIkeysOrThrow, getAutotaskClient } from '../utils';

import Logger from '../utils/logger';

export default class DefenderInvoke {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  log: any;
  hooks: any;
  key?: TeamKey;

  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    this.log = Logger.getInstance();

    this.hooks = {
      'before:invoke:invoke': this.beforeInvoke(),
      'invoke:invoke': this.invoke.bind(this),
    };
  }

  beforeInvoke() {
    this.key = getTeamAPIkeysOrThrow(this.serverless);
  }

  public async invoke() {
    const serverless = this.serverless;
    const options = this.options;
    this.log.info(serverless, 'Defender Invoke');
    // @ts-ignore
    const slsfn = serverless.service.functions[options.f || options.function];
    // @ts-ignore
    if (!slsfn) throw new Error(`Function ${slsfname} not defined`);
    const functionName = slsfn.name;
    // @ts-ignore
    const payload = JSON.parse(options.d || options.data);
    const client = getAutotaskClient(this.key!);
    const existing = await client.list().then((r) => r.items);
    // @ts-ignore
    const match = existing.find((e) => e.name === functionName);
    if (!match) throw new Error(`Function '${functionName}' not found on Defender`);
    const response = await client.runAutotask(match.autotaskId, payload);
    this.log.info(response);
  }
}
