import { createSlice } from "@reduxjs/toolkit";
import { genresThunk, productsThunk } from "./productsThunk";

const initialState = {
  genres: [],
  products: [],
  filteredProducts: [],
  loading: false,
  query: "",
};

const productsSlice = createSlice({
  name: "movies and tvs",
  initialState,
  reducers: {
    changeFilters: (state, action) => {},
    changeInput: (state, action) => {
      const value = action.payload;
      state.query = value;
    },
    clearFilters: state => {
      state.query = "";
    },
  },
  extraReducers: build => {
    // genres
    // genres
    // genres
    build.addCase(genresThunk.fulfilled, (state, action) => {
      const genres = action.payload;
      state.genres = genres;
    });
    build.addCase(genresThunk.rejected, (_, action) => {
      console.log(action.payload);
    });

    // products
    // products
    // products
    build.addCase(productsThunk.pending, state => {
      state.loading = true;
    });
    build.addCase(productsThunk.fulfilled, (state, action) => {
      state.loading = false;
      const products = action.payload;

      if (state.query && products.page === 1) {
        state.filteredProducts = products.results;
      } else if (state.query) {
        state.filteredProducts = [
          ...state.filteredProducts,
          ...products.results,
        ];
      } else {
        state.filteredProducts = [
          ...state.filteredProducts,
          ...products.results,
        ];
      }
      state.products = [...state.products, ...products.results];
    });
    build.addCase(productsThunk.rejected, (state, action) => {
      state.loading = true;
      console.log(action.payload);
    });
  },
});

export const { changeFilters, changeInput, clearFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
