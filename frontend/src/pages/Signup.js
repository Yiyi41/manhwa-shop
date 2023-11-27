import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css"

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("firstName, name, email, password: ", firstName, name, email, password)
    try {
      if (firstName && name && email && password) {
        let userToAdd = {
          firstname: firstName,
          name: name,
          email: email,
          password: password,
        };
       

        const response = await axios.post("http://localhost:4000/signup", userToAdd);

        console.log("response.data ", response.data)
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
    <div className="container">
      <h3>Créez votre compte et bénéficiez de nos avantages adhérents</h3>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Prénom"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="submitBtn">
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
