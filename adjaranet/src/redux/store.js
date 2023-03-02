import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/allMovies/moviesSlice";
import bannerSlice from "./features/bannerSlice/bannerSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    banner: bannerSlice,
  },
});
