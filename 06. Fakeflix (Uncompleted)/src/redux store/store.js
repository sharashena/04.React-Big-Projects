import { createStore } from "redux";
import { combine } from "./reducers/combine";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(combine, composeWithDevTools());
