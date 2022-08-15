import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Styles
import "./styles/main_app_styles/main-app-styles.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Friends from "./pages/FriendsPage";
import StatisticPage from "./pages/StatisticPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/statistics" element={<StatisticPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
