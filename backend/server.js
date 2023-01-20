require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const mysql = require("promise-mysql");
const manhwaRoutes = require("./routes/manhwaRoutes");
// const userRoutes = require("./routes/userRoutes");

// parse application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true })); //des qu'on utilise un req.parser ; body parser convertie les string en objet ; app.use le fait dans toutes les routes ; il re-sépare tout
app.use(express.json());

const connectionOptions = {
  host: process.env.host,
  database: process.env.database,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
};

mysql.createConnection(connectionOptions).then(async (db) => {
  manhwaRoutes(app, db);
  // userRoutes(app, db);
});

app.listen(4000, () => {
  console.log("server stated 🚀");
});
