import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (firstName && name && email && password) {
        let userToAdd = {
          firstname: firstName,
          name: name,
          email: email,
          password: password,
        };
        const response = await axios.post(
          "http://localhost:4000/signup",
          userToAdd
        );
        // si signup reussi, le userToken sera envoyé au front, et ensuite stocké dans localstorage
        if (response.data.userToken) {
          localStorage.setItem("userToken", response.data.userToken);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("userName", response.data.userName);
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <h3>Créer votre compte et bénéficiez de nos avantages adhérents</h3>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="prénom"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="nom"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="mot de passe"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="validation-creation-input">
          Créer un compte
        </button>
        <Link to="/login" className="login-redirect">
          <p>J'ai déjà un compte</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
