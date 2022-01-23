import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import Input from "../common/Input";
import { ButtonColor, IInputProps, InputType } from "../types/Types";
import "./SignIn.css";

function SignIn() {
  const [login, setLogin] = useState({
    text: "",
    loginInputType: InputType.regular,
  });

  const [password, setPassword] = useState({
    text: "",
    passwordInputType: InputType.password,
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

  const validateLogin = (loginText: string) => {
    if (loginText === "1") {
      setLogin((prev) => ({ ...prev, loginInputType: InputType.error }));
    } else {
      setLogin((prev) => ({ ...prev, loginInputType: InputType.regular }));
    }
  };

  const handleLoginChange =
    () => (loginEvent: ChangeEvent<HTMLInputElement>) => {
      loginEvent.persist();
      validateLogin(loginEvent.target.value);
      setLogin((prev) => ({ ...prev, text: loginEvent.target.value }));
    };

  const handlePasswordChange =
    () => (loginEvent: ChangeEvent<HTMLInputElement>) => {
      loginEvent.persist();
      setPassword({ ...password, text: loginEvent.target.value });
    };

  return (
    <>
      <div className="page-container">
        <Card>
          <div className="sign-in-card-title">Sign In</div>
          <Input
            {...loginInputProps}
            value={login.text}
            onChange={handleLoginChange()}
          />
          <Input
            {...passwordInputProps}
            value={password.text}
            onChange={handlePasswordChange()}
          />
          <Link to="/forgot-password">
            <div className="forgot-password-link">Forgot password?</div>
          </Link>
          <Link to="/sign-up">
            <div className="sign-up-link">Don't have an account?</div>
          </Link>
          <Button buttonColor={ButtonColor.red}>Sign In</Button>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
