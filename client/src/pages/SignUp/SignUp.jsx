import "./SignUp.css"
import React from 'react';

const SignUp = () => {
  return (
    <div className="container">
      <div className="wrappers">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <div className="form">
          <input className="input" placeholder="First Name" />
          <input className="input" placeholder="Last Name" />
          <input className="input" placeholder="Username" />
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" />
          <input className="input" placeholder="Confirm password" />
          <h5 className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </h5>
        </div>
        <button className="btn-signup">CREATE</button>
      </div>
    </div>
  );
};

export default SignUp;
