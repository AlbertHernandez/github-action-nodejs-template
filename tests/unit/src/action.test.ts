import { Action } from "@src/action";
import { Inputs } from "@src/inputs/inputs";

import { LoggerMock } from "./logger/logger-mock";

describe("Action", () => {
  let logger: LoggerMock;
  let action: Action;

  beforeEach(() => {
    logger = new LoggerMock();
    action = new Action({
      logger,
    });
  });

  describe("When the name input is provided", () => {
    it("should use that input to say hello", async () => {
      const name = "name";
      const inputs: Inputs = {
        name,
      };

      await action.run(inputs);

      logger.assertInfoToHaveBeenCalledWith(`Hello ${name}`);
    });
  });

  describe("When the name input is not provided", () => {
    it("should use world as default value", async () => {
      const inputs: Inputs = {};

      await action.run(inputs);

      logger.assertInfoToHaveBeenCalledWith("Hello World");
    });
  });
});
