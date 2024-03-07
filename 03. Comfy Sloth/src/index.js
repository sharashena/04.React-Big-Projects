import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
// router
import { BrowserRouter as Router } from "react-router-dom";

// context api
import { NavProvider } from "./context/nav_context";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </NavProvider>
);
