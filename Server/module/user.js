import Sequelize from "sequelize";
import database from "../config/database.js";

const User = database.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
    },
    fName: {
      type: Sequelize.STRING(100),
    },
    lName: {
      type: Sequelize.STRING(100),
    },
    email: {
      type: Sequelize.STRING(100),
      unique: true,
    },
    isVerifiedEmail: {
      type: Sequelize.BOOLEAN(),
      defaultValue: false,
    },
    password: {
      type: Sequelize.STRING(100),
    },
    role: {
      type: Sequelize.ENUM("admin", "customer"),
      defaultValue: "customer",
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["email"],
      },
    ],
    freezeTableName: true,
  }
);

export default User;
