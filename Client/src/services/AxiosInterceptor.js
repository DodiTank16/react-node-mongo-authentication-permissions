import axios from "axios";
import { defaultOptions } from "../config/config";

const axiosInstance = axios.create(defaultOptions);

const requestHandler = (request) => {
  const token = localStorage.getItem("token");
  if (token) request.headers["Authorization"] = `Bearer ${token}`;
  return request;
};

const responseHandler = (response) => {
  return response.data;
};

axiosInstance.interceptors.request.use((request) => {
  return requestHandler(request);
});

axiosInstance.interceptors.response.use(
  (response) => {
    return responseHandler(response);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosInstance };
