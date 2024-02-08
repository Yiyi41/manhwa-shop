import { connection } from "./dbConfig.js";
import express from "express";
import cors from "cors";

// Import routes
import manhwaRoutes from "./routes/manhwaRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import paymentRoute from "./routes/paymentRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to db
connection.then(async (db) => {
  app.get("/", (req, res) => {
    try {
      res.json({ status: 200, msg: "Connected" });
    } catch (error) {
      res.send(error);
    }
  });
  manhwaRoutes(app, db);
  userRoutes(app, db);
  cartRoutes(app, db);
  paymentRoute(app, db);
});

// connect to local
app.listen(4000, () => {
  console.log("server started 🚀");
});
