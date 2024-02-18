import * as core from "@actions/core";

import { GithubCoreInputs } from "@src/inputs/github-core-inputs";

jest.mock("@actions/core", () => ({
  getInput: jest.fn(),
}));

describe("GithubCoreInputs", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("name", () => {
    it('should return the value of "name" input', () => {
      const expectedName = "my-input";
      (core.getInput as jest.Mock).mockReturnValueOnce(expectedName);

      const inputs = new GithubCoreInputs();
      const name = inputs.name;

      expect(name).toBe(expectedName);
      expect(core.getInput).toHaveBeenCalledWith("name");
    });

    it('should return undefined if "name" input is not set', () => {
      (core.getInput as jest.Mock).mockReturnValueOnce("");

      const inputs = new GithubCoreInputs();
      const name = inputs.name;

      expect(name).toBeUndefined();
      expect(core.getInput).toHaveBeenCalledWith("name");
    });
  });
});
