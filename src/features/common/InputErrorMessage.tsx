import React from "react";
import { IInputErrorMessageProps } from "../types/Types";
import './InputErrorMessage.css'

export const InputErrorMessage: React.FC<IInputErrorMessageProps> = ({errorMessage}) => {
    return <p className="input-error-message">{errorMessage}</p>
}