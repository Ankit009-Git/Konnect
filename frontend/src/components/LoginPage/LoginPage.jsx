import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import "./LoginPage.scss";
const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="leftLoginPage">
        <h1>Lets Start Chat With Your Friends !</h1>
      </div>
      <div className="rightLoginPage">
        <div className="logoLoginPage">
          <img src="../../logo.png" alt="" />
        </div>
        <div className="titleLoginPage">
          <h5>Login With</h5>
          <h1> Konnect</h1>
        </div>
        <form action="/" className="formLoginPage">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div>
            <a href="/">Forget Password?</a>
          </div>
          <button>Login</button>
          <button className="googleBtn">
            <GoogleIcon />
            <p>Sign in with Google </p>
          </button>
        </form>

        <div className="registerBtn">
          <p>Don't have an account yet ?</p>
          <a href="/"> Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
