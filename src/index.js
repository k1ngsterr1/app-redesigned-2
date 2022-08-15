import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Styles
import "./styles/main_app_styles/main-app-styles.css";

// Router

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
