import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType: InputType;
  label: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor: ButtonColor;
}

export enum ButtonColor {
  coral = "button--green",
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

export interface ILoginState {
  loginErrorMessage: LoginErrorMessage | null;
  text: string;
  loginInputType: InputType;
}
export interface IRepeatPasswordState {
  repeatPasswordErrorMessage: RepeatPasswordErrorMessage | null;
  text: string;
  repeatPasswordInputType: InputType;
}

export enum LoginErrorMessage {
  moreThanThreeChars = "Login must contain at least 3 characters",
  unique = "This login is already taken. Please, try another one",
  lessThanTenChars = "Login must contain maximum 10 characters",
  noWhitespace = "Login must not contain whitespaces",
  noSpecialChars = "Login must not contain special characters",
  empty = "Login field must not be empty",
}

export enum PasswordErrorMessage {
  moreThanEightChars = "Password must contain at least 8 characters",
  lessThanFifteenCharacters = "Password must contain maximum 15 characters",
  atLeastOneCapitalChar = "Password must contain at least one capital character",
  atLeastOneDigit = "Password must contain at least one digit",
  empty = "Password field must not be empty",
}

export enum RepeatPasswordErrorMessage {
  matches = "Passwords must match",
  empty = "Repeat password field must not be empty",
}

export interface IPasswordState {
  passwordErrorMessage: PasswordErrorMessage | null;
  text: string;
  passwordInputType: InputType;
}
