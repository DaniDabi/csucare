import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import "./App.css";

function Nav() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <a className="logo">
        <i className="fas">
          <FaHeartbeat />
        </i>
        <strong>CSU</strong>care
      </a>

      <nav className="navbar">
        <a className="nav" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="nav" onClick={() => navigate("/About")}>
          About
        </a>
        <a className="nav" onClick={() => navigate("/Services")}>
          Services
        </a>
        <a className="nav" onClick={() => navigate("/Doctors")}>
          Doctors
        </a>
        <a className="nav" onClick={() => navigate("/Appointment")}>
          Appointment
        </a>
        <a className="btn-signup" onClick={() => navigate("/Register")}>
          Sign Up
        </a>
        <a className="btn-login" onClick={() => navigate("/Login")}>
          Log In
        </a>
      </nav>
      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
}
export default Nav;
