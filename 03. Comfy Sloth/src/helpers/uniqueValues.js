export const uniqueValues = (arr, value) => {
  let unique = arr.map(item => item[value]);
  if (value === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
