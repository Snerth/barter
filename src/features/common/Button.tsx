import React, { ButtonHTMLAttributes } from "react";
import { IButtonProps } from "../types/Types";
import "./Button.css";

export const Button: React.FC<IButtonProps> = ({
  children,
  buttonColor,
  disabled,
}) => {
  return (
    <button disabled={disabled} className={`${buttonColor}`}>
      {children}
    </button>
  );
};
