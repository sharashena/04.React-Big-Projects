export const ADD_USER_TO_TREE = "ADD_USER_TO_TREE";
export const ADD_FOLDER_TO_TREE = "ADD_FOLDER_TO_TREE";
export const DELETE_TREE_GRID_ITEM = "DELETE_TREE_GRID_ITEM";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const HANDLE_CHANGE_FOLDER = "HANDLE_CHANGE_FOLDER";
export const HANDLE_EDIT = "HANDLE_EDIT";
export const HANDLE_SELECT = "HANDLE_SELECT";
export const EMPTY = "EMPTY";
export const OVERRIDE_TREE_ITEM = "OVERRIDE_TREE_ITEM";
// add users

export const addUserToTree = newList => {
  return { type: ADD_USER_TO_TREE, payload: newList };
};

export const addFolderToTree = newFolder => {
  return { type: ADD_FOLDER_TO_TREE, payload: newFolder };
};

// delete list

export const deleteList = deleteList => {
  return { type: DELETE_TREE_GRID_ITEM, payload: deleteList };
};

// handle change user

export const handleChange = value => {
  return { type: HANDLE_CHANGE, payload: value };
};

// handle select

export const handleSelect = newItem => {
  return { type: HANDLE_SELECT, payload: newItem };
};

// handle edit

export const editItem = newItem => {
  return { type: HANDLE_EDIT, payload: newItem };
};

// change folder

export const changeFolder = value => {
  return { type: HANDLE_CHANGE_FOLDER, payload: value };
};

// empty folder

export const empty = () => {
  return { type: EMPTY };
};

// override tree item

export const overrideTreeItem = newItem => {
  return { type: OVERRIDE_TREE_ITEM, payload: newItem };
};
