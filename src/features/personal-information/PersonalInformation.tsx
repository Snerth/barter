import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { ButtonColor, IInputProps, InputType } from "../types/Types";
// import "./SignUp.css";

export const PersonalInformation = () => {
    
  const [phoneNumber, setPhoneNumber] = useState({
    text: "",
    phoneNumberInputType: InputType.regular,
  });

  const [countryCode, setCountryCode] = useState('MD');

    const [isPhoneNumberValidated, setIsPhoneNumberValidated] = useState(false);
    const [error, setError] = useState(null)
    useEffect(() => {
        const apiKey = '267070a7966eaab8dfd08bba5e55794e'
        fetch(`http://apilayer.net/api/validate?access_key=${apiKey}&number=${phoneNumber.text}&country_code=${countryCode}`)
          .then(res => res.json())
          .then(
            (result) => {
                console.log('result', result)
                if (!result.valid) {
                    setIsPhoneNumberValidated(false);
                    // setPhoneNumber(prev => ({...prev, phoneNumberInputType: InputType.error}))
                }
            //   setItems(result);
            },
            (error) => {
                setIsPhoneNumberValidated(false);
              setError(error);
            }
          )
      }, [phoneNumber])

  const [name, setName] = useState({
    text: "",
    nameInputType: InputType.regular,
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
    label: "Name",
    placeholder: "Enter your name",
  };

  const emailInputProps: IInputProps = {
    inputType: email.emailInputType,
    label: "Email",
    placeholder: "Enter your email address",
  };

  const phoneNumberInputProps: IInputProps = {
    inputType: phoneNumber.phoneNumberInputType,
    label: "Phone Number",
    placeholder: "Enter your phone number",
  };

  const addressInputProps: IInputProps = {
    inputType: address.addressInputType,
    label: "Address",
    placeholder: "Enter your address",
  };

  const validateName = (nameText: string) => {
    if (nameText === "1Mary") {
      setName((prev) => ({ ...prev, nameInputType: InputType.error }));
    } else {
      setName((prev) => ({ ...prev, loginInputType: InputType.regular }));
    }
  };

  const handleNameChange =
    () => (nameEvent: ChangeEvent<HTMLInputElement>) => {
      nameEvent.persist();
      validateName(nameEvent.target.value);
      setName((prev) => ({ ...prev, text: nameEvent.target.value }));
    };

  const handleEmailChange =
    () => (emailEvent: ChangeEvent<HTMLInputElement>) => {
      emailEvent.persist();
      setEmail((prev) => ({ ...prev, text: emailEvent.target.value }))
    };

    const handlePhoneNumberChange =
    () => (phoneNumberEvent: ChangeEvent<HTMLInputElement>) => {
      phoneNumberEvent.persist();
      setPhoneNumber((prev) => ({ ...prev, text: phoneNumberEvent.target.value }))
    };

  return (
    <>
      <div className="page-container">
        <Card>
          <div className="sign-in-card-title">Tell us more about yourself</div>
          <Input
            {...nameInputProps}
            value={name.text}
            onChange={handleNameChange()}
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
          <Link to="/terms-of-usage">
            <div className="terms-of-usage-link">Terms of usage</div>
          </Link>
          <Link to="/trades-overview">
            <Button buttonColor={ButtonColor.coral}>Sign Up</Button>
          </Link>
        </Card>
      </div>
    </>
  );
};
