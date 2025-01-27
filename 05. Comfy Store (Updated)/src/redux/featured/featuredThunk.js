import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../axios/baseURL";

export const featuredThunk = createAsyncThunk(
  "featured/featured products",
  async (products, thunkAPI) => {
    try {
      const { data } = await baseURL(products);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `Oops! something wrong with your api. Please check url`
        );
      }
    }
  }
);
