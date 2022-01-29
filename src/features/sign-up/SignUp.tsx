import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { TinyLink } from "../common/TinyLink";
import validator from "../common/utils/validator";
import { ButtonColor, IInputProps, ILoginState, InputType, IPasswordState, IRepeatPasswordState, LoginErrorMessage, PasswordErrorMessage, RepeatPasswordErrorMessage } from "../types/Types";
import { InputErrorMessage } from "../common/InputErrorMessage";
import "./SignUp.css";

export const SignUp: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(true);

  const [login, setLogin] = useState<ILoginState>({
    text: "",
    loginInputType: InputType.regular,
    loginErrorMessage: null,
  });

  const [password, setPassword] = useState<IPasswordState>({
    text: "",
    passwordInputType: InputType.password,
    passwordErrorMessage: null,
  });

  const [repeatPassword, setRepeatPassword] = useState<IRepeatPasswordState>({
    text: "",
    repeatPasswordInputType: InputType.password,
    repeatPasswordErrorMessage: null,
  });

  const loginInputProps: IInputProps = {
    inputType: login.loginInputType,
    label: "Login",
    placeholder: "Create your login",
  };

  const passwordInputProps: IInputProps = {
    inputType: password.passwordInputType,
    label: "Password",
    placeholder: "Create your password",
    type: "password",
  };

  const repeatPasswordInputProps: IInputProps = {
    inputType: repeatPassword.repeatPasswordInputType,
    label: "Repeat Password",
    placeholder: "Repeat password",
    type: "password",
  };

  const setLoginState = (
    loginErrorMessage: LoginErrorMessage | null,
    text: string,
    loginInputType: InputType
  ) => {
    setLogin((prev) => ({ ...prev, loginErrorMessage, text, loginInputType }));
  };

  const setPasswordState = (
    passwordErrorMessage: PasswordErrorMessage | null,
    text: string,
    passwordInputType: InputType
  ) => {
    setPassword((prev) => ({
      ...prev,
      passwordErrorMessage,
      text,
      passwordInputType,
    }));
  };

  const setRepeatPasswordState = (
    repeatPasswordErrorMessage: RepeatPasswordErrorMessage | null,
    text: string,
    repeatPasswordInputType: InputType
  ) => {
    setRepeatPassword((prev) => ({
      ...prev,
      repeatPasswordErrorMessage,
      text,
      repeatPasswordInputType,
    }));
  };

  const handleLoginChange =
    () => (loginEvent: ChangeEvent<HTMLInputElement>) => {
      loginEvent.persist();
      const login = loginEvent.target.value;
      if (validator.isLessThanThreeChars(login)) {
        setLoginState(
          LoginErrorMessage.moreThanThreeChars,
          login,
          InputType.error
        );
        setIsError(true);
      } else if (validator.isMoreThanTenChars(login)) {
        setLoginState(
          LoginErrorMessage.lessThanTenChars,
          login,
          InputType.error
        );
        setIsError(true);
      } else if (login === "notUnique") {
        setLoginState(LoginErrorMessage.unique, login, InputType.error);
        setIsError(true);
      } else if (validator.containsWhitespaces(login)) {
        setLoginState(LoginErrorMessage.noWhitespace, login, InputType.error);
        setIsError(true);
      } else if (validator.containsSpecialCharacters(login)) {
        setLoginState(LoginErrorMessage.noSpecialChars, login, InputType.error);
        setIsError(true);
        // TODO resolve this issue
      } else if (login.length === 0) {
        setLoginState(LoginErrorMessage.empty, login, InputType.error);
        setIsError(true);
      } else {
        setLoginState(null, login, InputType.regular);
        setIsError(false);
      }
    };

  const handlePasswordChange =
    () => (passwordEvent: ChangeEvent<HTMLInputElement>) => {
      const password = passwordEvent.target.value;
      passwordEvent.persist();
      if (validator.isLessThanEightChars(password)) {
        setPasswordState(
          PasswordErrorMessage.moreThanEightChars,
          password,
          InputType.error
        );
        setIsError(true);
      } else if (validator.isMoreThanFifteenChars(password)) {
        setPasswordState(
          PasswordErrorMessage.lessThanFifteenCharacters,
          password,
          InputType.error
        );
        setIsError(true);
      } else if (validator.containsCapitalLetter(password)) {
        setPasswordState(
          PasswordErrorMessage.atLeastOneCapitalChar,
          password,
          InputType.error
        );
        setIsError(true);
      } else if (validator.containsDigit(password)) {
        setPasswordState(
          PasswordErrorMessage.atLeastOneDigit,
          password,
          InputType.error
        );
        setIsError(true);
      } else if (password === "") {
        setPasswordState(PasswordErrorMessage.empty, password, InputType.error);
        setIsError(true);
      } else {
        setPasswordState(null, password, InputType.regular);
        setIsError(false);
      }
    };

  const handleRepeatPasswordChange =
    () => (repeatPasswordEvent: ChangeEvent<HTMLInputElement>) => {
      repeatPasswordEvent.persist();
      const repeatPassword = repeatPasswordEvent.target.value;
      if (validator.matchesValue(repeatPassword, password.text)) {
        setRepeatPasswordState(
          RepeatPasswordErrorMessage.matches,
          repeatPassword,
          InputType.error
        );
        setIsError(true);
      } else if (repeatPassword === "") {
        setPasswordState(
          PasswordErrorMessage.empty,
          repeatPassword,
          InputType.error
        );
        setIsError(true);
      } else {
        setRepeatPasswordState(null, repeatPassword, InputType.regular);
        setIsError(false);
      }
    };

  return (
    <>
      <div className="sign-up-page-container">
        <Card>
          <div className="sign-up-card-title">Sign Up</div>
          <Input
            {...loginInputProps}
            value={login.text}
            onChange={handleLoginChange()}
          />
          <InputErrorMessage
            errorMessage={login.loginErrorMessage}
          ></InputErrorMessage>
          <Input
            {...passwordInputProps}
            value={password.text}
            onChange={handlePasswordChange()}
          />
          <InputErrorMessage
            errorMessage={password.passwordErrorMessage}
          ></InputErrorMessage>
          <Input
            {...repeatPasswordInputProps}
            value={repeatPassword.text}
            onChange={handleRepeatPasswordChange()}
          />
          <InputErrorMessage
            errorMessage={repeatPassword.repeatPasswordErrorMessage}
          ></InputErrorMessage>
          <TinyLink
            linkText="Already have an account?"
            destination="/sign-in"
          />
          <Button
            disabled={
              isError
            }
            buttonColor={isError ? ButtonColor.gray : ButtonColor.coral}
          >
            Continue
          </Button>
        </Card>
      </div>
    </>
  );
}

