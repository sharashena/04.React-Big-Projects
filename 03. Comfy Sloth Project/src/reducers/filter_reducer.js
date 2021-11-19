import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let max_price = action.payload.map(product => product.price);
      max_price = Math.max(...max_price);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price, price: max_price },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          } else if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      }
      if (sort === "price-higest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let temp = [...all_products];
      // text
      if (text) {
        temp = temp.filter(product => {
          return product.name.toLowerCase().startsWith(text);
        });
      }
      // category
      if (category !== "all") {
        temp = temp.filter(product => product.category === category);
      }
      // company
      if (company !== "all") {
        temp = temp.filter(product => product.company === company);
      }
      // colors
      if (color !== "all") {
        temp = temp.filter(product => {
          return product.colors.find(c => c === color);
        });
      }
      if (shipping) {
        temp = temp.filter(product => product.shipping === true);
      }
      temp = temp.filter(product => product.price <= price);

      return { ...state, filtered_products: temp };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
