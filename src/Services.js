import React, { useState } from "react";
import { FaNotesMedical, FaUserMd, FaPills, FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

function Services() {
  const navigate = useNavigate();
  const [showMed, setShowMed] = useState(false);
  const [showMed2, setShowMed2] = useState(false);

  const handleShowMed = () => {
    setShowMed(true);
  };
  const handleShowOffMed = () => {
    setShowMed(false);
  };
  const handleShowCheck = () => {
    setShowMed2(true);
  };
  const handleShowOffCheck = () => {
    setShowMed2(false);
  };
  return (
    <div>
      <Nav />
      <section class="services" id="services">
        <h1 class="heading">
          our <span>services</span>
        </h1>

        <div class="box-container">
          <div class="box">
            {showMed2 ? (
              <>
                <div style={{ overflow: "auto", maxHeight: "200px" }}>
                  <h3>Free Checkups</h3>
                  <h2>•Health screenings</h2>
                  <p>
                    -free health screenings for various conditions such as blood
                    pressure, cholesterol levels, diabetes, and body mass index
                    (BMI).
                  </p>
                  <h2>•Vaccination clinics</h2>
                  <p>
                    -free vaccination clinics to provide immunizations against
                    diseases such as influenza, hepatitis, or tetanus.
                  </p>
                  <h2>•Women's health checkups</h2>
                  <p>
                    -free checkups specifically tailored for women, including
                    breast cancer screenings, Pap smears, and prenatal care.
                  </p>
                </div>
                <button className="btn" onClick={handleShowOffCheck}>
                  Hide
                </button>
              </>
            ) : (
              <>
                <i class="fas">
                  <FaNotesMedical />
                </i>
                <h3>free checkups</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                  omnis.
                </p>
                <button class="btn" onClick={handleShowCheck}>
                  learn more
                </button>
              </>
            )}
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
            <button class="btn" onClick={() => navigate("/Doctors")}>
              View
            </button>
          </div>
          <div className="box">
            {showMed ? (
              <>
                <div style={{ overflow: "auto", maxHeight: "200px" }}>
                  <h3>List of Medicine</h3>
                  <h2>Biogesic</h2>
                  <p>- ₱5.00</p>
                  <p>
                    -used to relieve mild to moderate pain such as headache,
                    backache, menstrual cramps, muscular strain, minor arthritis
                    pain, toothache, and reduce fevers caused by illnesses such
                    as the common cold and flu.
                  </p>
                  <h2>Biogesic</h2>
                  <p>- ₱5.00</p>
                  <p>
                    -used to relieve mild to moderate pain such as headache,
                    backache, menstrual cramps, muscular strain, minor arthritis
                    pain, toothache, and reduce fevers caused by illnesses such
                    as the common cold and flu.
                  </p>
                  <h2>Biogesic</h2>
                  <p>- ₱5.00</p>
                  <p>
                    -used to relieve mild to moderate pain such as headache,
                    backache, menstrual cramps, muscular strain, minor arthritis
                    pain, toothache, and reduce fevers caused by illnesses such
                    as the common cold and flu.
                  </p>
                  <h2>Biogesic</h2>
                  <p>- ₱5.00</p>
                  <p>
                    -used to relieve mild to moderate pain such as headache,
                    backache, menstrual cramps, muscular strain, minor arthritis
                    pain, toothache, and reduce fevers caused by illnesses such
                    as the common cold and flu.
                  </p>
                  <h2>Biogesic</h2>
                  <p>- ₱5.00</p>
                  <p>
                    -used to relieve mild to moderate pain such as headache,
                    backache, menstrual cramps, muscular strain, minor arthritis
                    pain, toothache, and reduce fevers caused by illnesses such
                    as the common cold and flu.
                  </p>
                </div>
                <button className="btn" onClick={handleShowOffMed}>
                  Hide
                </button>
              </>
            ) : (
              <>
                <i className="fas">
                  <FaPills />
                </i>
                <h3>medicines</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                  omnis.
                </p>
                <button className="btn" onClick={handleShowMed}>
                  Check Availability
                </button>
              </>
            )}
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
