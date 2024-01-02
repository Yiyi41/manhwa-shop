require("dotenv").config();
const { createPool } = require("promise-mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// const stripe = require("stripe")(process.env.stripeKey);

const manhwaRoutes = require("./routes/manhwaRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoute = require("./routes/paymentRoute");

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));


const connectionOptions = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port
};

const connection = createPool(connectionOptions);

connection.then(async (db) => {
  app.get("/", (req, res) => {
    try {
      res.json({ status: 200, msg: "C'est good" });
    } catch (error) {
      res.send(error);
    }
  });
  manhwaRoutes(app, db);
  userRoutes(app, db);
  cartRoutes(app, db);
  paymentRoute(app, db);
});

// export { app, connection }; si es6
module.exports = { app, connection }; // es5
