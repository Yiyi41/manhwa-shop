require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
// const stripe = require("stripe")(process.env.stripeKey);

const { createPool } = require("promise-mysql");
const manhwaRoutes = require("./routes/manhwaRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoute = require("./routes/paymentRoute");
// parse application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true })); //des qu'on utilise un req.parser ; body parser convertie les string en objet ; app.use le fait dans toutes les routes ; il re-sépare tout
app.use(express.json());

let database;
process.env["NODE_ENV"] == "test"
  ? (database = process.env.testDatabase)
  : (database = process.env.database);

const connectionOptions = {
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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

// export { app, connection }; es6
module.exports = { app, connection }; // es5
