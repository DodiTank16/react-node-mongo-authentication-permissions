import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormProvider from "../components/FormProvider";
import Textfield from "../components/Textfield";
import { registrationAction } from "../redux/auth/action";

const initialValues = {
  fName: "",
  lName: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  fName: Yup.string().required("Name is required"),
  lName: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Confirm Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegistrationAdmin = () => {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    initialValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (values) => {
    dispatch(registrationAction(values, "admin", naviagte));
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center w-full min-h-screen  bg-[#282D2D] px-5 py-5">
          <div className=" flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full">
            <div className="flex">
              <h3 className="text-white">Dark Mode : &nbsp;</h3>
              <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  readOnly
                />
                <div
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          <div
            className={`xl:max-w-3xl ${
              darkMode ? "bg-black" : "bg-white"
            }  w-full p-5 sm:p-10 rounded-md`}>
            <h1
              className={`text-center text-xl sm:text-3xl font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}>
              Register for admin
            </h1>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Textfield
                    name="fName"
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline focus:border-purple-700 ${
                      darkMode
                        ? "bg-[#302E30] text-white"
                        : "bg-gray-100 text-black"
                    }`}
                    placeholder="Your first name"
                  />
                  <Textfield
                    name="lName"
                    className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline focus:border-purple-700 ${
                      darkMode
                        ? "bg-[#302E30] text-white"
                        : "bg-gray-100 text-black"
                    }`}
                    type="text"
                    placeholder="Your last name"
                  />
                </div>
                <Textfield
                  name="email"
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline focus:border-purple-700 ${
                    darkMode
                      ? "bg-[#302E30] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                  type="email"
                  placeholder="Enter your email"
                />
                <Textfield
                  name="password"
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline focus:border-purple-700 ${
                    darkMode
                      ? "bg-[#302E30] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                  type="password"
                  placeholder="Password"
                />
                <button className="group mt-5 tracking-wide font-semibold border-2 border-purple-700 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className={`w-6 h-6 -ml-2 stroke-purple-700 group-hover:stroke-white`}
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" fill="" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span
                    className={`ml-3 text-purple-700 group-hover:text-white`}>
                    Register
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to="/">
                    <span className="text-purple-700 font-semibold">Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default RegistrationAdmin;
