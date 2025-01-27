export const formatText = (n, str) => {
  return n > 200 ? str.slice(0, n - 180) + "..." : str;
};
