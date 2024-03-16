import "./styles/styles.css";
import ReactDOM from "react-dom/client";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
