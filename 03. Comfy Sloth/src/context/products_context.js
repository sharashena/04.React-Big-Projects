import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
import { baseUrl } from "../helpers/axios";
import { URL } from "../helpers/URL";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gridView, setGridView] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await baseUrl(URL);
      if (res) {
        const newProducts = res.data
          .filter(product => product.featured === true)
          .slice(0, 3);
        setFeaturedProducts(newProducts);
        setProducts(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [URL]);

  const fetchSingleProduct = async id => {
    setLoading(true);
    const { data } = await baseUrl(`/react-store-single-product?id=${id}`);
    setSingleProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const toggleGridView = index => {
    setGridView(index);
  };

  return (
    <ProductsContext.Provider
      value={{
        featuredProducts,
        loading,
        products,
        gridView,
        toggleGridView,
        setProducts,
        fetchSingleProduct,
        singleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider, useProductsContext };
