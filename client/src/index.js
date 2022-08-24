import React from "react";
import ReactDOM from "react-dom/client";
import "./styleVariable/index.css";
import App from "./App";
import CurrentUserProvider from "../src/CurrentUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>
);
