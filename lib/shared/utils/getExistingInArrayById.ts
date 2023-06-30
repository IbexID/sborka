export const getExistingInArrayById = <T extends { id: number }>(
  arr: T[],
  id: number
) => {
  return arr.find((item) => item.id === id);
};
