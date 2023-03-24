import { useContext } from "react";
import logo from "../assets/logo-v1-manhwa.png";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import panier from "../assets/ajouter-au-panier2.png";
import profil from "../assets/profil (1).png";
import menu from "../assets/hamburger.png";
import check from "../assets/verifier.png";

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

  return (
    <div className="header-container">
      <img src={menu} alt="" className="bars-icon" />
      <Link to="/" onClick={() => handleCategories("")}>
        <img src={logo} alt="logo du site" className="logo" />
      </Link>

      <div className="block-right">
        {userId && <img src={check} alt="" className="check-user-icon" />}
        <img
          src={profil}
          alt=""
          className="user-icon"
          onClick={handleClickAccount}
        />
        <Link to="/cart" className="cart-link-header">
          <img src={panier} alt="" className="cart-icon" />
        </Link>
        {quantity > 0 && <span className="nbInCart">{quantity}</span>}
      </div>
    </div>
  );
};

export default Header;
