import App from "./App.js";
import database from "./config/database.js";

const port = process.env.PORT || 8083;

try {
  database
    .sync({
      // alter: true,
      logging: (log) => console.log(log),
    })
    .then(() => {
      console.log(`Database connection established successfully :)`);
      App.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((error) => {
      console.error(
        "Something went wrong. Failed to connect to Database  :( \n",
        error
      );
    });
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
