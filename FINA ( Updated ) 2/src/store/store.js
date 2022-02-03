import { combine } from "./reducers/mainReducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// lcaol storage

import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage";

export const store = createStore(
  combine,
  loadFromLocalStorage(),
  composeWithDevTools()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
