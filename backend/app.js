require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
// const stripe = require("stripe")(process.env.stripeKey);

const mysql = require("promise-mysql");
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
  host: process.env.host,
  database: database,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
};
// console.log(mysql);
mysql.createConnection(connectionOptions).then(async (db) => {
  manhwaRoutes(app, db);
  userRoutes(app, db);
  cartRoutes(app, db);
  paymentRoute(app, db);
});

app.get("/", (req, res) => {
  res.json("Hello World");
});

module.exports = app;
