import { axiosInstance } from "./AxiosInterceptor";

let defaultOptions = {
  showToast: false,
  successToast: "Record has been saved successfully",
  errorToast: "Something Went Wrong",
};

const get = (url, options = defaultOptions.errorToast, ...other) => {
  options = { ...defaultOptions, ...options };

  return axiosInstance
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
    .finally(() => {});
};

const post = (url, payload, options = defaultOptions) => {
  options = { ...defaultOptions, ...options };

  return axiosInstance
    .post(url, payload)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
    .finally(() => {});
};

const put = (url, payload, options = defaultOptions) => {
  options = { ...defaultOptions, ...options };
  return axiosInstance
    .put(url, payload)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
    .finally(() => {});
};

const Delete = (url, payload, options = defaultOptions) => {
  options = { ...defaultOptions, ...options };
  return axiosInstance
    .delete(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
    .finally(() => {});
};

const postWithFormData = (url, payload, options = defaultOptions) => {
  options = { ...defaultOptions, ...options };

  return axiosInstance
    .post(url, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
    .finally(() => {});
};

const putWithFormData = (url, payload, options = defaultOptions) => {
  options = { ...defaultOptions, ...options };

  return axiosInstance
    .put(url, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
    .finally(() => {});
};
const ApiService = {
  get,
  post,
  Delete,
  put,
  postWithFormData,
  putWithFormData,
};

export default ApiService;
