import { loginApi } from "../../services/AuthServices";
import { authData, authDataFailure, authDataSuccess } from "./authSlice";

export const loginAction = (payload, naviagte) => {
  return function (dispatch) {
    dispatch(authData());
    loginApi(payload)
      .then((res) => {
        dispatch(authDataSuccess(res?.data));
        if (res?.data?.user?.role == "admin") {
          naviagte("/home");
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(authDataFailure(error));
      });
  };
};
