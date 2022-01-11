import { combineReducers } from "redux";
// reducers
import { todoReducer } from "./todoReducer";
import { modalReducer } from "./modalReducer";
import { treeGridReducer } from "./treeGridReducer";

export const combine = combineReducers({
  todoState: todoReducer,
  modalState: modalReducer,
  treeGridState: treeGridReducer,
});
