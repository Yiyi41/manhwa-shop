const stripe = require("stripe")(process.env.stripeKey);

const paymentRoute = (app, db) => {
  // Réception du token créer via l'API Stripe depuis le Frontend
  //   const stripeToken = req.body.stripeToken;
  // Créer la transaction
  app.post("/payment/valid", async (req, res) => {
    console.log("totalPrice", req.body.amount);
    console.log("stripeToken", req.body.source);
    console.log("cart", req.body.cart);
    const response = await stripe.charges.create({
      amount: "2000",
      currency: "eur",
      source: req.body.source,
    });

    const userId = req.body.userId;

    console.log("responseStatus", response.status);
    if (response.status === "succeeded") {
      const responseDB = await db.query(
        "INSERT INTO payements (userId,orderNumberStipe,amount,paymentDate ) VALUES (?,?,?,?)"
        // [firstname, name, email, password, newSalt]
      );
    }

    res.json(response);
  });
};

module.exports = paymentRoute;
