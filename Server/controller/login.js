import User from "../module/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (
      [email, password].some(
        (field) => field === undefined || field?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All Fields are required");
    }
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser) {
      throw new ApiError(400, "User is Not Registered Please Signup.");
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);

    if (!validPassword) {
      throw new ApiError(400, "Password is Incorrect");
    }

    const user = await User.findOne({ where: { email } });
    const userObj = {
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign({ userObj }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .cookie("token", token, options)
      .json(
        new ApiResponse(
          200,
          { user: userObj, token },
          "User Login Successfully"
        )
      );
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

export default { login };
