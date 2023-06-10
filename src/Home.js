import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";
import { useNavigate } from "react-router-dom";
import home from "./image/home.png";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <section class="home" id="home">
        <div class="content">
          <h3>we take care of your healthy life</h3>
          <p>
            A person who has good physical health is likely to have bodily
            functions and processes working at their peak.
          </p>
          <button class="btn" onClick={() => navigate("/Appointment")}>
            Make an Appointment
          </button>
        </div>
        <div class="image">
          <img src={home} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
