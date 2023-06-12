import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./App.css";
import appointment from "./image/appointment.png";

function Appointment() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <section className="appointment" id="appointment">
        <div className="row">
          <div className="image">
            <img src={appointment} alt="" />
          </div>

          <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <h3>make appointment</h3>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="box"
            />
            <input
              type="number"
              name="number"
              placeholder="your number"
              className="box"
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="box"
            />
            <input type="date" name="date" className="box" />
            <input
              type="submit"
              name="submit"
              value="submit appointment"
              className="btn"
            />
            <div>
              <input
                type="submit"
                name="submit"
                value="View Availability"
                className="btn"
                onClick={() => navigate("/Availability")}
              />
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Appointment;
