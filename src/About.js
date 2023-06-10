import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";
import about from "./image/about.png";

function About() {
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const handleLearnMoreClick = () => {
    setShowSecondParagraph(!showSecondParagraph);
  };

  return (
    <div>
      <Nav />
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="content">
            <h3>take the world's best quality treatment</h3>
            <p>
              Welcome to CSUCare, where we prioritize your health and
              well-being. Our dedicated team of medical professionals is
              committed to providing exceptional care during your hospital
              appointments. With advanced facilities and technology, we offer
              convenient appointment scheduling options, ensuring minimal
              waiting times.
            </p>
            {showSecondParagraph && (
              <p>
                At CSUCare, we value your time and strive for punctuality, so
                you can expect a streamlined experience from the moment you
                arrive. Our patient-centered approach means that we listen to
                your concerns, conduct thorough examinations, and involve you in
                the decision-making process for personalized treatment options.
                Experience the exceptional care of CSUCare, where your health is
                our top priority.
              </p>
            )}
            <button className="btn" onClick={handleLearnMoreClick}>
              {showSecondParagraph ? "Hide Details" : "Learn More"}
            </button>
          </div>

          <div className="image">
            <img src={about} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default About;
