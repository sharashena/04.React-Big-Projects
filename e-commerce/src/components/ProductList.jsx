import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <p className="no-item">
        unfortunately, no items found. try different one
      </p>
    );
  }

  return (
    <div className="featured-center">
      {products.map(item => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ProductList;
