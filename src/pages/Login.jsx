import React, { useState } from "react";
import "../Styles/login.css";
import loginImg from "../img/login.png";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <section className="img-cont">
        <img src={loginImg} className="login-img" alt="login-img" />
      </section>
      <section className="overlay"></section>
      <section className="login-input-cont">
        <div className="login-intro">
          <h2>WELCOME!</h2>
          <p>Enter your username and password to access your account</p>
        </div>
        <div className="login-input">
          <div className="input-cont">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your Username" />
          </div>
          <div className="input-cont pass">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your Password" />
            {showPassword ? (
              <IoEyeOff
                onClick={() => setShowPassword(false)}
                className="pass-eye"
              />
            ) : (
              <IoEye
                onClick={() => setShowPassword(true)}
                className="pass-eye"
              />
            )}
          </div>
        </div>
        <div className="login-button">
          <p className="sign-in">Sign In</p>
        </div>
      </section>
    </main>
  );
}

export default Login;
