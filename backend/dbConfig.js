import { createPool } from "promise-mysql";
import dotenv from "dotenv";

dotenv.config();

const connectionOptions = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port
};

const connection = createPool(connectionOptions);

export { connection };
