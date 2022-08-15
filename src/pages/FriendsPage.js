import React from "react";

// Styles
import "../styles/friends-page-styles/friends-styles.css";

// Components
import Header from "../components/main-page/Header";
import Menu from "../components/main-page/Menu";
import RightSideTabs from "../components/main-page/RightSideTabs";
import FriendsContainer from "../components/friends-page/FriendsContainer";

const FriendsPage = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div className="container">
        <Menu></Menu>
        <FriendsContainer></FriendsContainer>
        <RightSideTabs></RightSideTabs>
      </div>
    </div>
  );
};

export default FriendsPage;
