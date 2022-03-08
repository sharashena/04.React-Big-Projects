import { combineReducers } from "redux";
import { movies } from "./movies";

export const combine = combineReducers({
  moviesState: movies,
});
