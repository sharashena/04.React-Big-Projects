import { MODAL_FALSE, MODAL_TRUE } from "../actions/toggleModal";

const defaultState = {
  open: false,
};

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    // toggle modal

    case MODAL_TRUE:
      return {
        ...state,
        open: true,
      };
    case MODAL_FALSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
