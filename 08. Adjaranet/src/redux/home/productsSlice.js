import { createSlice } from "@reduxjs/toolkit";
import {
  productsThunk,
  rowsThunk,
  genresThunk,
  creditsThunk,
  searchProductsThunk,
} from "./productsThunk";

const getFromLocalStorage = () => {
  const storage = localStorage.getItem("theme");
  if (storage) {
    return JSON.parse(localStorage.getItem("theme"));
  } else {
    return "light";
  }
};

const initialState = {
  theme: getFromLocalStorage(),
  heroProducts: [],
  rowProducts: {},
  modal: {},
  genres: [],
  credits: {},
  searchProducts: [],
  size: window.innerWidth,
  search: "",
  language: "",
  isSingleModalOpen: false,
  isSidebarOpen: false,
  isLoadingRows: false,
  isActiveSearchContainer: false,
  isActiveSearchBar: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    openSidebar: state => {
      state.isSidebarOpen = true;
    },
    closeSidebar: state => {
      state.isSidebarOpen = false;
    },
    changeThemeToDark: state => {
      state.theme = "dark";
    },
    changeThemeToLight: state => {
      state.theme = "light";
    },
    changeSize: (state, action) => {
      const size = action.payload;
      state.size = size;
    },
    changeSearchInput: (state, action) => {
      const search = action.payload;
      state.search = search;
    },
    changeLanguages: (state, action) => {
      const language = action.payload;
      state.language = language;
    },
    openModal: (state, action) => {
      const modal = action.payload;
      state.modal = modal;
    },
    clearHeroSearch: state => {
      state.search = "";
    },
    openSearchBar: state => {
      state.isActiveSearchBar = true;
    },
    closeSearchBar: state => {
      state.isActiveSearchBar = false;
    },
    openSearchContainer: state => {
      state.isActiveSearchContainer = true;
    },
    closeSearchContainer: state => {
      state.isActiveSearchContainer = false;
    },
  },

  extraReducers: build => {
    // hero products
    // hero products
    // hero products
    build.addCase(productsThunk.fulfilled, (state, action) => {
      const products = action.payload;
      state.heroProducts = products;
    });
    build.addCase(productsThunk.rejected, (_, action) => {
      console.log(action);
    });

    // rows products
    // rows products
    // rows products
    build.addCase(rowsThunk.pending, state => {
      state.isLoadingRows = true;
    });
    build.addCase(rowsThunk.fulfilled, (state, action) => {
      const { data, title } = action.payload;
      state.isLoadingRows = false;
      state.rowProducts = { ...state.rowProducts, [title]: data };
    });
    build.addCase(rowsThunk.rejected, (state, action) => {
      state.isLoadingRows = false;
      console.log(action);
    });

    // product genres
    // product genres
    // product genres
    build.addCase(genresThunk.fulfilled, (state, action) => {
      const genres = action.payload;
      state.genres = genres;
    });
    build.addCase(genresThunk.rejected, (_, action) => {
      console.log(action);
    });

    // product credits
    // product credits
    // product credits
    build.addCase(creditsThunk.fulfilled, (state, action) => {
      const credits = action.payload;
      state.credits = {
        ...state.credits,
        crew: credits.crew,
        cast: credits.cast,
      };
    });
    build.addCase(creditsThunk.rejected, (_, action) => {
      console.log(action);
    });

    // searched products
    // searched products
    // searched products
    build.addCase(searchProductsThunk.fulfilled, (state, action) => {
      const products = action.payload;
      state.searchProducts = products;
    });
    build.addCase(searchProductsThunk.rejected, (_, action) => {
      console.log(action.payload);
    });
  },
});

export const {
  openSidebar,
  closeSidebar,
  changeThemeToDark,
  changeThemeToLight,
  changeSize,
  changeSearchInput,
  changeLanguages,
  openModal,
  clearHeroSearch,
  openSearchBar,
  closeSearchBar,
  openSearchContainer,
  closeSearchContainer,
} = productsSlice.actions;

export default productsSlice.reducer;
