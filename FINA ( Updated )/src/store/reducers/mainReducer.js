import { combineReducers } from "redux";
// reducers
import { todoReducer } from "./todoReducer";
import { treeGridReducer } from "./treeGridReducer";

export const combine = combineReducers({
  todoState: todoReducer,
  treeGridState: treeGridReducer,
});
