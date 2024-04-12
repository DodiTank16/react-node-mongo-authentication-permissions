import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(loginAction(payload, naviagte));
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
          <div className="flex justify-between w-full">
            <button className="button">Forgot Password?</button>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
