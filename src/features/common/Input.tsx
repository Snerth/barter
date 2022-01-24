import React from "react";
import { IInputProps } from "../types/Types";
import "./Input.css";

export const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const { inputType, label, ...rest } = props;
  return (
    <label>
      <input className={`${props.value ? inputType : ""}`} {...rest} />
      <span className="input-label-container">
        <span className="input-label">{label}</span>
      </span>
    </label>
  );
};
