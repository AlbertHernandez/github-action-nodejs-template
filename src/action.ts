import { Inputs } from "./inputs/inputs";
import { Logger } from "./logger/logger";

export class Action {
  private readonly logger;

  constructor(dependencies: { logger: Logger }) {
    this.logger = dependencies.logger;
  }

  async run(inputs: Inputs) {
    this.logger.info("Running github-action-nodejs-template");
    const name = inputs.name || "World";
    this.logger.info(`Hello ${name}`);
    await this.sleep(3000);
    this.logger.info("Change: 9");
    this.logger.info("Finished github-action-nodejs-template");
  }

  private sleep(milliseconds: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), milliseconds);
    });
  }
}
