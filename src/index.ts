import * as core from "@actions/core";

import { buildAction } from "./build-action";
import { GithubCoreInputs } from "./inputs/github-core-inputs";

const run = async () => {
  try {
    const action = buildAction();
    const inputs = new GithubCoreInputs();
    await action.run(inputs);
  } catch (error: unknown) {
    if (error instanceof Error || typeof error === "string") {
      core.setFailed(error);
    } else {
      core.setFailed(
        "Unexpected error happened when running github-action-nodejs-template",
      );
    }
  }
};

void run();
