import User from "../module/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userVerification = async (req, res) => {
  const { token } = req.query;
  try {
    if (!token) {
      throw new ApiError(400, "Token not found");
    }

    const decryptUserToken = jwt.verify(token, process.env.JWT_SECRET);

    let user = await User.findOne({
      where: { id: decryptUserToken.userObj.id },
    });

    if (!user) {
      throw new ApiError(400, "User not found");
    }

    await User.update(
      { isVerifiedEmail: true },
      { where: { id: decryptUserToken.userObj.id } }
    );

    res
      .status(200)
      .json(new ApiResponse(200, {}, "User verified successfully"));
  } catch (error) {
    console.error(error);

    // send error response to the client
    res
      .status(error.statusCode || 500)
      .json(
        new ApiResponse(
          error.statusCode || 500,
          null,
          error.message || "Login With Email Error"
        )
      );
  }
};

export default { userVerification };
