import { createSlice } from "@reduxjs/toolkit";
import { featuredThunk } from "./featuredThunk";

const getFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return JSON.parse(localStorage.getItem("theme"));
  } else {
    return "light-theme";
  }
};

const initialState = {
  products: [],
  theme: getFromLocalStorage(),
  loading: false,
  errorMsg: "",
  isError: false,
};

const featuredSlice = createSlice({
  name: "featured products",
  initialState,
  reducers: {
    lightTheme: (state, action) => {
      const theme = action.payload;
      state.theme = theme;
    },
    darkTheme: (state, action) => {
      const theme = action.payload;
      state.theme = theme;
    },
  },
  extraReducers: build => {
    build.addCase(featuredThunk.pending, state => {
      state.loading = true;
    });
    build.addCase(featuredThunk.fulfilled, (state, action) => {
      const products = action.payload;
      const featured = products.filter(product => product.featured === true);
      state.products = featured;
      state.loading = false;
    });
    build.addCase(featuredThunk.rejected, (state, action) => {
      const msg = action.payload;
      state.errorMsg = msg;
      state.isError = true;
    });
  },
});

export const { lightTheme, darkTheme } = featuredSlice.actions;

export default featuredSlice.reducer;
