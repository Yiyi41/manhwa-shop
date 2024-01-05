require("dotenv").config();
const { createPool } = require("promise-mysql");

const connectionOptions = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port
};

const connection = createPool(connectionOptions);

module.exports = { connection }; // es5