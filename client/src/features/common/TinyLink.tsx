import React from "react";
import { Link } from "react-router-dom";
import { ITinyLinkProps } from "../types/Types";
import './TinyLink.css'

export const TinyLink = (props: ITinyLinkProps) => {
  const { destination, linkText } = props;
  return (
    <Link to={destination}>
      <div className="tiny-link-text">{linkText}</div>
    </Link>
  );
};
