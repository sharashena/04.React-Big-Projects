import React from "react";
// import router
import { Routes, Route, Navigate } from "react-router-dom";
// import context
import { useGlobalContext } from "./context/context";
// import styled-component
import { GlobalStyles } from "./styles/GlobalStyles";
// import components
import Header from "./components/Header";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import { ScrollBtn } from "./components/ScrollBtn";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { useGlobalUserContext } from "./context/user";
import Checkout from "./pages/Checkout";

const App = () => {
  const { loading } = useGlobalContext();
  const { alert, user } = useGlobalUserContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      {alert.show && <Alert />}
      <ScrollBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        {user.token ? (
          <Route path="checkout" element={<Checkout />} />
        ) : (
          <Route path="checkout" element={<Navigate replace to="/login" />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      <div className="footer-info section">
        <div className="section-center">
          <p>
            &copy; {new Date().getFullYear()} - <span>comfysloth </span>all
            rights reserved
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
