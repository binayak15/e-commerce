import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          Already Have an account? <span>Login</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use and privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
