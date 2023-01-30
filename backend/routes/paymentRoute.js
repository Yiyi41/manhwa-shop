const stripe = require("stripe")(process.env.stripeKey);

const paymentRoute = (app, db) => {
  //   const stripeToken = req.body.stripeToken;
  app.post("/payment/valid", async (req, res) => {
    const userId = req.body.userId;
    // Réception du token créer via l'API Stripe depuis le Frontend
    const orderNumberStripe = req.body.source;
    const amount = req.body.total;
    const paymentDate = req.body.paymentDate;
    const cart = req.body.cart;

    // demande la validation vers stripe
    const responseStripe = await stripe.charges.create({
      amount: "2000",
      currency: "eur",
      source: req.body.source,
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
          "INSERT INTO orders (orderNumberStripe, manhwaId, quantity, unitPrice, userId,orderedDate) VALUES (?,?,?,?,?,?)",
          [
            orderNumberStripe,
            manhwa.info.id,
            manhwa.quantity,
            manhwa.info.price,
            userId,
            paymentDate,
          ]
        );
        // console.log("orderToAdd", orderToAdd);
      });

      res.json({ status: 200 });
    }
  });
};

module.exports = paymentRoute;
