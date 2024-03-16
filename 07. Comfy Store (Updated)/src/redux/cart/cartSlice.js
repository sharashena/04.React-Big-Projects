import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
  const storage = localStorage.getItem("cart");
  if (storage) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getFromLocalStorage(),
  shippingFee: 500,
  tax: 0,
  subTotal: 0,
  orderTotal: 0,
  isFullStock: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, singleProduct, amount, currColor, stockArr } = action.payload;
      let tempCart = state.cart.find(
        cartProduct => cartProduct.id === id + currColor
      );
      if (tempCart) {
        tempCart = state.cart.map(cartProduct => {
          if (cartProduct.id === id + currColor) {
            let newAmount = cartProduct.amount + amount;
            if (newAmount > cartProduct.stock) {
              newAmount = cartProduct.stock;
              state.isFullStock = true;
            }
            return { ...cartProduct, amount: newAmount };
          } else {
            return cartProduct;
          }
        });
        state.cart = tempCart;
      } else {
        const newProduct = {
          id: id + currColor,
          name: singleProduct.name,
          company: singleProduct.company,
          img: singleProduct.images[0].url,
          price: singleProduct.price,
          amount,
          color: singleProduct.colors[currColor],
          stockArr,
          stock: singleProduct.stock,
        };
        state.cart = [...state.cart, newProduct];
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    closeTimeout: state => {
      state.isFullStock = false;
    },
    changeAmount: (state, action) => {
      const newAmount = action.payload;
      state.cart = newAmount;
      localStorage.setItem("cart", JSON.stringify(newAmount));
    },
    removeItem: (state, action) => {
      const product = action.payload;
      state.cart = product;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    calculateTotals: (state, action) => {
      const totalPrices = action.payload.totalPrices;
      const totalAmounts = action.payload.totalAmounts;
      state.subTotal = totalAmounts;
      state.tax = 0.1 * totalAmounts;
      state.orderTotal = state.shippingFee + totalPrices + totalPrices;
    },
    clearCart: state => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  closeTimeout,
  changeAmount,
  removeItem,
  calculateTotals,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
