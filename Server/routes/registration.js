import express from "express";

import {
  customerRegistration,
  adminRegistration,
} from "../controller/registration.js";

import { login } from "../controller/login.js";

const router = express();

router.post("/login", login);

router.post("/customerRegister", customerRegistration);
router.post("/adminRegister", adminRegistration);

// router.post('/adminRegister', (req, res) => {
//     console.log("Using Body-parser: ", req.body)
//   })

export default router;
