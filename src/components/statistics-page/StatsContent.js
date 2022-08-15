import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Images
import user from "../images/ava.png";

const StatsContent = () => {
  return (
    <div className="statistics-container">
      <div className="stats-upper">
        <h2 className="chat-header-s">Statistics</h2>
        <div className="additional-buttons-s">
          <FontAwesomeIcon className="trash-i" icon={faTrash}></FontAwesomeIcon>
        </div>
      </div>
      <div className="bot-selection-stats">
        <div className="selection-r-1">
          <div className="bot-stats">
            <div className="button-container">
              <div className="robot-content">
                <img className="bot-img" src={user}></img>
                <p className="robot-name">John The Robot</p>
              </div>
              <button className="stats-btn">Statistics</button>
              <button className="message-btn">Message</button>
            </div>
          </div>
          <div className="bot-stats"></div>
          <div className="bot-stats"></div>
        </div>
        <div className="selection-r-2">
          <div className="bot-stats"></div>
          <div className="bot-stats"></div>
          <div className="bot-stats"></div>
        </div>
        <div className="selection-r-3">
          <div className="bot-stats"></div>
          <div className="bot-stats"></div>
          <div className="bot-stats"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsContent;
