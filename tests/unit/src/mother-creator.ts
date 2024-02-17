import { faker } from "@faker-js/faker";

export const MotherCreator = {
  randomWord(): string {
    return faker.word.words();
  },
};
