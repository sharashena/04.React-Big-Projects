export const getUnique = (arr, value) => {
  const newArr = new Set(arr.map(product => product[value]));
  return ["all", ...newArr];
};
