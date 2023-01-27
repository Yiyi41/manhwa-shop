import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

const CheckoutForm = ({ totalChecked, userId }) => {
  //   console.log(totalChecked);
  const { cart, setCart } = useContext(CartContext);

  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      let todayDate = new Date();
      let payementDate =
        todayDate.getDate() +
        "/" +
        (todayDate.getMonth() + 1) +
        "/" +
        todayDate.getFullYear();

      //Etape 2:envoie numéro de carte + récupèrer les données cb
      const cardInfos = elements.getElement(CardElement);
      //Etape 3 et 4: Envoie ces données à l'API Stripe: vlaidation de la carte + réception d'un token
      const stripeResponse = await stripe.createToken(cardInfos, {
        name: userId, // à la place du token on puisse envoyer l'id du user
      });
      console.log("Stripe Response ===> ", stripeResponse);
      console.log("stripeResponse.token.id", stripeResponse.token.id);
      const stripToken = stripeResponse.token.id;
      // Envoie la requête à notre propre serveur
      const response = await axios.post("http://localhost:4000/payment/valid", {
        total: totalChecked,
        useId: userId,
        cart: cart,
        source: stripToken,
        paymentDate: payementDate,
      });
      console.log(response.data.status); // Succeeded
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="checkoutContainer">
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement className="cardInfo" />
          <input className="pay-btn" type="submit" value="Pay" />
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </div>
  );
};

export default CheckoutForm;
