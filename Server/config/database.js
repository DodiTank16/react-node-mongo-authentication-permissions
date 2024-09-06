import Sequelize from "sequelize";

const database = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    // timezone: "+05:30",
    logging: console.log,
    underscored: true,
    pool: {
      max: 20,
      min: 1,
      idle: 20000,
      acquire: 1000000,
    },
    timestamps: true,
    retry: {
      match: [/Deadlock/i],
      max: 3, // Maximum retry 3 times
      backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
      backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
    },
  }
);

export default database;
