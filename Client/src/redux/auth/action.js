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
        if (res?.data?.user?.role == "ADMIN") {
          naviagte("/");
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(authDataFailure(error));
      });
  };
};

export const registrationAction = (payload, naviagte) => {
  return function (dispatch) {
    dispatch(registration());
    registrationApi(payload)
      .then((res) => {
        dispatch(registrationSuccess(res?.data));
        naviagte("/login");
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(registrationFailure(error));
      });
  };
};
