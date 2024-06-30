import * as core from "@actions/core";
import { vi } from "vitest";

import { CoreLogger } from "@/src/logger/core-logger";

vi.mock("@actions/core", () => ({
  debug: vi.fn(),
  info: vi.fn(),
  error: vi.fn(),
}));

describe("CoreLogger", () => {
  let logger: CoreLogger;

  beforeEach(() => {
    logger = new CoreLogger();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should log debug message", () => {
    const message = "log message";
    logger.debug(message);
    expect(core.debug).toHaveBeenCalledWith(message);
  });

  it("should log info message", () => {
    const message = "log message";
    logger.info(message);
    expect(core.info).toHaveBeenCalledWith(message);
  });

  it("should log error message", () => {
    const message = "log message";
    logger.error(message);
    expect(core.error).toHaveBeenCalledWith(message);
  });
});
