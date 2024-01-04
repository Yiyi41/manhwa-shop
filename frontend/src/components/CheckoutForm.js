import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

import "./CheckoutForm.css";

const CheckoutForm = ({ totalChecked, userId }) => {
  const { cart, setCart } = useContext(CartContext);

  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      // récupèrer les données cb
      const cardInfos = elements.getElement(CardElement);

      // Envoie ces données à l'API Stripe: vlaidation de la carte + réception d'un token
      const stripeResponse = await stripe.createToken(cardInfos, {
        name: userId // envoyer l'id du user
      });

      const stripToken = stripeResponse.token.id;
      // Envoie la requête au back
      const response = await axios.post("http://localhost:4000/payment/valid", {
        total: totalChecked,
        userId: userId,
        cart: cart,
        source: stripToken
      });

      if (response.data.status === 200) {
        setCompleted(true);
        setCart([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="checkoutContainer">
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <p className="message-before-payement">
            Le total de votre panier est <span>{totalChecked} €</span>
          </p>
          <CardElement className="cardInfo" />
          <input className="pay-btn" type="submit" value="Pay" />
        </form>
      ) : (
        <span className="message-after-payement">Paiement effectué ! </span>
      )}
    </div>
  );
};

export default CheckoutForm;
