import * as core from "@actions/core";

import { Inputs } from "./inputs";

export class GithubCoreInputs implements Inputs {
  get name(): string | undefined {
    return core.getInput("name") || undefined;
  }
}
