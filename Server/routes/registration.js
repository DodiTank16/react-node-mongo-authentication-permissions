import express from "express";
import { login, logout } from "../controller/auth.js";
import {
  registrationAdmin,
  registrationCustomer,
} from "../controller/registration.js";
import { userVerification } from "../controller/userVerification.js";

const router = express();

router.post("/login", login);
router.post("/admin/registration", registrationAdmin);
router.post("/customer/registration", registrationCustomer);
router.post("/verify", userVerification);
router.post("/logout", logout);

export default router;
