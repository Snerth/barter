import React from "react";
import "./Header.css";
import logo from "../common/assets/logo.jpeg";
import { Avatar } from "./Avatar";
import bell from '../common/assets/icons/bell.svg'
import heart from '../common/assets/icons/heart.svg'
import add from '../common/assets/icons/add.svg'

export const Header: React.FC<any> = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img className="barter-logo" src={logo} alt="Barter" />
        <div className="header-links">
          <img className="header-link-icon" src={bell} alt="Notifications" />
          <img className="header-link-icon" src={heart} alt="Wish List" />
          <img className="header-link-icon" src={add} alt="Add Trade" />
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
};
