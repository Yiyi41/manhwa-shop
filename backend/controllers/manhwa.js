export const getAllManhwas = async (db, res) => {
  const responseDB = await db.query("SELECT * FROM Manhwa");
  res.json({ status: 200, responseDB });
};

export const getManhwasById = async (db, res, manhwaId) => {
  const responseDB = await db.query("SELECT * FROM Manhwa WHERE id = ?", [
    manhwaId
  ]);

  if (responseDB.length !== 0) {
    res.json({ status: 200, responseDB });
  } else {
    res.status(404);
  }
};
