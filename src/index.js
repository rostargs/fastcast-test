// React
import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./App";
// Router
import { BrowserRouter } from "react-router-dom";
// SCSS
import "./App.scss";
import { Snowfall } from "react-snowfall";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Snowfall snowflakeCount={20} style={{ position: "fixed", height: "100vh", width: "100vw" }} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
