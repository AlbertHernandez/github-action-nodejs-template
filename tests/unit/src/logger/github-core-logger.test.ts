import * as core from "@actions/core";

import { GithubCoreLogger } from "@src/logger/github-core-logger";

import { MotherCreator } from "../mother-creator";

jest.mock("@actions/core", () => ({
  debug: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
}));

describe("GithubCoreLogger", () => {
  let logger: GithubCoreLogger;

  beforeEach(() => {
    logger = new GithubCoreLogger();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should log debug message", () => {
    const message = MotherCreator.randomWord();
    logger.debug(message);
    expect(core.debug).toHaveBeenCalledWith(message);
  });

  it("should log info message", () => {
    const message = MotherCreator.randomWord();
    logger.info(message);
    expect(core.info).toHaveBeenCalledWith(message);
  });

  it("should log error message", () => {
    const message = MotherCreator.randomWord();
    logger.error(message);
    expect(core.error).toHaveBeenCalledWith(message);
  });
});
