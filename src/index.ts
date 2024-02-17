import * as core from "@actions/core";

import { main } from "./main";

main().catch((error: unknown) => {
  if (error instanceof Error || typeof error === "string") {
    core.setFailed(error);
  } else {
    core.setFailed(
      "Unexpected error happened when running github-action-template",
    );
  }
});
