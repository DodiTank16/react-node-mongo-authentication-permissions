import mongoose from "mongoose";
import App from "./App.js";

const port = process.env.PORT || 8083;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.CONNECTION_URL
    );

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB()
  .then(() => {
    App.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(() => {
    console.log("Something went wrong. Database connection failed.");
  });

export default connectDB;
