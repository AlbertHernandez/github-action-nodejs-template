import { setOutput } from "@actions/core";

import { Outputs } from "./outputs";

export class CoreOutputs implements Outputs {
  save(name: string, value: unknown): void {
    setOutput(name, value);
  }
}
