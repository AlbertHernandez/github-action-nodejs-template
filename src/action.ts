import { Inputs } from "./inputs/inputs";
import { Logger } from "./logger/logger";
import { Outputs } from "./outputs/outputs";
import { sleep } from "./utils/sleep";

export class Action {
  private readonly logger;
  private readonly outputs;

  constructor(dependencies: { logger: Logger; outputs: Outputs }) {
    this.logger = dependencies.logger;
    this.outputs = dependencies.outputs;
  }

  async run(inputs: Inputs) {
    this.logger.info("Running github-action-nodejs-template");
    const name = inputs.name ?? "World";
    const message = `Hello ${name}`;
    this.logger.info(message);
    await sleep(3000);
    this.logger.info("Change: 11");
    this.outputs.save("message", message);
    this.logger.info("Finished github-action-nodejs-template");
  }
}
