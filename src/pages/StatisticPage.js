import React from "react";

// Styles
import "../styles/stats-page/stats.css";

// Components
import Header from "../components/main-page/Header";
import Menu from "../components/main-page/Menu";
import RightSideTabs from "../components/main-page/RightSideTabs";
import StatsContent from "../components/statistics-page/StatsContent";

const StatisticPage = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div className="container">
        <Menu></Menu>
        <StatsContent></StatsContent>
        <RightSideTabs></RightSideTabs>
      </div>
    </div>
  );
};

export default StatisticPage;
