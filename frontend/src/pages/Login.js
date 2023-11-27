import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      let userToLogin = {
        email: email,
        password: password,
      };

      console.log("userToLogin ", userToLogin)

      try {
        const response = await axios.post(
          "http://localhost:4000/login",
          userToLogin
        );
        // si login reussi, le userToken sera envoyé, et ensuite stocké dans localstorage
        if (response.data.userToken) {
          localStorage.setItem("userToken", response.data.userToken);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("userName", response.data.userName);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handlLogin}>
      <span className="title">Connectez-vous</span>
      <input
        required
        type="text"
        placeholder="email"
        className="text-input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required
        type="password"
        placeholder="mot de passe"
        className="text-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="validation-input">
        Connexion
      </button>
      <Link to="/signup" className="signup-redirect">
        <p>Créer un compte</p>
      </Link>
    </form>
  );
};

export default Login;
