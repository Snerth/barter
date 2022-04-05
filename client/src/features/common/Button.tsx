import React from "react";
import { IButtonProps } from "../types/Types";
import "./Button.css";

export const Button: React.FC<IButtonProps> = ({
  children,
  buttonColor,
  disabled,
  ...rest
}) => {
  return (
    <button {...rest} disabled={disabled} className={`${buttonColor}`}>
      {children}
    </button>
  );
};
