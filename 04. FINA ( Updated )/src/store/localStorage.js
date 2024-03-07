export const saveToLocalStorage = state => {
  try {
    const storage = JSON.stringify(state);
    localStorage.setItem("list", storage);
  } catch (error) {
    console.log(error);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("list");
    if (serializedState) {
      return JSON.parse(serializedState);
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
  }
};
