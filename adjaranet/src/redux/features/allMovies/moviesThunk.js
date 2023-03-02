import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../axios/base";

export const moviesThunk = createAsyncThunk(
  "movies/rowData",
  async (url, thunkAPI) => {
    try {
      const { data } = await baseUrl(url);
      return data.results;
    } catch (error) {
      thunkAPI.rejectWithValue(`error in request ${error.message}`);
    }
  }
);
