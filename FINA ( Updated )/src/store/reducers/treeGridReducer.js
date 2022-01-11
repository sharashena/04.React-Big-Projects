import {
  ADD_USER,
  DELETE_LIST,
  CHANGE_USER,
  CLEAR_ITEMS,
} from "../actions/handleTreeGrid";

const defaultState = {
  id: null,
  name: "",
  treeGridList: [],
};

export const treeGridReducer = (state = defaultState, action) => {
  switch (action.type) {
    // users

    case CHANGE_USER:
      return {
        ...state,
        id: action.payload,
        name: action.payload.toString(),
      };

    // folders

    case ADD_USER:
      return {
        ...state,
        id: null,
        name: "",
        treeGridList: [...action.payload],
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        treeGridList: [],
      };
    case DELETE_LIST:
      return {
        ...state,
        treeGridList: action.payload,
      };
    default:
      return state;
  }
};
