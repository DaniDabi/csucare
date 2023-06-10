import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";
import doc1 from "./image/doc-1.jpg";
import doc2 from "./image/doc-2.jpg";
import doc3 from "./image/doc-3.jpg";
import doc4 from "./image/doc-4.jpg";
import doc5 from "./image/doc-5.jpg";
import doc6 from "./image/doc-6.jpg";

function Doctors() {
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);
  const [showForm5, setShowForm5] = useState(false);
  const [showForm6, setShowForm6] = useState(false);
  const handleButtonClick1 = () => {
    setShowForm1(true);
  };
  const handleButtonClick2 = () => {
    setShowForm2(true);
  };
  const handleButtonClick3 = () => {
    setShowForm3(true);
  };
  const handleButtonClick4 = () => {
    setShowForm4(true);
  };
  const handleButtonClick5 = () => {
    setShowForm5(true);
  };
  const handleButtonClick6 = () => {
    setShowForm6(true);
  };
  return (
    <div>
      <Nav />
      <section className="doctors" id="doctors">
        <h1 className="heading">
          our <span>doctors</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={doc1} alt="" />
            <h3>win coder</h3>
            <span>expert doctor</span>
            <div className="">
              {showForm1 ? (
                <form>
                  <div className="form">
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Write Message"
                    />
                  </div>
                  <button className="btn2">Submit</button>
                </form>
              ) : (
                <button className="btn2" onClick={handleButtonClick1}>
                  Send Email
                </button>
              )}
            </div>
          </div>

          <div className="box">
            <img src={doc2} alt="" />
            <h3>win coder</h3>
            <span>expert doctor</span>
            <div className="">
              {showForm2 ? (
                <form>
                  <div className="form">
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Write Message"
                    />
                  </div>
                  <button className="btn2">Submit</button>
                </form>
              ) : (
                <button className="btn2" onClick={handleButtonClick2}>
                  Send Email
                </button>
              )}
            </div>
          </div>

          <div className="box">
            <img src={doc3} alt="" />
            <h3>win coder</h3>
            <span>expert doctor</span>
            <div className="">
              {showForm3 ? (
                <form>
                  <div className="form">
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Write Message"
                    />
                  </div>
                  <button className="btn2">Submit</button>
                </form>
              ) : (
                <button className="btn2" onClick={handleButtonClick3}>
                  Send Email
                </button>
              )}
            </div>
          </div>

          <div className="box">
            <img src={doc4} alt="" />
            <h3>win coder</h3>
            <span>expert doctor</span>
            <div className="">
              {showForm4 ? (
                <form>
                  <div className="form">
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Write Message"
                    />
                  </div>
                  <button className="btn2">Submit</button>
                </form>
              ) : (
                <button className="btn2" onClick={handleButtonClick4}>
                  Send Email
                </button>
              )}
            </div>
          </div>

          <div className="box">
            <img src={doc5} alt="" />
            <h3>win coder</h3>
            <span>expert doctor</span>
            <div className="">
              {showForm5 ? (
                <form>
                  <div className="form">
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Write Message"
                    />
                  </div>
                  <button className="btn2">Submit</button>
                </form>
              ) : (
                <button className="btn2" onClick={handleButtonClick5}>
                  Send Email
                </button>
              )}
            </div>
          </div>

          <div className="box">
            <img src={doc6} alt="" />
            <h3>win coder</h3>
            <span>expert doctor</span>
            <div className="">
              {showForm6 ? (
                <form>
                  <div className="form">
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <input
                      className="intForm"
                      type="text"
                      placeholder="Write Message"
                    />
                  </div>
                  <button className="btn2">Submit</button>
                </form>
              ) : (
                <button className="btn2" onClick={handleButtonClick6}>
                  Send Email
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Doctors;
