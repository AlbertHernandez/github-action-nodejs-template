import { Inputs } from "./inputs/inputs";
import { Logger } from "./logger/logger";

export class Action {
  private readonly inputs;
  private readonly logger;

  constructor(dependencies: { inputs: Inputs; logger: Logger }) {
    this.inputs = dependencies.inputs;
    this.logger = dependencies.logger;
  }

  async run() {
    this.logger.info("Running github-action-nodejs-template");
    const name = this.inputs.name || "World";
    this.logger.info(`Hello ${name} 19`);
    await this.sleep(3000);
    this.logger.info("Finished github-action-nodejs-template");
  }

  private sleep(milliseconds: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), milliseconds);
    });
  }
}
