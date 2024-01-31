import uid2 from "uid2";
import jwt from "jsonwebtoken";
import pkg from "crypto-js";
const { SHA256, encBase64 } = pkg;

export const signupFunc = async (db, req, res) => {
  try {
    const newSalt = uid2(16);
    const newHash = SHA256(req.body.password + newSalt).toString(encBase64);
    const firstname = req.body.firstname;
    const name = req.body.name;
    const email = req.body.email;
    const password = newHash;

    const checkUser = await db.query("SELECT * FROM User WHERE email = ?", [
      email
    ]);

    if (checkUser.length === 0) {
      const insertToDB = await db.query(
        "INSERT INTO User (firstname,name,email,password,salt ) VALUES (?,?,?,?,?)",
        [firstname, name, email, password, newSalt]
      );

      const userId = insertToDB.insertId;

      if (userId) {
        const token = jwt.sign({ id: userId }, process.env.jwtokenKey, {
          expiresIn: "2h"
        });
        res.json({
          status: 200,
          userToken: token,
          userId: userId,
          userName: req.body.firstname
        });
      }
    } else {
      res.json({ status: 400, message: "ce mail existe déjà" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginFunc = async (db, req, res) => {
  try {
    const email = req.body.email;
    const userToFind = await db.query("SELECT * FROM User WHERE email = ?", [
      email
    ]);

    if (userToFind !== 0) {
      const newHash = SHA256(req.body.password + userToFind[0].salt).toString(
        encBase64
      );

      if (newHash === userToFind[0].password) {
        const token = jwt.sign(
          { id: userToFind[0].id },
          process.env.jwtokenKey,
          {
            expiresIn: "2h"
          }
        );
        res.json({
          status: 200,
          userToken: token,
          userId: userToFind[0].id,
          userName: userToFind[0].firstname
        });
      } else {
        res.json({ status: 400, message: "connexion non autorisée" });
      }
    } else {
      res.json({ status: 400, message: "ce mail n'existe pas" });
    }
  } catch (error) {
    console.log(error);
  }
};
