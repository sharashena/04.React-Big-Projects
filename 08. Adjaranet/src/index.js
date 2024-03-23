import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

// router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
