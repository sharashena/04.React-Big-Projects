export const themeFromStorage = () => {
  let storage = localStorage.getItem("theme");
  if (storage) {
    storage = JSON.parse(localStorage.getItem("theme"));
  } else {
    storage = "light-theme";
  }
  return storage;
};
