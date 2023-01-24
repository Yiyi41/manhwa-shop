import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-v1-manhwa.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import panier from "../assets/ajouter-au-panier2.png";
import profil from "../assets/profil.png";
import menu from "../assets/hamburger.png";

const Header = () => {
  // attention!!! il faut utiliser {} pour useContext, pas [].
  // Sinon on a l'erreur "not iterable"
  const { cart, setCart } = useContext(CartContext);
  let quantity = 0;
  for (let i = 0; i < cart.length; i++) {
    quantity += cart[i].quantity;
  }

  return (
    <div className="header-container">
      {/* <FontAwesomeIcon icon="bars" className="bars-icon" /> */}
      <img src={menu} alt="" className="bars-icon" />
      <Link to="/">
        <img src={logo} alt="logo du site" className="logo" />
      </Link>

      <div className="block-right">
        {/* <FontAwesomeIcon icon="user" className="user-icon" /> */}
        <img src={profil} alt="" className="user-icon" />
        <Link to="/cart" className="cart-link-header">
          {/* <FontAwesomeIcon icon="cart-arrow-down" className="cart-icon" /> */}
          <img src={panier} alt="" className="cart-icon" />
        </Link>
        {quantity > 0 && <span className="nbInCart">{quantity}</span>}
      </div>
    </div>
  );
};

export default Header;
