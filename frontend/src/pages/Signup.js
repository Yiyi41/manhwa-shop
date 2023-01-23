const Signup = () => {
  return (
    <div className="signup">
      <h3>Créer votre compte et bénéficiez de nos avantages adhérents</h3>
      <form>
        <div className="signupInput">
          <input type="text" placeholder="nom" required />
          <input type="text" placeholder="prénom" required />
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="mot de passe" required />
        </div>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Signup;
