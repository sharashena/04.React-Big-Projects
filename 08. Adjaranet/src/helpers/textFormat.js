export const textFormat = (n, str) => {
  return n > 150 ? str.slice(0, 200) + "..." : str;
};
