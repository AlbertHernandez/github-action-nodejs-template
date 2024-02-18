import { getInput } from "@actions/core";

import { Inputs } from "./inputs";

export class CoreInputs implements Inputs {
  get name(): string | undefined {
    return getInput("name") || undefined;
  }
}
