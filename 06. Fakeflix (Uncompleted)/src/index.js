import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// context
import { AppProvider } from "./context";
// router
import { BrowserRouter as Router } from "react-router-dom";
// material
import { ThemeProvider } from "@mui/styles";
import { theme } from "./mui/theme";
// redux
import { Provider } from "react-redux";
import { store } from "./redux store/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
