import { Action } from "./action";
import { GithubCoreInputs } from "./inputs/github-core-inputs";
import { GithubCoreLogger } from "./logger/github-core-logger";

export const buildAction = (): Action => {
  const logger = new GithubCoreLogger();
  const inputs = new GithubCoreInputs();

  return new Action({
    logger,
    inputs,
  });
};
