import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import Header from "./Header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-xid2hxid5fi8knop.us.auth0.com"
    clientId="8A2IwROvedybsDv1OAkjGFdy9HGFGI61"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
   
    <App />
    
  </Auth0Provider>
    
);
