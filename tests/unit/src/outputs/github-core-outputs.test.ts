import * as core from "@actions/core";

import { GithubCoreOutputs } from "@src/outputs/github-core-outputs";

jest.mock("@actions/core", () => ({
  setOutput: jest.fn(),
}));

describe("GithubCoreOutputs", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set the output value correctly", () => {
    const expectedName = "outputName";
    const expectedValue = "outputValue";

    const outputs = new GithubCoreOutputs();
    outputs.set(expectedName, expectedValue);

    expect(core.setOutput).toHaveBeenCalledWith(expectedName, expectedValue);
  });
});
