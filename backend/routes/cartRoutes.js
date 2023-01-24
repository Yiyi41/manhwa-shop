const cartRoutes = (app, db) => {
  /* enregistrer les commandes de user*/
  app.post("/cart/validation", async (req, res) => {
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
};

module.exports = cartRoutes;
