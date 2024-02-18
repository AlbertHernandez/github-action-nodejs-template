import { Outputs } from "@src/outputs/outputs";

export class OutputsMock implements Outputs {
  private readonly mock = {
    set: jest.fn(),
  };

  set(name: string, value: unknown) {
    this.mock.set(name, value);
  }

  assertSetToHaveBeenCalledWith(name: string, value: unknown): void {
    expect(this.mock.set).toHaveBeenCalledWith(name, value);
  }
}
