export const sleep = async (milliseconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
};
