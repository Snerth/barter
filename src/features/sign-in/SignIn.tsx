import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { TinyLink } from "../common/TinyLink";
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

  const handleLoginChange =
    () => (loginEvent: ChangeEvent<HTMLInputElement>) => {
      loginEvent.persist();
      if (loginEvent.target.value === "error") {
        setLogin({
          text: loginEvent.target.value,
          loginInputType: InputType.error,
        });
      } else {
        setLogin({
          text: loginEvent.target.value,
          loginInputType: InputType.regular,
        });
      }
    };

  const handlePasswordChange =
    () => (loginEvent: ChangeEvent<HTMLInputElement>) => {
      loginEvent.persist();
      setPassword({ ...password, text: loginEvent.target.value });
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
          <Button buttonColor={ButtonColor.coral}>Sign In</Button>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
