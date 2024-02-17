import * as core from "@actions/core";

import { Logger } from "./logger";

export class GithubCoreLogger implements Logger {
  debug(message: string): void {
    core.debug(message);
  }

  info(message: string): void {
    core.info(message);
  }

  error(message: string): void {
    core.error(message);
  }
}
