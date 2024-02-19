import { Outputs } from "@src/outputs/outputs";

export class OutputsMock implements Outputs {
  private readonly mock = {
    save: jest.fn(),
  };

  save(name: string, value: unknown) {
    this.mock.save(name, value);
  }

  assertSaveToHaveBeenCalledWith(name: string, value: unknown): void {
    expect(this.mock.save).toHaveBeenCalledWith(name, value);
  }
}