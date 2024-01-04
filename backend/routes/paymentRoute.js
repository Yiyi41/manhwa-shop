const stripe = require("stripe")(process.env.stripeKey);

const paymentRoute = (app, db) => {
  //   const stripeToken = req.body.stripeToken;
  app.post("/payment/valid", async (req, res) => {
    const userId = req.body.userId;
    // Réception du token créer via l'API Stripe depuis le Frontend
    const orderNumberStripe = req.body.source;
    const amount = req.body.total;
    const cart = req.body.cart;
    const datetime = new Date();

    //convertir en heure local pour enregistrer dans la db
    const offsetMinutes = datetime.getTimezoneOffset();
    const localTime = new Date(datetime.getTime() - offsetMinutes * 60 * 1000);
    const paymentDate = new Date(localTime)
      .toJSON()
      .slice(0, 19)
      .replace("T", " ");

    // demande la validation vers stripe
    const responseStripe = await stripe.charges.create({
      amount: "2000",
      currency: "eur",
      source: req.body.source
    });

    // si stripe valid le paiment, enregistre le détail de paiement dans bdd
    if (responseStripe.status === "succeeded") {
      const paymentToAdd = await db.query(
        "INSERT INTO payments (userId,orderNumberStripe,amount,paymentDate) VALUES (?,?,?,?)",
        [userId, orderNumberStripe, amount, paymentDate]
      );
      // console.log("paymentToAdd", paymentToAdd);

      // enregistre également les détails de commande dans bdd
      cart.forEach(async (manhwa) => {
        const orderToAdd = await db.query(
          "INSERT INTO orders (orderNumberStripe, manhwaId, quantity, unitPrice, userId, orderedDate) VALUES (?,?,?,?,?,?)",
          [
            orderNumberStripe,
            manhwa.info.id,
            manhwa.quantity,
            manhwa.info.price,
            userId,
            paymentDate
          ]
        );
      });

      const commitResult = await db.query("COMMIT");

      res.json({ status: 200 });
    }
  });

  /* user historic purchases */
  app.get("/payments/:userid", async (req, res) => {
    const userId = req.params.userid;

    const responseDB = await db.query(
      "SELECT * FROM payments WHERE userId = ?",
      [userId]
    );
    // console.log("historiques de payments", responseDB);

    if (responseDB.length !== 0) {
      res.json({ status: 200, responseDB });
    } else {
      res.status(404);
    }
  });
};

module.exports = paymentRoute;
