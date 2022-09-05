import { Logging } from 'serverless/classes/Plugin';

export default class Logger {
  private static instance: Logger;
  private logger?: Logging;

  private constructor(logging?: Logging) {
    if (logging) {
      this.logger = logging;
    }
  }

  public static getInstance(logging?: Logging): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(logging);
    }
    return Logger.instance;
  }

  public progress(name: string, message: string) {
    const progress = this.logger?.progress.get(name);
    if (progress) progress.update(message);
    else this.logger?.progress.create({ message, name });
  }

  public removeProgress(name: string) {
    this.logger?.progress.get(name).remove();
  }

  public info(message: any, indentLevel: number = 0) {
    const indents = ` `.repeat(2).repeat(indentLevel);
    const args = indents ? [indents + message] : [message];
    this.logger?.log.info(...args);
  }
  public notice(message: any, indentLevel: number = 0) {
    const indents = ` `.repeat(2).repeat(indentLevel);
    const args = indents ? [indents + message] : [message];
    this.logger?.log.notice(...args);
  }
  public warn(message: any) {
    this.logger?.log.warning(message);
  }
  public success(message: any) {
    this.logger?.log.success(message);
  }
  public error(message: any) {
    this.logger?.log.error(message);
  }

  public stdOut(message: string | string[]) {
    this.logger?.writeText(message);
  }
}
