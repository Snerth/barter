import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Button } from "./features/common/Button";
import { ButtonColor } from "./features/types/Types";

function App() {
  return (
    <div className="welcome-page-container">
      <div className="welcome-text">Welcome to Barter</div>
      <div className="description-text">
        <span>No money? No problem! </span>
        Our mission is to let you get things without having to pay anything!
        It's simple - get rid of the things you no more need and get what you
        really want! Join Barter and start trading without touching your
        savings.
      </div>
      <div className="welcome-page-actions-container">
        <div className="welcome-page-action-section">
          <div>Already having an account?</div>
          <Link to="/sign-in">
            <Button buttonColor={ButtonColor.turquoise}>Sign In</Button>
          </Link>
        </div>
        <div className="welcome-page-action-section">
          <div>New member?</div>
          <Link to="/sign-up">
            <Button buttonColor={ButtonColor.turquoise}>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
