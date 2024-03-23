// axios
import { baseURL } from "../../axios/baseURL";

import { createAsyncThunk } from "@reduxjs/toolkit";

// genres thunk
// genres thunk
// genres thunk
export const genresThunk = createAsyncThunk(
  "moviesAndTvs/genres",
  async (g, thunkAPI) => {
    try {
      const {
        data: { genres },
      } = await baseURL(g);
      return genres;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `Oops! There is something wrong with your api, check again ${baseURL(
            g
          )}`
        );
      }
    }
  }
);

export const productsThunk = createAsyncThunk(
  "moviesAndTvs/products",
  async products => {
    try {
      const {
        data: { results },
      } = await baseURL(products.path || products.queryPath);
      return { results, page: products.page };
    } catch (error) {
      console.log(error);
    }
  }
);
