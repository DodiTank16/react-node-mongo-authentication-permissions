import { where } from "sequelize";
import User from "../module/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { emailVerification } from "../utils/emailVarification.js";
import { hashPassword } from "../utils/hash.js";
import jwt from "jsonwebtoken";

export const registrationAdmin = async (req, res) => {
  const { fName, lName, email, password } = req.body;
  try {
    if (fName == "" || lName == "" || email == "" || password == "") {
      throw new ApiError(400, "Please fill in all required fields.");
    }

    let user = await User.findOne({ where: { email: email } });
    if (user)
      return res
        .status(400)
        .json({ messgae: "User with given email already exist!", status: 400 });

    user = new User({
      fName,
      lName,
      email,
      password: await hashPassword(5, password),
      role: "admin",
    });

    await user.save();

    const userObj = {
      id: user.id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign({ userObj }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    const message = `
    <p>Hello, verify your email address by clicking on this</p><br>
    <a href="${process.env.BASE_URL}/user/verify/?token=${token}" target="_blank" style="
      display: inline-block;
      cursor: pointer;
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #007BFF;
      text-decoration: none;
      border-radius: 5px;
    ">Click here to verify</a>`;

    await emailVerification({
      email,
      subject: "Verify Account",
      text: message,
    });

    res.status(201).json(new ApiResponse(200, null, "User Registered Success"));
  } catch (error) {
    console.error(error);
    // send error response to the client
    res
      .status(error.statusCode || 500)
      .json(
        new ApiResponse(
          error.statusCode || 500,
          null,
          error.message || "Internal server error"
        )
      );
  }
};

export const registrationCustomer = async (req, res) => {
  const { fName, lName, email, password } = req.body;
  try {
    if (fName == "" || lName == "" || email == "" || password == "") {
      throw new ApiError(400, "Please fill in all required fields.");
    }

    let user = await User.findOne({ where: { email: email } });
    if (user)
      return res
        .status(400)
        .json({ messgae: "User with given email already exist!", status: 400 });

    user = new User({
      fName,
      lName,
      email,
      password: await hashPassword(5, password),
      role: "customer",
    });

    await user.save();

    const userObj = {
      id: user.id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign({ userObj }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    const message = `
    <p>Hello, verify your email address by clicking on this</p><br>
    <a href="${process.env.BASE_URL}/user/verify/?token=${token}" target="_blank" style="
      display: inline-block;
      cursor: pointer;
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #007BFF;
      text-decoration: none;
      border-radius: 5px;
    ">Click here to verify</a>`;

    await emailVerification({
      email,
      subject: "Verify Account",
      text: message,
    });

    res.status(201).json(new ApiResponse(200, null, "User Registered Success"));
  } catch (error) {
    console.error(error);
    // send error response to the client
    res
      .status(error.statusCode || 500)
      .json(
        new ApiResponse(
          error.statusCode || 500,
          null,
          error.message || "Internal server error"
        )
      );
  }
};

export default { registrationAdmin, registrationCustomer };
