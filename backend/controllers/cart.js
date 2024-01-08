export const registerOrder = async (db, req, res) => {
  try {
    const { orderNumber, manhwaId, quantity, unitPrice, userId, orderedDate } =
      req.body;

    const orderToAdd = await db.query(
      "INSERT INTO orders (order_number, manhwa_id, quantity, unit_price, user_id, ordered_date) VALUES (?,?,?,?,?,?)",
      [orderNumber, manhwaId, quantity, unitPrice, userId, orderedDate]
    );
    res.json({ status: 200, orderToAdd });
  } catch (error) {
    console.log(error);
  }
};

export const calculAndCheckPrice = async (db, req, res) => {
  try {
    const cart = req.body;
    let totalPrice = 0;
    const getManhwasList = await db.query("SELECT * FROM Manhwa");
    cart.forEach((article) => {
      let found = getManhwasList.find((item) => item.id === article.info.id);

      if (found.price === article.info.price) {
        totalPrice += article.info.price * article.quantity;
      }
    });
    res.json({ status: 200, totalPrice });
  } catch (error) {
    console.log(error);
  }
};
