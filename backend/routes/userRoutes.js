import { signupFunc, loginFunc } from "../controllers/user.js";

const userRoutes = (app, db) => {
  /* user signup */
  app.post("/signup", async (req, res) => {
    signupFunc(db, res);
  });

  /* user login */
  app.post("/login", async (req, res) => {
    loginFunc(db, res);
  });
};

export default userRoutes;
