import { useState, useEffect } from "react";
// import axios
import axios from "axios";
// import helper
import { featuredProducts } from "../tools/helper";

export const useFetch = url => {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url).catch(err => console.log(err));
      const { data } = res;
      const featured = featuredProducts(data);
      setProducts(data);
      setFeatured(featured);
      setFiltered(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    loading,
    featured,
    filtered,
    setFiltered,
  };
};
