import React from "react";
import { IInputProps } from "../types/Types";
import "./Input.css";

function Input(props: IInputProps) {
  const { inputType, label, ...rest } = props;
  return (
    <label>
      <input className={`${props.value ? inputType : ""}`} {...rest} />
      <span className="input-label-container">
        <span className="input-label">{label}</span>
      </span>
    </label>
  );
}

export default Input;
