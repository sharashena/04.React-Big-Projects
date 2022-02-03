export const ADD_TO_LIST = "ADD_TO_LIST";
export const EDIT_LIST = "EDIT_LIST";
export const OVERRIDE_LIST = "OVERRIDE_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const CLEAR_LIST = "CLEAR_LIST";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const EMPTY_TODO_MODAL = "EMPTY_TODO_MODAL";

// add list

export const addToList = newList => {
  return { type: ADD_TO_LIST, payload: newList };
};

// delete list

export const editItem = newList => {
  return { type: EDIT_LIST, payload: newList };
};

export const overrideItem = mapList => {
  return { type: OVERRIDE_LIST, payload: mapList };
};

// delete list

export const delList = deleteList => {
  return { type: DELETE_LIST, payload: deleteList };
};

// clear list

export const clear = () => {
  return { type: CLEAR_LIST };
};

// on change

export const handleChange = (name, value) => {
  return { type: HANDLE_CHANGE, payload: { name, value } };
};

// empty

export const emptyTodoModal = () => {
  return { type: EMPTY_TODO_MODAL };
};
