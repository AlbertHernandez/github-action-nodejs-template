import * as core from "@actions/core";

import { Inputs } from "./inputs";

export class GithubCoreInputs implements Inputs {
  get name(): string {
    return core.getInput("name");
  }
}
