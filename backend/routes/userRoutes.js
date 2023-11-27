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
      const name = req.body.name;
      const email = req.body.email;
      const password = newHash;
 

      // console.log("firstname, name, email, password: ", firstname, name, email, password);

      const checkUser = await db.query("SELECT * FROM User WHERE email = ?", [
        email,
      ]);



      if (checkUser.length === 0) {
        const insertToDB = await db.query(
          "INSERT INTO User (firstname,name,email,password,salt ) VALUES (?,?,?,?,?)",[firstname, name, email, password, newSalt]);
        // console.log("responseDB ", responseDB)
        const userId = insertToDB.insertId;
        // const userName = responseDB.firstname;
        // console.log("userName ", userName)
        
        if (userId) {
          const token = jwt.sign({ id: userId }, process.env.jwtokenKey, {
            expiresIn: "2h",
          });
          res.json({
            status: 200,
            userToken: token,
            userId: userId,
            userName: req.body.firstname,
          });
        }
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
        console.log(userToFind[0].firstname);
        if (newHash === userToFind[0].password) {
          const token = jwt.sign(
            { id: userToFind[0].id },
            process.env.jwtokenKey,
            {
              expiresIn: "2h",
            }
          );
          res.json({
            status: 200,
            userToken: token,
            userId: userToFind[0].id,
            userName: userToFind[0].firstname,
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
  });

  app.get("/payments/:userid", async (req, res) => {
    const userId = req.params.userid;
    console.log("userId", userId);
    const responseDB = await db.query(
      "SELECT * FROM payments WHERE userId = ?",
      [userId]
    );
    console.log(responseDB);
    // res.json({ status: 200, responseDB });
    if (responseDB.length !== 0) {
      res.json({ status: 200, responseDB });
    } else {
      res.status(404);
    }
  });
};

module.exports = userRoutes;
