import { Logging } from 'serverless/classes/Plugin';
import { DefenderAPIError } from '../types';

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

  public info(message: any, indentLevel = 0) {
    const indents = ` `.repeat(2).repeat(indentLevel);
    const args = indents ? [indents + message] : [message];
    this.logger?.log.info(...args);
  }
  public notice(message: any, indentLevel = 0) {
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
  public tryLogDefenderError(e: any) {
    try {
      const defenderAPIError = (e as DefenderAPIError).response.data as any;
      this.error(defenderAPIError.message ?? defenderAPIError.Message);
    } catch {
      if (e.message) this.error(e.message);
      else this.error(e);
    }
  }
}
