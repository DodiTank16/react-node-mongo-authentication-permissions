const environment = {
  DEVELOPMENT: "development",
  STAGING: "staging",
  PRODUCTION: "production",
};
var env = process.env.REACT_APP_ENVIRONMENT;
// var env = "development"; // development API
// var env = "staging"; // staging API

var API_URL;
var MEDIA_URL;
var UI_URL;
var defaultOptions = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

if (env === environment.PRODUCTION) {
  // API_URL = `https://api.truflux.drcsystems.com/api/`;
  // MEDIA_URL = `https://media.truflux.drcsystems.com/`;
  // UI_URL = `https://truflux.drcsystems.com/`;
}

if (env === environment.STAGING) {
}

if (env === environment.DEVELOPMENT) {
  API_URL = `http://localhost:8082/`; //local
}

export { API_URL, defaultOptions, MEDIA_URL, UI_URL };
