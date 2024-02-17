import { Inputs } from "@src/inputs/inputs";

import { MotherCreator } from "../mother-creator";

export const InputsMother = {
  random({ name = MotherCreator.randomWord() }): Inputs {
    return {
      name,
    };
  },

  withoutName(): Inputs {
    return {};
  },
};
