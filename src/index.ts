import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import DefenderProvider from './provider';
import DefenderDeploy from './cmd/deploy';
import DefenderInfo from './cmd/info';
import DefenderRemove from './cmd/remove';
import DefenderLogs from './cmd/logs';
import DefenderInvoke from './cmd/invoke';

import Logger from './utils/logger';

class DefenderPlugin {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    Logger.getInstance(logging);

    this.serverless.setProvider('defender', new DefenderProvider(this.serverless) as any);
    this.serverless.pluginManager.addPlugin(DefenderDeploy);
    this.serverless.pluginManager.addPlugin(DefenderInfo);
    this.serverless.pluginManager.addPlugin(DefenderRemove);
    this.serverless.pluginManager.addPlugin(DefenderLogs);
    this.serverless.pluginManager.addPlugin(DefenderInvoke);
  }
}

module.exports = DefenderPlugin;
