import { vi } from "vitest";

import { Action } from "@/src/action";
import { Inputs } from "@/src/inputs/inputs";

import { LoggerMock } from "./logger/logger-mock";
import { OutputsMock } from "./outputs/outputs-mock";

vi.mock("../../../src/utils/sleep");

describe("Action", () => {
  let logger: LoggerMock;
  let outputs: OutputsMock;
  let action: Action;

  beforeEach(() => {
    logger = new LoggerMock();
    outputs = new OutputsMock();
    action = new Action({
      logger,
      outputs,
    });
  });

  describe("When the name input is provided", () => {
    it("should use that input to say hello", async () => {
      const name = "name";
      const inputs: Inputs = {
        name,
      };

      await action.run(inputs);

      const expectedMessage = `Hello ${name}`;
      logger.assertInfoToHaveBeenCalledWith(expectedMessage);
      outputs.assertSaveToHaveBeenCalledWith("message", expectedMessage);
    });
  });

  describe("When the name input is not provided", () => {
    it("should use world as default value", async () => {
      const inputs: Inputs = {};

      await action.run(inputs);

      const expectedMessage = "Hello World";
      logger.assertInfoToHaveBeenCalledWith(expectedMessage);
      outputs.assertSaveToHaveBeenCalledWith("message", expectedMessage);
    });
  });
});
