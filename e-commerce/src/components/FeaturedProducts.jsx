import React from "react";
// import router link
import { Link } from "react-router-dom";
import Title from "./Title";
import ProductList from "./ProductList";
// import context
import { useGlobalContext } from "../context/context";

const FeaturedProducts = () => {
  const { featured } = useGlobalContext();

  return (
    <section className="section featured-section">
      <div className="section-center">
        <div className="section-title">
          <Title title="featured products" />
          <div className="underline"></div>
        </div>
        {/* product list */}
        <ProductList products={featured} />
        <div className="btn">
          <Link to="products" className="btn btn-primary featured-btn">
            all products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
