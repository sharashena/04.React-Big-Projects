import { createSlice } from "@reduxjs/toolkit";
import { moviesThunk } from "./moviesThunk";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: builder => {
    builder.addCase(moviesThunk.fulfilled, (state, action) => {
      const payload = action.payload;
      state.movies = payload;
    });
  },
});

export default moviesSlice.reducer;
