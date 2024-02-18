import * as core from "@actions/core";

import { CoreOutputs } from "@src/outputs/core-outputs";

jest.mock("@actions/core", () => ({
  setOutput: jest.fn(),
}));

describe("CoreOutputs", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set the output value correctly", () => {
    const expectedName = "outputName";
    const expectedValue = "outputValue";

    const outputs = new CoreOutputs();
    outputs.save(expectedName, expectedValue);

    expect(core.setOutput).toHaveBeenCalledWith(expectedName, expectedValue);
  });
});
