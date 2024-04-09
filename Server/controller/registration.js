import User from "../module/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { hashPassword } from "../utils/hash.js";

// const router = express.Router();

export const customerRegistration = async (req, res) => {
  const { fName, lName, email, password } = req.body;

  let user = await User.findOne({ email: email });
  if (user)
    return res
      .status(400)
      .json({ messgae: "User with given email already exist!" });

  user = new User({
    fName,
    lName,
    email,
    password: await hashPassword(5, password),
    role: "customer",
  })
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
      console.log("ERROR", error);
    });
};

export const adminRegistration = async (req, res) => {
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
      role: "admin",
    });
    await user.save();

    res
      .status(201)
      .json(
        new ApiResponse(
          200,
          { FirstName: fName, LastName: lName, Email: email },
          "User Registered Success"
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
          error.message || "Internal server error"
        )
      );
  }
};

export default { adminRegistration };
