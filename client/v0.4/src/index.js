import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./routes";
import { GlobalStyle } from "./components/global-styles";
import { ProSidebarProvider } from "react-pro-sidebar";
import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap/dist/js/bootstrap"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProSidebarProvider>
    <BrowserRouter >
      <Navigation />
      <GlobalStyle />
    </BrowserRouter>
  </ProSidebarProvider>
);
