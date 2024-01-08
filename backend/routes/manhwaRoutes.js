import { getAllManhwas, getManhwasById } from "../controllers/manhwa.js";

const manhwaRoutes = (app, db) => {
  /* get all manhwas*/
  app.get("/manhwas", async (req, res) => {
    await getAllManhwas(db, res);
  });

  /* get manhwa by id*/
  app.get("/manhwas/:id", async (req, res) => {
    const manhwaId = req.params.id;
    await getManhwasById(db, res, manhwaId);
  });
};

export default manhwaRoutes;
