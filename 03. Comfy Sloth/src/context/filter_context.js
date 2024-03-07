import { useState, useEffect, useContext, createContext } from "react";
import { useProductsContext } from "./products_context";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [filters, setFilters] = useState({
    name: "",
    category: "all",
    company: "all",
    colors: "all",
    sort: "price-lowest",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    shipping: false,
  });
  const [currIndex, setCurrIndex] = useState(0);
  const [currCategory, setCurrCategory] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
    let maxPrice = products.map(product => product.price);
    maxPrice = Math.max(...maxPrice);
    setFilters({
      ...filters,
      maxPrice,
      price: maxPrice,
    });
  }, [products]);

  useEffect(() => {
    filterProducts();
  }, [filters]);

  useEffect(() => {
    updateSort();
  }, [filters.sort, filters]);

  const handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else if (name === "category") {
      value = e.target.textContent;
    } else if (name === "colors") {
      value = e.target.dataset.color;
    } else if (name === "price") {
      value = Number(value);
    }
    setFilters({ ...filters, [name]: value });
  };

  const updateSort = () => {
    const { sort: sortBy } = filters;
    let tempProducts = [...filteredProducts];
    setFilteredProducts(oldVal => {
      if (sortBy === "price-lowest") {
        tempProducts = oldVal.sort((a, b) => a.price - b.price);
      }
      if (sortBy === "price-highest") {
        tempProducts = oldVal.sort((a, b) => b.price - a.price);
      }
      if (sortBy === "name-a") {
        tempProducts = oldVal.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sortBy === "name-z") {
        tempProducts = oldVal.sort((a, b) => b.name.localeCompare(a.name));
      }
      return oldVal;
    });
  };

  const filterProducts = () => {
    const { name, category, company, colors, price, shipping } = filters;
    let tempProducts = [...products];
    if (name) {
      tempProducts = tempProducts.filter(product => {
        return product.name.toLowerCase().includes(name);
      });
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(product => {
        return product.category === category;
      });
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(product => {
        return product.company === company;
      });
    }
    if (colors !== "all") {
      tempProducts = tempProducts.filter(product => {
        return product.colors.find(c => c === colors);
      });
    }
    if (shipping) {
      tempProducts = tempProducts.filter(product => {
        return product.shipping === true;
      });
    }
    tempProducts = tempProducts.filter(product => {
      return product.price <= price;
    });

    setFilteredProducts(tempProducts);
  };

  const clearFilters = () => {
    setFilters({
      ...filters,
      name: "",
      category: "all",
      company: "all",
      colors: "all",
      sort: "price-lowest",
      price: filters.maxPrice,
      shipping: false,
    });
    setCurrCategory(0);
    setCurrIndex(0);
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        handleChange,
        clearFilters,
        currCategory,
        currIndex,
        setCurrCategory,
        setCurrIndex,
        filterProducts,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider, useFilterContext };
