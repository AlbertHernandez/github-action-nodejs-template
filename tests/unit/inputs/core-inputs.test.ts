import * as core from "@actions/core";
import { Mock, vi } from "vitest";

import { CoreInputs } from "@/src/inputs/core-inputs";

vi.mock("@actions/core", () => ({
  getInput: vi.fn(),
}));

describe("CoreInputs", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("name", () => {
    it('should return the value of "name" input', () => {
      const expectedName = "my-input";
      (core.getInput as Mock).mockReturnValueOnce(expectedName);

      const inputs = new CoreInputs();
      const name = inputs.name;

      expect(name).toBe(expectedName);
      expect(core.getInput).toHaveBeenCalledWith("name");
    });

    it('should return undefined if "name" input is not set', () => {
      (core.getInput as Mock).mockReturnValueOnce("");

      const inputs = new CoreInputs();
      const name = inputs.name;

      expect(name).toBeUndefined();
      expect(core.getInput).toHaveBeenCalledWith("name");
    });
  });
});
