const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

// generate a token for user when login succes
const jwt = require("jsonwebtoken");

const userRoutes = (app, db) => {
  /* user signup */
  app.post("/signup", async (req, res) => {
    try {
      const newSalt = uid2(16);
      const newHash = SHA256(req.body.password + newSalt).toString(encBase64);
      const firstname = req.body.firstname;
      const email = req.body.email;
      const password = newHash;

      const checkUser = await db.query("SELECT * FROM User WHERE email = ?", [
        email,
      ]);
      console.log(checkUser);
      if (checkUser.length === 0) {
        const responseDB = await db.query(
          "INSERT INTO User (firstname,email,password,salt ) VALUES (?,?,?,?)",
          [firstname, email, password, newSalt]
        );
        res.json({ status: 200, responseDB });
      } else {
        res.json({ status: 400, message: "ce mail existe déjà" });
      }
    } catch (error) {
      console.log(error);
    }
  });

  /* user login */
  app.post("/login", async (req, res) => {
    try {
      const email = req.body.email;
      const userToFind = await db.query("SELECT * FROM User WHERE email = ?", [
        email,
      ]);
      // console.log(userToFind.length);
      if (userToFind !== 0) {
        const newHash = SHA256(req.body.password + userToFind[0].salt).toString(
          encBase64
        );
        // console.log(userToFind[0].salt);
        if (newHash === userToFind[0].password) {
          const token = jwt.sign(
            { id: userToFind[0].id },
            process.env.jwtokenKey,
            {
              expiresIn: "2h",
            }
          );
          res.json({ status: 200, userToken: token, user: userToFind });
        } else {
          res.json({ status: 400, message: "connexion non autorisée" });
        }
      } else {
        res.json({ status: 400, message: "ce mail n'existe pas" });
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = userRoutes;
