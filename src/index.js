import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uk859q0p.us.auth0.com"
      clientId="KrfvqNXqY40mrkk9wuXMQ8JoodMvRXra"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

