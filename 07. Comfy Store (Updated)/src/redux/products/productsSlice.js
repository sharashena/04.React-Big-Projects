import { createSlice } from "@reduxjs/toolkit";
import { productsThunk, singleProductThunk } from "./productsThunk";

const initialState = {
  products: [],
  filteredProducts: [],
  singleProduct: {},
  filters: {
    text: "",
    category: "all",
    company: "all",
    sort: "a-z",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
  loading: false,
  errorMsg: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state.filters[name] = value;
    },
    resetFilters: (state, action) => {
      const maxPrice = action.payload;
      state.filters = {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        sort: "a-z",
        price: maxPrice,
        shipping: false,
      };
      state.filteredProducts = state.products;
    },
    updatePrice: (state, action) => {
      const filters = action.payload;
      state.filters = {
        ...state.filters,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
        price: filters.maxPrice,
      };
    },
    updateFilters: (state, action) => {
      const filters = action.payload;
      state.filteredProducts = filters;
    },
    updateSort: (state, action) => {
      const products = action.payload;
      state.filteredProducts = products;
    },
  },
  extraReducers: build => {
    build.addCase(productsThunk.pending, state => {
      state.loading = true;
    });
    build.addCase(productsThunk.fulfilled, (state, action) => {
      state.loading = false;
      const products = action.payload;
      state.filteredProducts = products;
      state.products = products;
    });
    build.addCase(productsThunk.rejected, (state, action) => {
      const msg = action.payload;
      state.errorMsg = msg;
      state.loading = false;
    });
    // single product
    // single product
    // single product
    build.addCase(singleProductThunk.pending, state => {
      state.loading = true;
    });
    build.addCase(singleProductThunk.fulfilled, (state, action) => {
      const product = action.payload;
      state.loading = false;
      state.singleProduct = product;
    });
    build.addCase(singleProductThunk.rejected, (state, action) => {
      const msg = action.payload;
      state.loading = true;
      state.errorMsg = msg;
    });
  },
});

export const {
  changeFilters,
  resetFilters,
  updatePrice,
  updateFilters,
  updateSort,
} = productsSlice.actions;

export default productsSlice.reducer;
