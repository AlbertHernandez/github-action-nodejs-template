import { vi } from "vitest";

import { Logger } from "@src/logger/logger";

export class LoggerMock implements Logger {
  private readonly mock = {
    debug: vi.fn(),
    info: vi.fn(),
    error: vi.fn(),
  };

  debug(message: string): void {
    this.mock.debug(message);
  }

  info(message: string): void {
    this.mock.info(message);
  }

  error(message: string): void {
    this.mock.error(message);
  }

  assertInfoToHaveBeenCalledWith(message: string): void {
    expect(this.mock.info).toHaveBeenCalledWith(message);
  }
}
