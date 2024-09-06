import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/auth/action";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
    <>
      <div className="container">
        <form action="POST" onSubmit={handleSubmit} autoComplete="false">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="center">
            <h2>Please Sign In</h2>
            <input
              className="focus:border-purple-700"
              autoComplete="off"
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
              {/* <button
                type="button"
                className="button hover:shadow-[4px_4px_8px_0px_rgba(0,0,0,0.8)]">
                Forgot Password?
              </button> */}
              <button
                type="submit"
                className="login-button hover:shadow-[2px_2px_4px_0px_rgba(0,0,0,0.4)]">
                Login
              </button>
            </div>
            <div className="mt-2">
              Don't have an account customer?{" "}
              <Link
                to="/customer/registration"
                className="font-semibold text-purple-700 hover:underline underline-offset-2">
                Register
              </Link>
            </div>
            <div className="mt-2">
              Don't have an account admin?{" "}
              <Link
                to="/admin/registration"
                className="font-semibold text-purple-700 hover:underline underline-offset-2">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
