import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { ButtonColor, IInputProps, InputType } from "../types/Types";
import "./SignUpContinue.css";

export const SignUpContinue: React.FC<any> = ({ handleFinishRegistration }) => {
  const [isError, setIsError] = useState<boolean>(true);

  const [phoneNumber, setPhoneNumber] = useState({
    text: "",
    phoneNumberInputType: InputType.regular,
  });

  const [age, setAge] = useState({
    text: "",
    ageInputType: InputType.regular,
  });

  const [name, setName] = useState({
    text: "",
    nameInputType: InputType.regular,
  });

  const [lastName, setLastName] = useState({
    text: "",
    lastNameInputType: InputType.regular,
  });

  const [email, setEmail] = useState({
    text: "",
    emailInputType: InputType.regular,
  });

  const [address, setAddress] = useState({
    text: "",
    addressInputType: InputType.regular,
  });

  const nameInputProps: IInputProps = {
    inputType: name.nameInputType,
    label: "Имя",
    placeholder: "Введите ваше имя",
  };

  const lastNameInputProps: IInputProps = {
    inputType: name.nameInputType,
    label: "Фамилия",
    placeholder: "Введите вашу фамилию",
  };

  const emailInputProps: IInputProps = {
    inputType: email.emailInputType,
    label: "Электронная почта",
    placeholder: "Введите адрес электронной почты",
  };

  const phoneNumberInputProps: IInputProps = {
    inputType: phoneNumber.phoneNumberInputType,
    label: "Номер телефона",
    placeholder: "Введите ваш номер телефона",
  };

  const addressInputProps: IInputProps = {
    inputType: address.addressInputType,
    label: "Адрес",
    placeholder: "Введите ваш адрес",
  };

  const ageInputProps: IInputProps = {
    inputType: age.ageInputType,
    label: "Возраст",
    placeholder: "Введите ваш возраст",
  };

  const validateName = (nameText: string) => {
    if (nameText === "1Mary") {
      setName((prev) => ({ ...prev, nameInputType: InputType.error }));
      setIsError(true)
    } else {
      setName((prev) => ({ ...prev, loginInputType: InputType.regular }));
      setIsError(false)
    }
  };

  const handleNameChange = () => (nameEvent: ChangeEvent<HTMLInputElement>) => {
    nameEvent.persist();
    validateName(nameEvent.target.value);
    setName((prev) => ({ ...prev, text: nameEvent.target.value }));
    setIsError(false)
  };

  const handleEmailChange =
    () => (emailEvent: ChangeEvent<HTMLInputElement>) => {
      emailEvent.persist();
      setEmail((prev) => ({ ...prev, text: emailEvent.target.value }));
      setIsError(false)
    };

  const handleLastNameChange =
    () => (lastNameEvent: ChangeEvent<HTMLInputElement>) => {
      lastNameEvent.persist();
      setLastName((prev) => ({ ...prev, text: lastNameEvent.target.value }));
      setIsError(false)
    };

  const handleAgeChange = () => (ageEvent: ChangeEvent<HTMLInputElement>) => {
    ageEvent.persist();
    setAge((prev) => ({ ...prev, text: ageEvent.target.value }));
    setIsError(false)
  };

  const handleAddressChange =
    () => (addressEvent: ChangeEvent<HTMLInputElement>) => {
      addressEvent.persist();
      setAddress((prev) => ({ ...prev, text: addressEvent.target.value }));
      setIsError(false)
    };

  const handlePhoneNumberChange =
    () => (phoneNumberEvent: ChangeEvent<HTMLInputElement>) => {
      phoneNumberEvent.persist();
      setPhoneNumber((prev) => ({
        ...prev,
        text: phoneNumberEvent.target.value,
      }));
      setIsError(false)
    };

  return (
    <>
      <div className="sign-up-continue-page-container">
        <Card>
          <div className="sign-up-continue-card-title">
            Укажите дополнительные данные
          </div>
          <Input
            {...nameInputProps}
            value={name.text}
            onChange={handleNameChange()}
          />
          <Input
            {...lastNameInputProps}
            value={lastName.text}
            onChange={handleLastNameChange()}
          />
          <Input
            {...ageInputProps}
            value={age.text}
            onChange={handleAgeChange()}
          />
          <Input
            {...emailInputProps}
            value={email.text}
            onChange={handleEmailChange()}
          />
          <Input
            {...phoneNumberInputProps}
            value={phoneNumber.text}
            onChange={handlePhoneNumberChange()}
          />
          <Input
            {...addressInputProps}
            value={address.text}
            onChange={handleAddressChange()}
          />
          <div>
            <Link to="/">
              <Button
                buttonColor={ButtonColor.coral}
                onClick={() => {
                  handleFinishRegistration();
                }}
              >
                Отмена
              </Button>
            </Link>
            <Link to="/overview">
              <Button
                disabled={isError}
                buttonColor={isError ? ButtonColor.gray : ButtonColor.coral}
                onClick={() => {
                  handleFinishRegistration();
                }}
              >
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};
