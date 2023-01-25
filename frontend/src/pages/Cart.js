import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  // vérifie si client est connecté
  const checkUserToken = () => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      navigate("/pay");
    } else {
      navigate("/signup");
    }
  };

  // calculer le prix total
  let totalPrice = 0;
  cart.forEach((article) => {
    totalPrice += article.info.price * article.quantity;
  });

  return (
    <div>
      <h2>Mon panier</h2>
      {cart.length === 0
        ? "Votre panier est vide"
        : cart.map((itemList) => {
            return (
              <div key={itemList.info.id} className="manhwa-card-cart">
                <div className="imgLeft">
                  <img src={itemList["info"]["img"]} alt="manhwa" />
                  <p className="unitaire">
                    {itemList.info.price} € <br />
                    <span className="prixUnitaire"> prix unit.</span>
                  </p>
                </div>
                <div className="cardInfos">
                  <p>{itemList.info.name}</p>
                  <p>{itemList.info.author}</p>
                  {/* <p>{manhwa.artist}</p> */}
                  <select name="quantityManhwa">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <p className="OnemanhwaTotal">total One manhwa</p>
                </div>
              </div>
            );
          })}

      <div>
        <span>Total </span>
        <span>{totalPrice} €</span>
      </div>
      <button onClick={checkUserToken}>Valider mon panier</button>
    </div>
  );
};

export default Cart;
