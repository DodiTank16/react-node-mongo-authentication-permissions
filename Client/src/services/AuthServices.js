import ApiService from "./ApiService";
import { API_URL } from "../config/config";

export const loginApi = (data, options = null) => {
  return ApiService.post(API_URL + "login", data);
};

export const logoutApi = (data, options = null) => {
  return ApiService.post(API_URL + "logout", data);
};

export const registrationApi = (data, type, options = null) => {
  return ApiService.post(API_URL + `${type}/registration`, data);
};
