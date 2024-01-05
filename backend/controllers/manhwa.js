export const getAllManhwas = async () => {
  const responseDB = await db.query("SELECT * FROM Manhwa");
  res.json({ status: 200, responseDB });
};

export const getManhwasById = async () => {
  const manhwaId = req.params.id;
  const responseDB = await db.query("SELECT * FROM Manhwa WHERE id = ?", [
    manhwaId
  ]);

  if (responseDB.length !== 0) {
    res.json({ status: 200, responseDB });
  } else {
    res.status(404);
  }
};
