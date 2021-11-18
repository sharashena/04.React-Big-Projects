import React from "react";
// import router link
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart section">
      <h1>your cart is empty</h1>
      <Link to="/products" className="btn btn-primary">
        fill it
      </Link>
    </div>
  );
};

export default EmptyCart;
