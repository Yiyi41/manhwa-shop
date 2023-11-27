import { useContext } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import panier from "../assets/ajouter-au-panier2.png";
import profil from "../assets/profil (1).png";
import menu from "../assets/hamburger.png";
import check from "../assets/verifier.png";

import "./Header.css"

const Header = () => {
  const navigate = useNavigate();

  const { setCategorieFiltree } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  // attention!!! il faut utiliser {} pour useContext, pas [].
  // Sinon on a l'erreur "not iterable"

  let quantity = 0;
  for (let i = 0; i < cart.length; i++) {
    quantity += parseInt(cart[i].quantity);
  }

  const handleCategories = (categorie) => {
    setCategorieFiltree(categorie);
    // console.log(categorieFiltree);
  };

  const userId = localStorage.getItem("userId");
  const handleClickAccount = () => {
    if (userId) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/");
  };



  return (
    <div className="header-container">
      <img src={menu} alt="" className="bars-icon" />
      <Link to="/" onClick={() => handleCategories("")} className="logoContainer">
        <img src={logo} alt="logo du site" className="logoImg" />
      </Link>

      <div className="block-right">
        <div className="iconsContainer"> {userId && <img src={check} alt="" className="check-user-icon" />}
        <img
          src={profil}
          alt=""
          className="user-icon"
          onClick={handleClickAccount}
        />
        <Link to="/cart" className="cart-link-header">
          <img src={panier} alt="" className="cart-icon" />
        </Link>
        {quantity > 0 && <span className="nbInCart">{quantity}</span>}</div>
       
      <div className= "logoutContainer">
      {userId ? (
    <p className="logoutBtn" onClick={handleLogout}>
      Déconnecter</p>):(<p className="logoutBtn" onClick={()=> navigate("/login")}>
      Connecter
    </p>)}
</div>
      </div>
     
    </div>
  );
};

export default Header;
