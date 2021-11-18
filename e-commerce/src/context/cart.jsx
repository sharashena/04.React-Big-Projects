import React, { useReducer, useContext } from "react";
import { reducer } from "./reducer";
// reducer
import * as cart from "./actions";

const CartContext = React.createContext();

const getFromLocalStorage = () => {
  let storage = localStorage.getItem("cart");
  if (storage) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getFromLocalStorage(),
  countItem: 0,
  subTotal: 0,
  total: 0,
  fee: 1000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // localStorage

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  React.useEffect(() => {
    dispatch({ type: cart.SUB_TOTAL });
  }, [state.cart]);

  // logic

  const addToCart = product => {
    const { id, name, price, colors, image } = product;
    const item = [...state.cart].find(item => item.id === id);
    console.log(item);
    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newItem = { id, name, price, colors, image, amount: 1 };
      const newCart = [...state.cart, newItem];
      dispatch({ type: cart.ADD_CART, payload: newCart });
    }
  };

  const increaseAmount = id => {
    const newItem = state.cart.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return { ...item };
      }
    });
    dispatch({ type: cart.INCREASE, payload: newItem });
  };

  const decreaseAmount = (id, quantity) => {
    if (quantity === 1) {
      return removeItem(id);
    } else {
      const newCart = [...state.cart].map(item => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      dispatch({ type: cart.DECREASE, payload: newCart });
    }
  };

  const removeItem = id => {
    const newItem = state.cart.filter(item => item.id !== id);
    if (newItem) {
      dispatch({ type: cart.REMOVE_CART, payload: newItem });
    }
  };

  function clearCart() {
    dispatch({ type: cart.CLEAR_CART });
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        decreaseAmount,
        increaseAmount,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useGlobalCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useGlobalCartContext };
