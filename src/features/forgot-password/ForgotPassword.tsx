import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
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
    <div className="page-container">
      <Card>
        <div className="sign-in-card-title">Restore Password</div>
        <Input
          {...emailInputProps}
          value={email.text}
          onChange={handleEmailChange()}
        />
        <div className="info">Your new password will be sent to your email. Please, check your inbox.</div>
        <div>
          <Link to="/sign-in">
            <div className="sign-in-link">Back to Sign In page</div>
          </Link>
          <Button buttonColor={ButtonColor.coral}>Send</Button>
        </div>
      </Card>
    </div>
  );
};
