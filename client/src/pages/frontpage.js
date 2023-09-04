import React from "react";
import "../css/front.css";
import insta from "../images/nohat.png";
import fb from "../images/fb logo.png";
import pintrest from "../images/pintrest.png";
import x from "../images/twitterlogo.jpeg";
import linkdin from "../images/linkdin.png";
import threads from "../images/threads.png";

function Frontpage() {

  const instaPage = () => {
    window.open("https://instagram.com/sang.xx.th?igshid=NzZhOTFlYzFmZQ==");
  }

    const fbPage = () => {
      window.open("https://www.facebook.com/sang.xx.th/");
  }

    const pintrestPage = () => {
      window.open("https://pin.it/4sZEMii");
  }

    const linkdinPage = () => {
       window.open("https://in.linkedin.com/in/sangeeth-promod-68b5371a9");
  }

    const xPage = () => {
       window.open("https://x.com/sangxxth?s=11");
    }

  return (
    <div className="mobile-container">
      <header className="navbar">
        <h1>X-SPACE</h1>
      </header>
      <div className="profile-container">
        <div className="circular-photo"></div>
        <div className="text">
          <h1>SANGEETH PROMOD KAINIKKARA</h1>
          <p>PHOTOGRAPHER || SOFTWARE ENGINEER</p>
          <p>📷 👨🏻‍💻 🎨</p>
        </div>
      </div>

      <div className="large-button-container">
        <button className="large-button" onClick={instaPage}>
          <img src={insta} alt="Button Image 1" className="insta-image" />
        </button>
      </div>

      <div className="second-row">
        <button className="fb-button" onClick={fbPage}>
          <img src={fb} alt="Button Image 1" className="fb-image" />
        </button>

        <button className="pintrest-button" onClick={pintrestPage}>
          <img src={pintrest} alt="Button Image 1" className="pintrest-image" />
        </button>
      </div>

      <div className="third-row">
        <button className="twitter-button" onClick={xPage}>
          <img src={x} alt="Button Image 1" className="x-image" />
        </button>
      </div>

      <div className="fourth-row">
        <button className="linkdin-button" onClick={linkdinPage}>
          <img src={linkdin} alt="Button Image 1" className="linkdin-image" />
        </button>

        <button className="threads-button">
          <img src={threads} alt="Button Image 1" className="threads-image" />
        </button>
      </div>
    </div>
  );
}

export default Frontpage;
