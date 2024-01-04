import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate, Link } from "react-router-dom";
import poubelle from "../assets/poubelle.png";

import "./Cart.css";

import Button from "../components/Button/Button";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  // calculer le prix total de panier pour afficher au front
  let totalCart = 0;
  cart.forEach((article) => {
    totalCart += article.info.price * article.quantity;
  });

  // vérifie si client est connecté
  const checkToken = async () => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      navigate("/cart/valid");
    } else {
      navigate("/login");
    }
  };

  //ajout handleselect handledelete///
  const handleSelect = (value, currentManhwa) => {
    // console.log("value, currentManhwa", value, currentManhwa);

    const newCart = [...cart];
    const index = newCart.indexOf(currentManhwa);
    // console.log("index", index);
    newCart[index]["quantity"] = value;
    // console.log("newCart[index]", newCart[index]);
    setCart(newCart);
    //console.log(cart);
  };

  const handledelete = (currentManhwa) => {
    const newCart = [...cart];
    const index = newCart.indexOf(currentManhwa);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="container">
      <h1>Mon panier</h1>
      {cart.length === 0 ? (
        <p className="emptyCartMessage">Votre panier est vide</p>
      ) : (
        cart.map((itemList) => {
          return (
            <div key={itemList.info.id} className="cartContent ">
              <Link to={`/detail/${itemList.info.id}`} className="imgContainer">
                <img
                  src={itemList["info"]["img"]}
                  alt="manhwa"
                  className="produitImg"
                />
              </Link>

              <div className="cardInfos">
                <span className="cardInfos-title">{itemList.info.name}</span>
                <div className="ajoutSuppression">
                  <div className="quantite">
                    <span> Quantité: </span>
                    <select
                      name={itemList.info.id}
                      value={itemList.quantity}
                      onChange={(event) => {
                        handleSelect(event.currentTarget.value, itemList);
                      }}
                    >
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
                  </div>
                  <img
                    src={poubelle}
                    alt="icone poubelle"
                    id="poubelle"
                    onClick={() => handledelete(itemList)}
                  />
                </div>
                <p className="unitaire">
                  {itemList.info.price} € <br />
                  <span className="prixUnitaire"> prix unit.</span>
                </p>
              </div>
              {/* <div className="totalContainer-in-cart">
                <span> Total {totalCart} €</span>
                <button onClick={checkToken} className="valid-total-btn">
                  Valider mon panier
                </button>
              </div> */}
            </div>
          );
        })
      )}

      {cart.length !== 0 && (
        <div className="totalContainer">
          <p className="totalPrice"> Total {totalCart} €</p>
          <Button type="button" onClick={checkToken} text="Commander" />
        </div>
      )}
    </div>
  );
};

export default Cart;
