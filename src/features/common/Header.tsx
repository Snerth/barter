import React from "react";
import "./Header.css";
import logo from "../common/assets/logo.jpeg";
import { Avatar } from "./Avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faBell, faHeart, faList } from '@fortawesome/free-solid-svg-icons'

export const Header: React.FC<any> = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img className="barter-logo" src={logo} alt="Barter" />
        <div className="header-links">
          <FontAwesomeIcon icon={faCirclePlus} className='header-link-icon' size="2x"/>
          <FontAwesomeIcon icon={faBell} className="header-link-icon" size="2x" />
          <FontAwesomeIcon icon={faHeart} className="header-link-icon" size="2x" />
          <FontAwesomeIcon icon={faList} className="header-link-icon" size="2x" />
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
};
