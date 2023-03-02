import { createSlice } from "@reduxjs/toolkit";
import { bannerThunk } from "./bannerThunk";

const initialState = {
  banner: [],
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(bannerThunk.fulfilled, (state, action) => {
      const payload = action.payload;
      state.banner = payload;
    });
  },
});

export const {} = bannerSlice.actions;
export default bannerSlice.reducer;
