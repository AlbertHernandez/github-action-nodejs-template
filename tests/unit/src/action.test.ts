import { Action } from "@src/action";

import { InputsMother } from "./inputs/inputs-mother";
import { LoggerMock } from "./logger/logger-mock";
import { MotherCreator } from "./mother-creator";

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
      const name = MotherCreator.randomWord();
      const inputs = InputsMother.random({ name });

      await action.run(inputs);

      logger.assertInfoToHaveBeenCalledWith(`Hello ${name}`);
    });
  });

  describe("When the name input is not provided", () => {
    it("should use world as default value", async () => {
      const inputs = InputsMother.withoutName();

      await action.run(inputs);

      logger.assertInfoToHaveBeenCalledWith("Hello World");
    });
  });
});
