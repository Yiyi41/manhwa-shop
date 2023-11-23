const manhwaRoutes = (app, db) => {
  /* get all manhwas*/
  app.get("/manhwas", async (req, res) => {
    const responseDB = await db.query("SELECT * FROM Manhwa");
    // console.log("responseDB ", responseDB);
    res.json({ status: 200, responseDB });
  });

  /* get manhwa by id*/
  app.get("/manhwas/:id", async (req, res) => {
    const manhwaId = req.params.id;
    const responseDB = await db.query("SELECT * FROM Manhwa WHERE id = ?", [
      manhwaId
    ]);
    // console.log(responseDB.length);
    if (responseDB.length !== 0) {
      res.json({ status: 200, responseDB });
    } else {
      res.status(404);
    }
  });
};

module.exports = manhwaRoutes;
