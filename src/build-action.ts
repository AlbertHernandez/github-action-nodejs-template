import { GithubCoreOutputs } from "@src/outputs/github-core-outputs";

import { Action } from "./action";
import { GithubCoreLogger } from "./logger/github-core-logger";

export const buildAction = (): Action => {
  const logger = new GithubCoreLogger();
  const outputs = new GithubCoreOutputs();

  return new Action({
    logger,
    outputs,
  });
};
