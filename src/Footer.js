import React from "react";
import "./App.css";

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="/">
            <i className="fas fa-chevron-right"></i> home
          </a>
          <a href="about">
            <i className="fas fa-chevron-right"></i> about
          </a>
          <a href="services">
            <i className="fas fa-chevron-right"></i> services
          </a>
          <a href="doctors">
            <i className="fas fa-chevron-right"></i> doctors
          </a>
          <a href="appointment">
            <i className="fas fa-chevron-right"></i> appointment
          </a>
        </div>

        <div className="box">
          <h3>our services</h3>
          <a href="#">
            <i className="fas fa-chevron-right"></i> dental care
          </a>
          <a href="#">
            <i className="fas fa-chevron-right"></i> message therapy
          </a>
          <a href="#">
            <i className="fas fa-chevron-right"></i> cardioloty
          </a>
          <a href="#">
            <i className="fas fa-chevron-right"></i> diagnosis
          </a>
          <a href="#">
            <i className="fas fa-chevron-right"></i> ambulance service
          </a>
        </div>

        <div className="box">
          <h3>appointment info</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +8801688238801
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +8801782546978
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> wincoder9@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> sujoncse26@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> sylhet, bangladesh
          </a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">
            <i className="fab fa-faceappointment-f"></i> faceappointment
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i> twitter
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i> twitter
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i> instagram
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i> linkedin
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
