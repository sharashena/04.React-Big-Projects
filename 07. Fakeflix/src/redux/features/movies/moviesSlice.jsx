import { createSlice } from "@reduxjs/toolkit";

import {
  bannerThunk,
  genresThunk,
  moviesThunk,
  categoryThunk,
  queryThunk,
} from "./moviesThunk";

const storage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const initialState = {
  movies: {},
  banner: {},
  modal: {},
  category: [],
  list: storage(),
  genres: [],
  isModal: false,
  isLoading: false,
  query: "",
  isFetching: false,
  queryData: [],
  errorMsg: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal = action.payload;
      state.isModal = true;
    },
    closeModal: state => {
      state.isModal = false;
    },
    handleChange: (state, action) => {
      state.query = action.payload;
    },
    clearSearch: state => {
      state.query = "";
    },
    addToList: (state, action) => {
      state.list = action.payload;
    },
    removeItem: (state, action) => {
      state.list = action.payload;
      
    },
  },
  extraReducers: build => {
    // banner thunk
    build.addCase(bannerThunk.fulfilled, (state, action) => {
      state.banner = action.payload;
    });
    build.addCase(bannerThunk.rejected, (state, action) => {
      state.errorMsg = action.payload;
    });
    // genres thunk
    build.addCase(genresThunk.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
    build.addCase(genresThunk.rejected, (state, action) => {
      state.errorMsg = action.payload;
    });
    build.addCase(moviesThunk.pending, state => {
      state.isLoading = true;
    });
    build.addCase(moviesThunk.fulfilled, (state, action) => {
      const title = action.payload.title;
      const movies = action.payload.movies;
      state.movies = {
        ...state.movies,
        [title]: movies,
      };
      state.isLoading = false;
    });
    build.addCase(moviesThunk.rejected, (state, action) => {
      state.errorMsg = action.payload;
    });
    build.addCase(categoryThunk.pending, state => {
      state.isFetching = true;
    });
    build.addCase(categoryThunk.fulfilled, (state, action) => {
      state.category = action.payload;
      state.isFetching = false;
    });
    build.addCase(categoryThunk.rejected, (state, action) => {
      state.errorMsg = action.payload;
      state.isFetching = false;
    });
    build.addCase(queryThunk.fulfilled, (state, action) => {
      state.queryData = action.payload;
    });
    build.addCase(queryThunk.rejected, (state, action) => {
      state.errorMsg = action.payload;
    });
  },
});

export const {
  openModal,
  closeModal,
  handleChange,
  clearSearch,
  addToList,
  removeItem,
} = moviesSlice.actions;

export default moviesSlice.reducer;
