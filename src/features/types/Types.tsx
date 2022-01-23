import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType: InputType,
    label: string,
}

export enum ButtonColor {
    gray = 'button--gray',
    red = 'button--red',
    pink = 'button--pink',
    paleGreen = 'button--pale-green',
    green = 'button--green'
}

export enum InputType {
    regular = 'input--regular',
    warning = 'input--warning',
    error = 'input--error',
    disabled = 'input--disabled',
    password = 'input--password',
    success = 'input--success'
}