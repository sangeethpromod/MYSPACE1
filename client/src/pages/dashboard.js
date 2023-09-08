import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "../css/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  // Move the username validation to a separate function
  const isValidUsername = (username) => {
    return true;
  };

  if (!isValidUsername(username)) {
    return <p>Invalid username or user not found.</p>;
  }

  const [formData, setFormData] = useState({
    bioName: "",
    about: "",
    emoji: "",
    instagramLink: "",
    facebookLink: "",
    pintrestLink: "",
    xLink: "",
    linkdinLink: "",
    threadsLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/linkdata",
        formData
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Linked successful",
          text: "Your New Page is Ready.",
        });

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User already exists"
      ) {
        Swal.fire({
          icon: "error",
          title: "AGAIN",
          text: "Do it again.",
        });
      }
    }
  };

  return (
    <div className="dashboard-container">
      <header className="navbar">
        <h1>X-SPACE</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "Black" }}>ENTER INFO</h2>

        {/* Enter Name */}
        <div>
          <input
            placeholder="ENTER NAME"
            type="text"
            name="bioName"
            className="enterbioName"
            value={formData.bioName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter About You */}
        <div>
          <input
            placeholder="WHAT ARE YOU?!"
            type="text"
            name="about"
            className="enterabout"
            value={formData.about} // Change 'name' to 'emoji'
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter Emoji */}
        <div>
          <input
            placeholder="ENTER EMOJI😁!"
            type="text"
            name="emoji"
            className="enteremoji"
            value={formData.emoji}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter Intsagram link */}
        <div>
          <input
            placeholder="ENTER INSTAGRAM LINK🔗"
            type="text"
            name="instagramLink"
            className="enterinstalink"
            value={formData.instagramLink}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter Facebook link */}
        <div>
          <input
            placeholder="ENTER FACEBOOK LINK🔗"
            type="text"
            name="facebookLink"
            className="enterfblink"
            value={formData.facebookLink}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter Pintrest link */}
        <div>
          <input
            placeholder="ENTER PINTREST LINK🔗"
            type="text"
            name="pintrestLink"
            className="enterinstalink"
            value={formData.pintrestLink}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter x link */}
        <div>
          <input
            placeholder="ENTER X LINK🔗"
            type="text"
            name="xLink"
            className="enterxlink"
            value={formData.xLink}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter Linkdin link */}
        <div>
          <input
            placeholder="ENTER LINKDIN LINK🔗"
            type="text"
            name="linkdinLink"
            className="enterlinkdinlink"
            value={formData.linkdinLink}
            onChange={handleChange}
            required
          />
        </div>

        {/* Enter Threads link */}
        <div>
          <input
            placeholder="ENTER THREADS LINK🔗"
            type="text"
            name="threadsLink"
            className="enterthreadlink"
            value={formData.threadsLink}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit" className="okayButton">
            okay
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
