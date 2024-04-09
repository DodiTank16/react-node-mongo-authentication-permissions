import React, { useState } from "react";
import "../assets/scss/adminLogin.scss";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    axios
      .post("http://localhost:8082/login", payload)
      .then(function (response) {
        // handle success
        console.log("response", response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div class="container">
      <form action="POST" onSubmit={handleSubmit}>
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>Please Sign In</h2>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
