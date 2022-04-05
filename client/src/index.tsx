import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./features/sign-in/SignIn";
import { ForgotPassword } from "./features/forgot-password/ForgotPassword";
import { SignUp } from "./features/sign-up/SignUp";
import { PersonalInformation } from "./features/personal-information/PersonalInformation";
import { Overview } from "./features/overview/Overview";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/sign-in/personal-information"
          element={<PersonalInformation />}
        />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);