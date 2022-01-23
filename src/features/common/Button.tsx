import React from "react";
import { ButtonColor } from "../types/Types";
import "./Button.css";

interface Props {
    buttonColor: ButtonColor;
}

export const Button: React.FC<Props> = ({ children, buttonColor }) => {
  return <button className={`${buttonColor}`}>{children}</button>;
};
