import {
  ADD_USER_TO_TREE,
  ADD_FOLDER_TO_TREE,
  DELETE_TREE_GRID_ITEM,
  HANDLE_CHANGE_DATA,
  HANDLE_CHANGE_FOLDER,
  HANDLE_EDIT,
  HANDLE_SELECT,
  EMPTY,
  OVERRIDE_TREE_ITEM,
  DEFAULT_SELECTED_ID,
} from "../actions/handleTreeGrid";

const defaultState = {
  selectedId: null,
  name: "",
  folderTxt: "",
  type: "",
  treeGridList: [],
};

export const treeGridReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EMPTY:
      return {
        ...state,
        name: "",
        folderTxt: "",
      };

    // handle change

    case HANDLE_CHANGE_DATA:
      return {
        ...state,
        name: action.payload,
      };
    case HANDLE_CHANGE_FOLDER:
      return {
        ...state,
        folderTxt: action.payload,
      };

    // handle select

    case HANDLE_SELECT:
      return {
        ...state,
        selectedId: action.payload.id,
      };

    // add user

    case ADD_USER_TO_TREE:
      return {
        ...state,
        name: "",
        treeGridList: [...state.treeGridList, action.payload],
      };
    case ADD_FOLDER_TO_TREE:
      return {
        ...state,
        folderTxt: "",
        treeGridList: [...state.treeGridList, action.payload],
      };

    // delete folder

    case DELETE_TREE_GRID_ITEM:
      return {
        ...state,
        selectedId: null,
        treeGridList: action.payload,
      };

    // edit folder

    case HANDLE_EDIT:
      return {
        ...state,
        name: action.payload.type === "" ? action.payload.name : "",
        folderTxt: action.payload.type === "folder" ? action.payload.name : "",
      };

    case OVERRIDE_TREE_ITEM:
      return {
        ...state,
        name: "",
        folderTxt: "",
        treeGridList: action.payload,
      };

    case DEFAULT_SELECTED_ID:
      return {
        ...state,
        selectedId: null,
      };
    default:
      return state;
  }
};
