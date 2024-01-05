import { getAllManhwas, getManhwasById } from "../controllers/manhwa";

const manhwaRoutes = (app, db) => {
  /* get all manhwas*/
  app.get("/manhwas", async (req, res) => {
    getAllManhwas;
  });

  /* get manhwa by id*/
  app.get("/manhwas/:id", async (req, res) => {
    getManhwasById;
  });
};

module.exports = manhwaRoutes;
