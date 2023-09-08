import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Send a POST request to your backend login route
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });

      // Check if the response has a token
      if (response.data && response.data.token) {
        // JWT token on successful login
        const token = response.data.token;

        localStorage.setItem("token", token);

        navigate("/dashboard"); // Use navigate to redirect

        Swal.fire({
          icon: "success",
          title: "Login successful",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Please check your credentials",
        });
      }
    } catch (error) {
      console.error("Login error:", error);

      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Please check your credentials",
      });
    }
  };

  return (
    <div className="main-container">
      <header className="navbar">
        <h1>X-SPACE</h1>
      </header>
      <div className="logincard">
        <form>
        <h2 style={{ color: "black", marginTop: "5px", fontSize: "44px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            LOGIN
          </h2>
          <div className="username">
            <label htmlFor="username">USERNAME</label>
          </div>
          <div>
            <input
              type="text"
              className="enterusername"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">PASSWORD</label>
          </div>
          <div>
            <input
              type="password"
              className="enterpassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              className="signinButton"
              type="button"
              onClick={handleLogin}
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
