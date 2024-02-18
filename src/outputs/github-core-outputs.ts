import * as core from "@actions/core";

import { Outputs } from "./outputs";

export class GithubCoreOutputs implements Outputs {
  set(name: string, value: unknown): void {
    core.setOutput(name, value);
  }
}
