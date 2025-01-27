// redux tools
import { configureStore } from "@reduxjs/toolkit";
import featuredSlice from "./featured/featuredSlice";
import productsSlice from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    featured: featuredSlice,
    products: productsSlice,
    cart: cartSlice,
  },
});
