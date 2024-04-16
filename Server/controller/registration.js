import User from "../module/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { emailVerification } from "../utils/emailVarification.js";
import { hashPassword } from "../utils/hash.js";

export const registration = async (req, res) => {
  const { fName, lName, email, password } = req.body;
  try {
    if (fName == "" || lName == "" || email == "" || password == "") {
      throw new ApiError(400, "Please fill in all required fields.");
    }

    let user = await User.findOne({ email: email });
    if (user)
      return res
        .status(400)
        .json({ messgae: "User with given email already exist!", status: 400 });

    user = new User({
      fName,
      lName,
      email,
      password: await hashPassword(5, password),
      role: email === "tankdodi@gmail.com" ? "ADMIN" : "CUSTOMER",
    });

    const message = `<body><h1>${process.env.BASE_URL}/user/verify/${user._id}</h1></body>`;
    await emailVerification({
      email,
      subject: "Verify Account",
      text: message,
    });

    await user.save();

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

export default { registration };
