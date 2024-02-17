import * as core from "@actions/core";

import { sleep } from "./sleep";

export const main = async () => {
  core.info("Running github-action-template");
  await sleep(3000);
  core.info("Finished github-action-template");
};
