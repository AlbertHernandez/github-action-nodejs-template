import { Logger } from "@src/logger/logger";

export class LoggerMock implements Logger {
  private readonly mock = {
    debug: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
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

  assertDebugToHaveBeenCalledWith(message: string): void {
    expect(this.mock.debug).toHaveBeenCalledWith(message);
  }

  assertInfoToHaveBeenCalledWith(message: string): void {
    expect(this.mock.info).toHaveBeenCalledWith(message);
  }

  assertErrorToHaveBeenCalledWith(message: string): void {
    expect(this.mock.error).toHaveBeenCalledWith(message);
  }
}
