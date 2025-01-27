import { configureStore } from "@reduxjs/toolkit";

// states
import productsSlice from "./home/productsSlice";
import moviesAndTvsSlice from "./movies & tvs/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    moviesAndTvs: moviesAndTvsSlice,
  },
});
