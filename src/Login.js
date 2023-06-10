import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="title">
          <span>Login Form</span>
        </div>
        <form action="#">
          <div className="row">
            <i className="fas">
              <FaUser />
            </i>
            <input type="text" placeholder="Email or Phone" required />
          </div>
          <div className="row">
            <i className="fas">
              <FaLock />
            </i>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="pass">
            <a href="#">Forgot password?</a>
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member?{" "}
            <a onClick={() => navigate("/Register")}>Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
