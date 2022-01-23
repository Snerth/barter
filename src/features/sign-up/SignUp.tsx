import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import Input from "../common/Input";
import { ButtonColor, IInputProps, InputType } from "../types/Types";
import "./SignUp.css";

function SignUp() {
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
    placeholder: "Create your login",
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
          <div className="sign-up-card-title">Sign Up</div>
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
          <Link to="/sign-in">
            <div className="back-to-sign-in-link">Already have an account?</div>
          </Link>
          <Link to="/sign-in/personal-information">
            <Button buttonColor={ButtonColor.red}>Continue</Button>
          </Link>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
