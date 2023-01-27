const cartRoutes = (app, db) => {
  /* enregistrer les commandes de user*/
  app.post("/cart/valid", async (req, res) => {
    try {
      const orderToAdd = await db.query(
        "INSERT INTO orders (order_number, manhwa_id, quantity, unit_price, user_id, ordered_date) VALUES (?,?,?,?,?,?)",
        [
          req.body.orderNumber,
          req.body.manhwaId,
          req.body.quantity,
          req.body.unitPrice,
          req.body.userId,
          req.body.orderedDate,
        ]
      );
      res.json({ status: 200, orderToAdd });
    } catch (error) {
      console.log(error);
    }
  });

  // vérifier les prix des produits avant de faire le calcul de total
  app.post("/cart/checkprices", async (req, res) => {
    try {
      const cart = req.body;
      let totalPrice = 0;
      const getManhwasList = await db.query("SELECT * FROM Manhwa");
      cart.forEach((article) => {
        let found = getManhwasList.find((item) => item.id === article.info.id);
        // console.log("found.price", found.price);
        if (found.price === article.info.price) {
          totalPrice += article.info.price * article.quantity;
        }
      });
      res.json({ status: 200, totalPrice });
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = cartRoutes;
