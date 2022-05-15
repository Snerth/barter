import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export const SignIn: React.FC<any> = ({ checkDoesUserExist }) => {
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
    label: "Логин",
    placeholder: "Введите ваш логин",
  };

  const passwordInputProps: IInputProps = {
    inputType: password.passwordInputType,
    label: "Пароль",
    placeholder: "Введите ваш пароль",
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
    if (checkDoesUserExist(login.text, password.text)) {
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
          <div className="sign-in-card-title">Войти</div>
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
          <TinyLink linkText="Новый пользователь?" destination="/sign-up" />
          <Button
            disabled={isError}
            buttonColor={isError ? ButtonColor.gray : ButtonColor.coral}
            onClick={checkLoginAndPassword}
          >
            Войти
          </Button>
          {!isAuthenticated && isButtonClicked && (
            <InputErrorMessage errorMessage="Неверный логин или пароль"></InputErrorMessage>
          )}
        </Card>
      </div>
    </>
  );
};

export default SignIn;
