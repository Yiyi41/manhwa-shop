import { useContext } from "react";
import logo from "../assets/logo-v1-manhwa.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import panier from "../assets/ajouter-au-panier2.png";
import profil from "../assets/profil.png";
import menu from "../assets/hamburger.png";

const Header = () => {
  const {categorieFiltree , setCategorieFiltree}= useContext(CartContext)
//   const [needCategorie, setNeedCategorie] = useState(categorieFiltree)
//   useEffect(() => {
//     // Ne rien faire si la modal est fermée
//     if (needCategorie !== "") {
//         return;
//     }
//     setCategorieFiltree("")
// }, [needCategorie]);
  // attention!!! il faut utiliser {} pour useContext, pas [].
  // Sinon on a l'erreur "not iterable"
  const { cart, setCart } = useContext(CartContext);
  let quantity = 0;
  for (let i = 0; i < cart.length; i++) {
    quantity += parseInt(cart[i].quantity);
  }
  //
const handleCategories = (categorie) =>{
  setCategorieFiltree(categorie)
  console.log(categorieFiltree);
}
//
  return (
    <div className="header-container">
      <img src={menu} alt="" className="bars-icon" />
      <Link to="/" onClick={()=>handleCategories("")}>
        <img src={logo} alt="logo du site" className="logo" />
      </Link>

      <div className="block-right">
        <img src={profil} alt="" className="user-icon" />
<<<<<<< HEAD
        <Link to="/cart" className="cart-link-header" >
          {/* <FontAwesomeIcon icon="cart-arrow-down" className="cart-icon" /> */}
=======
        <Link to="/cart" className="cart-link-header">
>>>>>>> 5d3d5ef27c348ca624143531452a0085f9439d54
          <img src={panier} alt="" className="cart-icon" />
        </Link>
        {quantity > 0 && <span className="nbInCart">{quantity}</span>}
      </div>
    </div>
  );
};

export default Header;
