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

export enum TradeStatus {
  open = "OPEN",
  promised = "PROMISED",
  traded = "TRADED"
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
  moreThanThreeChars = "Логин должен содержать минимум 3 символа",
  unique = "Этот логин уже занят. Выберите другой",
  lessThanTenChars = "Логин должен содержать максимум 10 символов",
  noWhitespace = "Логин не должен содержать пробелы",
  noSpecialChars = "Логин не должен содержать специальные символы",
  empty = "Поле логина не может быть пустым",
}

export enum PasswordErrorMessage {
  moreThanEightChars = "Пароль должен содержать минимум 8 символов",
  lessThanFifteenCharacters = "Пароль должен содержать максимум 15 символов",
  atLeastOneCapitalChar = "Пароль должен содержать хотя бы одну заглавную букву",
  atLeastOneDigit = "Пароль должен содержать хотя бы одну цифру",
  empty = "Поле пароля не может быть пустым",
}

export enum TradeNameErrorMessage {
  moreThanTwentyChars = "Название не должно превышать длину в 20 символов",
  empty = "Название является обязательным полем",
}

export enum RepeatPasswordErrorMessage {
  matches = "Пароли должны совпадать",
  empty = "Поле подтверждения пароля не может быть пустым",
}

export interface IPasswordState {
  passwordErrorMessage: PasswordErrorMessage | null;
  text: string;
  passwordInputType: InputType;
}

export interface ITradeNameState {
  tradeNameErrorMessage: TradeNameErrorMessage | null;
  text: string;
  tradeNameInputType: InputType;
}

export interface IUser {
  id: number,
  firstName: string,
  secondName: string,
  login: string,
  password: string,
  email: string,
  address: string,
  phoneNumber: string,
  picture: string,
  age: number,
  trades: ITrade[]
}

export interface ITrade {
  id: number,
  status: TradeStatus,
  pictures: Array<string>,
  owner: IUser,
  title: string,
  description: string,
}