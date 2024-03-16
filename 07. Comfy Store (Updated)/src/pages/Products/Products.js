// react
import { useEffect } from "react";

// redux
import { productsThunk } from "../../redux/products/productsThunk";

import FiltersFrom from "../../components/Products/FiltersForm";
import ProductsComponent from "../../components/Products/Products";

// redux
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const { loading } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsThunk("react-store-products"));
  }, []);

  if (loading) {
    return (
      <div className="products-loading">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <main>
      <section className="section">
        <div className="section-center products-center">
          <FiltersFrom />
          <ProductsComponent />
        </div>
      </section>
    </main>
  );
};

export default Products;
