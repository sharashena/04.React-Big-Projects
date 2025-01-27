import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../axios/baseURL";

export const productsThunk = createAsyncThunk(
  "products/getProducts",
  async (products, thunkAPI) => {
    try {
      const { data } = await baseURL(products);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `Oops! something went wrong, please check your url: ${products}`
        );
      }
    }
  }
);

export const singleProductThunk = createAsyncThunk(
  "products/single product",
  async (product, thunkAPI) => {
    try {
      const { data } = await baseURL(product);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `Oops! something went wrong, please check your url: ${product}`
        );
      }
    }
  }
);
