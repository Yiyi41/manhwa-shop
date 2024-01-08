import { validPayment, getPayementsByUserId } from "../controllers/payement.js";

const paymentRoute = (app, db) => {
  app.post("/payment/valid", async (req, res) => {
    await validPayment(db, req, res);
  });

  /* user historic purchases */
  app.get("/payments/:userid", async (req, res) => {
    await getPayementsByUserId(db, req, res);
  });
};

export default paymentRoute;
