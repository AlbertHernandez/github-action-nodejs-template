import { Action } from "./action";
import { CoreLogger } from "./logger/core-logger";
import { CoreOutputs } from "./outputs/core-outputs";

export const buildAction = (): Action => {
  const logger = new CoreLogger();
  const outputs = new CoreOutputs();

  return new Action({
    logger,
    outputs,
  });
};
