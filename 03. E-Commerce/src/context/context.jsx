import React, { createContext, useContext, useState, useEffect } from "react";
// import url
import { URL } from "../tools/URL";
// import useFetch
import { useFetch } from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { products, loading, featured, filtered, setFiltered } = useFetch(URL);
  const [values, setValues] = useState({
    search: "",
    company: "all",
    price: 0,
    maxPrice: 0,
    shipping: false,
    sort: "priceLow",
  });
  const [trueColor, setTrueColor] = useState(false);
  const [colorIndex, setColorIndex] = useState(-1);
  const [grid, setGrid] = useState(true);
  const [grid2, setGrid2] = useState(false);
  const [value, setValue] = useState(0);

  // category active btn

  const activeCategoryBtn = index => {
    setValue(index);
  };

  // toggle layout

  const toggleGrid = () => {
    setGrid(true);
    setGrid2(false);
  };

  const toggleGrid2 = () => {
    setGrid2(true);
    setGrid(false);
  };

  // toggle color

  const toggleTrueColor = () => {
    setTrueColor(!trueColor);
  };

  useEffect(() => {
    const maxPrice = Math.max(
      ...products.map(item => {
        const price = parseFloat(item.price.toFixed(2));
        return price;
      })
    );
    setValues({ ...values, maxPrice, price: maxPrice });
  }, [products]);

  // filters

  useEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);

    if (values.search !== "") {
      newProducts = newProducts.filter(item => {
        let title = item.name.toLowerCase().trim();
        return title.startsWith(values.search) ? item : null;
      });
    }

    if (values.company !== "all") {
      newProducts = newProducts.filter(item => item.company === values.company);
    }

    if (values.price !== 0) {
      newProducts = newProducts.filter(item => values.price >= item.price);
    }

    if (values.shipping === true) {
      newProducts = newProducts.filter(
        item => item.shipping === values.shipping
      );
    }

    if (values.sort === "priceHigh") {
      newProducts = newProducts.sort((a, b) => b.price - a.price);
    }

    if (values.sort === "nameA") {
      newProducts = newProducts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    if (values.sort === "nameB") {
      newProducts = newProducts.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }

    setFiltered(newProducts);
  }, [products, values]);

  // clear filters

  const clearFilters = () => {
    const maxPrice = Math.max(...products.map(item => item.price));
    setValues({
      ...values,
      search: "",
      company: "all",
      price: maxPrice,
      maxPrice: maxPrice,
      shipping: false,
      sort: "",
    });
    setColorIndex(-1);
  };

  // filter category

  const categoryFilter = category => {
    setFiltered(products);
    if (category === "all") {
      return setFiltered(products);
    }
    if (values.sort === "priceLow") {
      const newItem = products
        .filter(item => item.category === category)
        .sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      setFiltered(newItem);
    } else if (values.sort === "priceHigh") {
      const newItem = products
        .filter(item => item.category === category)
        .sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
      setFiltered(newItem);
    } else if (values.sort === "nameA") {
      const newItem = products
        .filter(item => item.category === category)
        .sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
      setFiltered(newItem);
    } else if (values.sort === "nameB") {
      const newItem = products
        .filter(item => item.category === category)
        .sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      setFiltered(newItem);
    }
  };

  // filter colors

  const filterColors = colors => {
    setFiltered(products);
    const newColors = [...products].filter(item => item.colors[0] === colors);
    setFiltered(newColors);
  };

  const changeIndex = index => {
    setColorIndex(index);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  // all color

  const allColor = () => {
    const newColors = products.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
    setFiltered(newColors);
  };

  // handle change

  const handleChange = e => {
    const target = e.target;
    const name = e.target.name;
    const value = e.target.value;
    const newValue = target.type === "checkbox" ? target.checked : value;
    setValues({ ...values, [name]: newValue });
  };

  return (
    <AppContext.Provider
      value={{
        products,
        loading,
        featured,
        filtered,
        handleChange,
        handleSubmit,
        values,
        clearFilters,
        categoryFilter,
        filterColors,
        toggleTrueColor,
        trueColor,
        colorIndex,
        changeIndex,
        allColor,
        toggleGrid,
        toggleGrid2,
        grid,
        grid2,
        activeCategoryBtn,
        value,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
