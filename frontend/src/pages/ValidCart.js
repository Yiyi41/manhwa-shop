import axios from "axios";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KTT8wFRyAqwsrmB12M5SkPpX3oG2Nz92V8ofrOCIQkNPLrHrSieUoY5uW0gkv2w47Ya2hSRNceR8WbauCcYxO6y00sXad8t2r"
);

const ValidCart = () => {
  const [totalChecked, setTotalChecked] = useState(0);

  const { cart, setCart } = useContext(CartContext);

  const userId = localStorage.getItem("userId");

  // vérifie les prix sont pareils que dans le back avant de passer au paiment
  const checkPrices = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/cart/checkprices",
        cart
      );
      // console.log(response.data.totalPrice);
      setTotalChecked(response.data.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };
  checkPrices();

  return (
    <div className="checkout-container">
      {/* Le total de votre panier est <span>{totalChecked} €</span> */}
      <Elements stripe={stripePromise}>
        {/* Le total de votre panier est <span>{totalChecked} €</span> */}
        <CheckoutForm totalChecked={totalChecked} userId={userId} />
      </Elements>
    </div>
  );
};

export default ValidCart;
