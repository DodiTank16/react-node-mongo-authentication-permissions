import createHttpError from "http-errors";

export const throwError = (error, response) => {
  if (error instanceof createHttpError.HttpError) {
    response.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } else {
    // If it's not an HttpError, handle it as a generic server error (500)
    response.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
    z``;
  }
};
