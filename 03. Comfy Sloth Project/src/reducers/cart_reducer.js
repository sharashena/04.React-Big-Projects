import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find(product => product.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map(product => {
          if (product.id === id + color) {
            let newAmount = product.amount + amount;
            if (newAmount > product.max) {
              newAmount = product.max;
            }
            return { ...product, amount: newAmount };
          } else {
            return product;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        console.log(newProduct);
        return { ...state, cart: [...state.cart, newProduct] };
      }
    case REMOVE_CART_ITEM:
      return { ...state, cart: action.payload };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: cartID, value } = action.payload;
      const tempCart = state.cart.map(cart => {
        if (cart.id === cartID) {
          if (value === "inc") {
            let newAmount = cart.amount + 1;
            if (newAmount > cart.max) {
              newAmount = cart.max;
            }
            return { ...cart, amount: newAmount };
          }
          if (value === "dec") {
            let newAmount = cart.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...cart, amount: newAmount };
          }
        } else {
          return cart;
        }
      });
      return { ...state, cart: tempCart };
    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cart) => {
          const { amount, price } = cart;
          total.total_items += amount;
          total.total_amount += amount * price;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
