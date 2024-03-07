import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import { Navbar, Sidebar, Footer } from "./components";

// pages
import {
  Home,
  About,
  Products,
  SingleProduct,
  ProductsLayout,
  Cart,
  Checkout,
  Login,
  Error,
  PrivateRoute,
} from "./pages";

const App = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <>
      {size > 992 ? <Navbar /> : <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductsLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
