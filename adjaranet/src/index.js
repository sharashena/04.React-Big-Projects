import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

// router
import { BrowserRouter as Router } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
