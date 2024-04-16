import express from "express";
import { login } from "../controller/login.js";
import { registration } from "../controller/registration.js";

const router = express();

router.post("/login", login);
router.post("/registration", registration);

export default router;
