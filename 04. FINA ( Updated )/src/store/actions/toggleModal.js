export const MODAL_TRUE = "MODAL_TRUE";
export const MODAL_FALSE = "MODAL_FALSE";

export const modalOpen = () => {
  return { type: MODAL_TRUE };
};

export const modalClose = () => {
  return { type: MODAL_FALSE };
};
