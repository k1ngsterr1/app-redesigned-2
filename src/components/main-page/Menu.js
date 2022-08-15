import React from "react";

// Images
import user from "../images/profile.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

// Links
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="menu">
      <div className="user-profile-tab">
        <img className="user-img" src={user} />
        <p className="username">John Doe</p>
        <div className="separator-u"></div>
        <p className="condition"> Online</p>
      </div>
      <div className="menu-tabs">
        <Link className="your-bots" to="/">
          <FontAwesomeIcon
            className="brain-icon"
            icon={faBrain}
          ></FontAwesomeIcon>
          <p className="your-bots-p">Your Bots</p>
          <figure className="notification-bubble">+5</figure>
        </Link>
        <Link className="friends" to="/friends">
          {" "}
          <FontAwesomeIcon
            className="friends-icon"
            icon={faUserFriends}
          ></FontAwesomeIcon>
          <p className="your-friends-p">Friends</p>
        </Link>
        <Link className="stats" to="/statistics">
          {" "}
          <FontAwesomeIcon
            className="stats-icon"
            icon={faChartColumn}
          ></FontAwesomeIcon>
          <p className="your-stats-p">Statistics</p>
        </Link>
        {/* Switch */}
        <div className="mode-switch">
          <p className="switch-mode-p">Mode Switch</p>
          <input type="checkbox" id="switch" />
          <label for="switch">Toggle</label>
        </div>
        <button className="create-bot">CREATE AI</button>
      </div>
    </aside>
  );
};

export default Menu;
