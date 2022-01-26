import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { TinyLink } from "../common/TinyLink";
import { ButtonColor, IInputProps, InputType } from "../types/Types";
import "./ForgotPassword.css";

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState({
    text: "",
    emailInputType: InputType.regular,
  });

  const emailInputProps: IInputProps = {
    inputType: email.emailInputType,
    label: "Email",
    placeholder: "Enter your email address",
  };

  const handleEmailChange =
    () => (emailEvent: ChangeEvent<HTMLInputElement>) => {
      emailEvent.persist();
      setEmail((prev) => ({ ...prev, text: emailEvent.target.value }));
    };

  return (
    <div className="forgot-password-page-container">
      <Card>
        <div className="sign-in-card-title">Restore Password</div>
        <Input
          {...emailInputProps}
          value={email.text}
          onChange={handleEmailChange()}
        />
        <div className="info">Your new password will be sent to your email.</div>
        <div>Please, check your inbox.</div>
        <div>
          <TinyLink destination="/sign-in" linkText="Back to Sign In page"></TinyLink>
          <Button buttonColor={ButtonColor.coral}>Send</Button>
        </div>
      </Card>
    </div>
  );
};
