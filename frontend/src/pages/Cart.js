import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import poubelle from "../assets/poubelle.png"

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  //const itemList = cart.map((itemList) => itemList);

  return (
    <div>
      <h2>Mon panier</h2>
      {cart.length === 0
        ? "Votre panier est vide"
        : cart.map((itemList) => {
            return (
              <div key={itemList.info.id} className="manhwa-card-cart">
                <div className="imgLeft">
                <Link to={`/detail/${itemList.info.id}`}>
                  <img src={itemList["info"]["img"]} alt="manhwa" />
                  </Link>
                  <p className="unitaire">
                    {itemList.info.price} € <br />
                    <span className="prixUnitaire"> prix unit.</span>
                  </p>
                </div>
                <div className="cardInfos">
                  <p>{itemList.info.name}</p>
                  {/* <p>{itemList.info.author}</p> */}
                  {/* <p>{manhwa.artist}</p> */}
                  <div className="ajoutSuppression">
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
                  <img src={poubelle} alt="icone poubelle" id="poubelle"/>
                  </div>
                  <p className="OnemanhwaTotal">total One manhwa</p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Cart;
