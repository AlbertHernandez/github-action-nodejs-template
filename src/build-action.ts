import { Action } from "./action";
import { GithubCoreLogger } from "./logger/github-core-logger";

export const buildAction = (): Action => {
  const logger = new GithubCoreLogger();

  return new Action({
    logger,
  });
};
