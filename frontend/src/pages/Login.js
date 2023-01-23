const Login = () => {
  return (
    <form className="form">
      <span className="title">Connectez-vous</span>
      <input type="text" placeholder="email" className="text-input" />
      <input
        type="password"
        placeholder="mot de passe"
        className="text-input"
      />
      <button type="submit" className="validation-input">
        Connection
      </button>
    </form>
  );
};

export default Login;
