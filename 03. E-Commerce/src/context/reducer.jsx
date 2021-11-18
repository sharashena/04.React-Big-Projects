export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: action.payload };
    case "REMOVE_CART":
      return { ...state, cart: action.payload };
    case "INCREASE":
      return { ...state, cart: action.payload };
    case "DECREASE":
      return { ...state, cart: action.payload };
    case "DECREASE_SINGLE_CART":
      return { ...state, cart: action.payload };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "SUB_TOTAL":
      let { subTotal, countItem } = state.cart.reduce(
        (total, item) => {
          const { price, amount } = item;
          let totalPrice = price * amount;
          total.subTotal += totalPrice;
          total.countItem += amount;
          return total;
        },
        {
          subTotal: 0,
          countItem: 0,
        }
      );
      return { ...state, subTotal, countItem };
  }
  throw new Error("Error In Reducer");
};
