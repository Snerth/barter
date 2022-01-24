import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType: InputType;
  label: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor: ButtonColor;
}

export enum ButtonColor {
  coral = "button--coral",
  gray = "button--gray",
  yellow = "button--yellow",
  turquoise = "button--turquoise",
}

export enum InputType {
  regular = "input--regular",
  warning = "input--warning",
  error = "input--error",
  disabled = "input--disabled",
  password = "input--password",
  success = "input--success",
}

export interface ITinyLinkProps {
  destination: string;
  linkText: string;
}

export interface IInputErrorMessageProps {
  errorMessage: any;
}