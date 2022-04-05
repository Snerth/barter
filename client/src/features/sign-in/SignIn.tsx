import React, { ChangeEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { InputErrorMessage } from "../common/InputErrorMessage";
import { TinyLink } from "../common/TinyLink";
import {
  ButtonColor,
  IInputProps,
  ILoginState,
  InputType,
  IPasswordState,
  LoginErrorMessage,
  PasswordErrorMessage,
} from "../types/Types";
import "./SignIn.css";

function SignIn() {
  const [isError, setIsError] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const navigateToOverview = useNavigate();
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

  const loginInputProps: IInputProps = {
    inputType: login.loginInputType,
    label: "Login",
    placeholder: "Enter your login",
  };

  const passwordInputProps: IInputProps = {
    inputType: password.passwordInputType,
    label: "Password",
    placeholder: "Enter your password",
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

  const handleLoginChange =
    () => (loginEvent: ChangeEvent<HTMLInputElement>) => {
      loginEvent.persist();
      const login = loginEvent.target.value;
      if (login === "") {
        setLoginState(LoginErrorMessage.empty, login, InputType.error);
        setIsError(true);
      } else {
        setLoginState(null, login, InputType.regular);
        setIsError(false);
      }
    };

  const handlePasswordChange =
    () => (passwordEvent: ChangeEvent<HTMLInputElement>) => {
      passwordEvent.persist();
      const password = passwordEvent.target.value;
      if (password === "") {
        setPasswordState(PasswordErrorMessage.empty, password, InputType.error);
        setIsError(true);
      } else {
        setPasswordState(null, password, InputType.regular);
        setIsError(false);
      }
    };

  const checkLoginAndPassword = (): void => {
    setIsButtonClicked(true);
    if (login.text === "login" && password.text === "logiN1234") {
      setIsAuthenticated(true);
      navigateToOverview("/overview", { replace: true });
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <>
      <div className="sign-in-page-container">
        <Card>
          <div className="sign-in-card-title">Sign In</div>
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
          <TinyLink
            linkText="Forgot password?"
            destination="/forgot-password"
          />
          <TinyLink linkText="Don't have an account?" destination="/sign-up" />
          <Button
            disabled={isError}
            buttonColor={isError ? ButtonColor.gray : ButtonColor.coral}
            onClick={checkLoginAndPassword}
          >
            Sign In
          </Button>
          {!isAuthenticated && isButtonClicked && (
            <InputErrorMessage errorMessage="Wrong login or password"></InputErrorMessage>
          )}
        </Card>
      </div>
    </>
  );
}

export default SignIn;
