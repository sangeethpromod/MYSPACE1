import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/front.css";
import insta from "../images/nohat.png";
import fb from "../images/fb logo.png";
import pintrest from "../images/pintrest.png";
import x from "../images/twitterlogo.jpeg";
import linkdin from "../images/linkdin.png";
import threads from "../images/threads.png";

function Frontpage() {
  const [linkData, setLinkData] = useState({});

  useEffect(() => {
    // Fetch link data from the backend API
    axios.get("http://localhost:3000/auth/linkdata").then((response) => {
      setLinkData(response.data);
    });
  }, []);

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
        <button
          className="large-button"
          onClick={() => window.open(linkData.instagramLink)}
        >
          <img src={insta} alt="Button Image 1" className="insta-image" />
        </button>
      </div>

      <div className="second-row">
        <button
          className="fb-button"
          onClick={() => window.open(linkData.facebookLink)}
        >
          <img src={fb} alt="Button Image 1" className="fb-image" />
        </button>

        <button
          className="pintrest-button"
          onClick={() => window.open(linkData.pintrestLink)}
        >
          <img src={pintrest} alt="Button Image 1" className="pintrest-image" />
        </button>
      </div>

      <div className="third-row">
        <button
          className="twitter-button"
          onClick={() => window.open(linkData.xLink)}
        >
          <img src={x} alt="Button Image 1" className="x-image" />
        </button>
      </div>

      <div className="fourth-row">
        <button
          className="linkdin-button"
          onClick={() => window.open(linkData.linkdinLink)}
        >
          <img src={linkdin} alt="Button Image 1" className="linkdin-image" />
        </button>

        <button
          className="threads-button"
          onClick={() => window.open(linkData.threadsLink)}
        >
          <img src={threads} alt="Button Image 1" className="threads-image" />
        </button>
      </div>
    </div>
  );
}

export default Frontpage;
