import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-92s-kvdy.us.auth0.com"
    clientId="7ixHInWzMkuS7SPVArjS4GYfE3o9nP0R"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);
