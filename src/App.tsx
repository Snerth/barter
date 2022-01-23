import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button } from './features/common/Button';
import { ButtonColor } from './features/types/Types';

function App() {
  return (
    <div className='welcome-page-container'>
      <div className='welcome-text'>Welcome to Barter.</div>
      <div className='description-text'><span>No money? No problem! </span>
      Our mission is to let you get things without having to pay anything!
      It's simple - get rid of the things you no more need and get what you really want!
      Join Barter and start trading without touching your savings.
      </div>
      <div className='welcome-question'>Already having an account?</div>
      <Link to='/sign-in' >
        <Button buttonColor={ButtonColor.green}>Sign In</Button>
      </Link>
      <div className='welcome-question'>New member?</div>
      <Link to='/sign-up' >
        <Button buttonColor={ButtonColor.green}>Sign Up</Button>
      </Link>
    </div>
  );
}

export default App;
