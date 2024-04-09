import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/registration.js";

const App = express();
App.use(cors());
App.use(cookieParser());
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use("/", userRoutes);

console.log("process.env.CONNECTION_URL", process.env.CONNECTION_URL);

export default App;
