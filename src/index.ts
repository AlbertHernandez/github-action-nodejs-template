import * as core from "@actions/core";

import { buildAction } from "./build-action";

const run = async () => {
  try {
    const action = buildAction();
    await action.run();
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
