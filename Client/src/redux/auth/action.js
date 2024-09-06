import { loginApi, registrationApi } from "../../services/AuthServices";
import {
  registration,
  registrationFailure,
  registrationSuccess,
} from "./adminRegistrationSlice";
import { authData, authDataFailure, authDataSuccess } from "./authSlice";

export const loginAction = (payload, naviagte) => {
  return function (dispatch) {
    dispatch(authData());
    loginApi(payload)
      .then((res) => {
        dispatch(authDataSuccess(res?.data));
        localStorage.setItem("token", res?.data?.token);

        if (res?.data?.user?.role === "admin") {
          naviagte("/");
        } else {
          alert("You are not allowed to login from here");
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(authDataFailure(error));
      });
  };
};

export const registrationAction = (payload, type, naviagte) => {
  return function (dispatch) {
    dispatch(registration());
    registrationApi(payload, type)
      .then((res) => {
        dispatch(registrationSuccess(res?.data));
        alert("Registration Success..!!");
        naviagte("/login");
      })
      .catch((error) => {
        console.log("error", error);
        alert("Registration Failed, Please try again later.");
        dispatch(registrationFailure(error));
      });
  };
};
