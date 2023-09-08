import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "../css/signup.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        formData
      );

      if (response.status === 201) {
        Swal.fire1({
          icon: "success",
          title: "Registration successful",
          text: "You have successfully registered.",
        });

        navigate("/login");
      } 
      
    } catch (error) {
      console.error(error);
    if(error.response.data.message==="User already exists")
    {
       Swal.fire({
         icon: "error",
         title: "User Exists",
         text: "Username or email already exists. Please choose different credentials.",
       });

    }
    else{
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "An error occurred during registration. Please try again later.",
      });
    }}
  };

  return (
    <div className="mainreg-container">
      <header className="navbar">
        <h1>X-SPACE</h1>
      </header>
      <div className="signupcard">
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: "black", marginTop: "5px", fontSize: "44px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>SIGNUP</h2>
          <div className="username">
            <label htmlFor="username">USERNAME</label>
          </div>
          <div>
            <input
              type="text"
              name="username"
              className="enterusername"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="name">
            <label htmlFor="name">NAME</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              className="entername"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="email">
            <label htmlFor="email">EMAIL</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="enteremail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="regpassword">
            <label htmlFor="password">PASSWORD</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="enterregpassword"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit" className="signupButton">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
