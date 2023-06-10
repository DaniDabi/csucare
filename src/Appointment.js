import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";
import appointment from "./image/appointment.png";

function Appointment() {
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
              value="appointment now"
              className="btn"
            />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Appointment;
