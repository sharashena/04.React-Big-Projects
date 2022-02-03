import {
  ADD_TO_LIST,
  EDIT_LIST,
  DELETE_LIST,
  CLEAR_LIST,
  HANDLE_CHANGE,
  OVERRIDE_LIST,
  EMPTY_TODO_MODAL,
} from "../actions/handleTodoList";

const defaultState = {
  users: {
    id: null,
    name: "",
    age: "",
    color: "",
  },
  list: [],
  isEdit: false,
  editId: null,
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    // add to list

    case ADD_TO_LIST:
      return {
        ...state,
        users: {
          id: null,
          name: "",
          age: "",
          color: "",
        },
        isEdit: false,
        list: [...state.list, action.payload],
      };

    // edit list

    case EDIT_LIST:
      return {
        ...state,
        isEdit: true,
        editId: action.payload.id,
        users: {
          id: action.payload.id,
          name: action.payload.name,
          age: action.payload.age,
          color: action.payload.color,
        },
      };

    // override list

    case OVERRIDE_LIST:
      return {
        ...state,
        isEdit: false,
        editId: null,
        users: {
          id: null,
          name: "",
          age: "",
          color: "",
        },
        list: action.payload,
      };

    // delete list

    case DELETE_LIST:
      return { ...state, list: action.payload };

    // on change

    case HANDLE_CHANGE:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.name]: action.payload.value,
        },
      };

    // clear list

    case CLEAR_LIST:
      return { ...state, list: [] };

    case EMPTY_TODO_MODAL:
      return {
        ...state,
        users: {
          id: null,
          name: "",
          age: "",
          color: "",
        },
        isEdit: false,
        editId: null,
      };

    default:
      return state;
  }
};
