import express from "express";
import { login } from "../controller/login.js";
import {
  registrationAdmin,
  registrationCustomer,
} from "../controller/registration.js";

const router = express();

router.post("/login", login);
router.post("/admin/registration", registrationAdmin);
router.post("/customer/registration", registrationCustomer);

export default router;
