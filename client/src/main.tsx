import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
// import { RouterProvider } from "react-router-dom";
// import { Router } from "../src/Router.tsx";

// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-gfbevn18rm1xr5uk.us.auth0.com"
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      {/* <RouterProvider router={Router}> */}
      <App />
      {/* </RouterProvider> */}
    </Auth0Provider>
  </React.StrictMode>
);
