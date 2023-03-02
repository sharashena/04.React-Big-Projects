import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../axios/base";
import { movieRequests } from "../../../helpers/requests";

export const bannerThunk = createAsyncThunk(
  "banner/data",
  async (_, thunkAPI) => {
    try {
      const { data } = await baseUrl(movieRequests.fetchPopular);
      return data.results;
    } catch (error) {
      thunkAPI.rejectWithValue(
        "something isn't correctly in your state" + error.message
      );
    }
  }
);
