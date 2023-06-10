import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="title">
          <span>Register Form</span>
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
          <div className="row">
            <i className="fas">
              <FaLock />
            </i>
            <input type="password" placeholder=" Repeat Password" required />
          </div>
          <div className="row button">
            <input type="submit" value="Register" />
          </div>
          <div className="signup-link">
            already have an account?{" "}
            <a onClick={() => navigate("/Login")}>Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
