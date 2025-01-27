import { createAsyncThunk } from "@reduxjs/toolkit";

// axios
import { baseURL } from "../../../axios";

const bannerThunk = createAsyncThunk(
  "moviesSlice/getRandomBanner",
  async ({ b, signal }, thunkAPI) => {
    try {
      const { data } = await baseURL(b, { signal });
      const randomMovie = Math.floor(Math.random() * data.results.length);
      return data.results[randomMovie];
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("request was aborted");
      }
      console.log(error.message);
      thunkAPI.rejectWithValue(`Oops, There is a mistake during fetching data`);
    }
  }
);

const genresThunk = createAsyncThunk(
  "moviesSlice/getGenresList",
  async (g, thunkAPI) => {
    try {
      const {
        data: { genres },
      } = await baseURL(g);

      return genres;
    } catch (error) {
      console.log(error.message);
      thunkAPI.rejectWithValue(`Oops, There is a mistake during fetching data`);
    }
  }
);

const moviesThunk = createAsyncThunk(
  "/moviesSlice/getMovies",
  async ({ title, url, signal }, thunkAPI) => {
    try {
      const { data } = await baseURL(url, { signal });
      const newObj = {
        movies: data.results,
        title,
      };
      return newObj;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("request was aborted");
      }
      console.log(error);
      thunkAPI.rejectWithValue(`Oops, There is a mistake during fetching data`);
    }
  }
);

const categoryThunk = createAsyncThunk(
  "/moviesSlice/getCategory",
  async ({ category, signal, page }, thunkAPI) => {
    try {
      const { data } = await baseURL(category, { signal });
      const { category: cat } = thunkAPI.getState().moviesSlice;

      if (page === 1) {
        return data.results;
      } else {
        return [...cat, ...data.results];
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.log(error.message);
      }
      thunkAPI.rejectWithValue(`Oops, There is a mistake during fetching data`);
    }
  }
);

const queryThunk = createAsyncThunk(
  "/moviesSlice/searchQuery",
  async ({ query, signal }, thunkAPI) => {
    try {
      const { data } = await baseURL(query, { signal });
      return data.results;
    } catch (error) {
      console.log(error.message);
      thunkAPI.rejectWithValue(`Oops, There is a mistake during fetching data`);
    }
  }
);

export { bannerThunk, genresThunk, moviesThunk, categoryThunk, queryThunk };
