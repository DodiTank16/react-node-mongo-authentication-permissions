import ApiService from "./ApiService";
import { API_URL } from "../config/config";

export const loginApi = (data, options = null) => {
  return ApiService.post(API_URL + "login", data);
};
