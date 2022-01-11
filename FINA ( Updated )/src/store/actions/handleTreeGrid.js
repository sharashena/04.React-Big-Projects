export const ADD_USER = "ADD_USER";
export const DELETE_LIST = "DELETE_LIST";
export const CLEAR_ITEMS = "CLEAR_ITEMS";
export const CHANGE_USER = "CHANGE_USER";

// add users

export const addUser = newList => {
  return { type: ADD_USER, payload: newList };
};

// delete list

export const deleteList = deleteList => {
  return { type: DELETE_LIST, payload: deleteList };
};

// clear Items

export const clearItems = () => {
  return { type: CLEAR_ITEMS };
};

// on change

export const changeUser = value => {
  return { type: CHANGE_USER, payload: value };
};
