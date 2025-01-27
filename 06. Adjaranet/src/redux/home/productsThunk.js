import { createAsyncThunk } from "@reduxjs/toolkit";

// genres
import { allGenres } from "../../helpers/genres";

// axios
import { baseURL } from "../../axios/baseURL";

// helpers
import { multiSearch } from "../../helpers/multiSearch";

export const productsThunk = createAsyncThunk(
  "products/heroProducts",
  async (url, thunkAPI) => {
    try {
      const res = await baseURL(url);
      return res.data.results.slice(0, 6);
    } catch (error) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          `Oops! There is something wrong with your api ${baseURL(url)}`
        );
      }
    }
  }
);

export const rowsThunk = createAsyncThunk(
  "products/rows",
  async ({ title, request }, thunkAPI) => {
    try {
      const {
        data: { results },
      } = await baseURL(request);
      return { data: results, title };
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `Can't display rows api, maybe have any problem with fetching data, please check url: ${request}`
        );
      }
    }
  }
);

export const genresThunk = createAsyncThunk(
  "products/genres",
  async (firstAirDate, thunkAPI) => {
    try {
      const {
        data: { genres },
      } = await baseURL(allGenres(firstAirDate));
      return genres;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `There is something error with your genres api, please check url ${baseURL(
            allGenres(firstAirDate)
          )}`
        );
      }
    }
  }
);

export const creditsThunk = createAsyncThunk(
  "products/credits",
  async (credits, thunkAPI) => {
    try {
      const { data } = await baseURL(credits);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `There is something error with your genres api, please check url ${credits}`
        );
      }
    }
  }
);

export const searchProductsThunk = createAsyncThunk(
  "products/searchedProducts",
  async (query, thunkAPI) => {
    try {
      const {
        data: { results },
      } = await baseURL(`${multiSearch}&query=${query}`);
      return results;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          `There is something error with your genres api, please check url ${error.message}`
        );
      }
    }
  }
);
