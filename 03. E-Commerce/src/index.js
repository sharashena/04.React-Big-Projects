import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import router
import { BrowserRouter as Router } from "react-router-dom";
// import context
import { AppProvider } from "./context/context";
// import cart context
import { CartProvider } from "./context/cart";
// import user context
import { UserProvider } from "./context/user";

ReactDOM.render(
  <UserProvider>
    <AppProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </AppProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
