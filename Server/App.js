import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import userRoutes from "./routes/registration.js";

const App = express();
App.use(cors());
App.use(cookieParser());
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use("/", userRoutes);

export default App;
