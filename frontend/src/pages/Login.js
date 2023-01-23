const Login = () => {
  return (
    <form className="form">
      <span className="title">Signup</span>
      <input type="text" placeholder="email" className="text-input" />
      <input type="password" placeholder="password" className="text-input" />
      <input type="submit" className="validation-input" />
    </form>
  );
};

export default Login;
