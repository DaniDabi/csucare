import React from "react";
import { FaNotesMedical, FaUserMd, FaPills, FaHeartbeat } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

function Services() {
  return (
    <div>
      <Nav />
      <section class="services" id="services">
        <h1 class="heading">
          our <span>services</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas">
              <FaNotesMedical />
            </i>
            <h3>free checkups</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <button class="btn">learn more</button>
          </div>
          <div class="box">
            <i class="fas">
              <FaUserMd />
            </i>
            <h3>expert doctors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <button class="btn">learn more</button>
          </div>

          <div class="box">
            <i class="fas">
              <FaPills />
            </i>
            <h3>medicines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <button class="btn">learn more</button>
          </div>
          <div class="box">
            <i class="fas">
              <FaHeartbeat />
            </i>
            <h3>total care</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <button class="btn">learn more</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Services;
