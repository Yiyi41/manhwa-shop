import { signupFunc, loginFunc } from "../controllers/user.js";

const userRoutes = (app, db) => {
  /* user signup */
  app.post("/signup", async (req, res) => {
    signupFunc(db, req, res);
  });

  /* user login */
  app.post("/login", async (req, res) => {
    loginFunc(db, req, res);
  });
};

export default userRoutes;
