import { debug, error, info } from "@actions/core";

import { Logger } from "./logger";

export class CoreLogger implements Logger {
  debug(message: string): void {
    debug(message);
  }

  info(message: string): void {
    info(message);
  }

  error(message: string): void {
    error(message);
  }
}
