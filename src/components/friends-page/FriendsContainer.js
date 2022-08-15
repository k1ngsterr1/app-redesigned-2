import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Images
import friend from "../images/christopher.png";

const FriendsContainer = () => {
  return (
    <div className="friends-container">
      <div className="upper-container-f">
        <h2 className="chat-header-f">Your Friends</h2>
        <div className="additional-buttons-f">
          <FontAwesomeIcon className="trash-i" icon={faTrash}></FontAwesomeIcon>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
      <div className="friends-box">
        <img className="friend-png" src={friend}></img>
        <div className="friends-content">
          <div className="friend-name">
            <p className="f-name">Christopher Zerman</p>
          </div>
          <button className="write-to-f">Message</button>
        </div>
      </div>
    </div>
  );
};

export default FriendsContainer;
