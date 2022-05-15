import React from "react";
import "./Header.css";
import { Avatar } from "./Avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faBell, faHeart, faList } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export const Header: React.FC<any> = ({addTrade, handleSetShowAddTradeModal}) => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-links">
          <FontAwesomeIcon icon={faCirclePlus} className='header-link-icon' size="2x" onClick={() => handleSetShowAddTradeModal()}/>
          <FontAwesomeIcon icon={faBell} className="header-link-icon" size="2x" />
          <FontAwesomeIcon icon={faHeart} className="header-link-icon" size="2x" />
          <FontAwesomeIcon icon={faList} className="header-link-icon" size="2x" />
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
};
