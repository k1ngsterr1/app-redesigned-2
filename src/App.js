import React from "react";

// Styles
import "./styles/main_app_styles/main-app-styles.css";

// Components
import Header from "./components/main-page/Header";
import ChatBoxes from "./components/main-page/ChatBoxes";
import Menu from "./components/main-page/Menu";
import RightSideTabs from "./components/main-page/RightSideTabs";

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div className="container">
        <Menu></Menu>
        <ChatBoxes></ChatBoxes>
        <RightSideTabs></RightSideTabs>
      </div>
    </div>
  );
};

export default App;
