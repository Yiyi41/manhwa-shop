import { registerOrder, calculAndCheckPrice } from "../controllers/cart.js";

const cartRoutes = (app, db) => {
  /* enregistrer les commandes de user*/
  app.post("/cart/valid", async (req, res) => {
    await registerOrder(db, req, res);
  });

  // vérifier les prix des produits avant de faire le calcul de total
  app.post("/cart/checkprices", async (req, res) => {
    await calculAndCheckPrice(db, req, res);
  });
};

export default cartRoutes;
