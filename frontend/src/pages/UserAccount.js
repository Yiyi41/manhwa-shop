import { useState, useEffect } from "react";
import axios from "axios";

import "./UserAccount.css";

const UserAccount = () => {
  const userId = localStorage.getItem("userId");

  const userName = localStorage.getItem("userName");

  const [getUserOrders, setGetUserOrders] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/payments/${userId}`
        );

        console.log("list des payment par userId", response.data.responseDB);
        setGetUserOrders(response.data.responseDB);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserOrders();
  }, [userId]);

  return (
    <div className="account-container">
      <h2 className="title">BONJOUR {userName.toUpperCase()}</h2>
      <p className="account-subtitle-detail">
        Bienvenue sur votre espace personnel. Vous trouverez ici le suivi et le
        détail de vos commandes.
      </p>
      <h3>Historiques de mes commandes</h3>
      <table>
        <tbody>
          <tr className="account-payment-line">
            <th className="account-payment-detail">Date</th>
            <th className="account-payment-detail">Montant</th>
            <th className="account-payment-detail">Status</th>
            <th className="account-payment-detail">Numéro de commande</th>
          </tr>

          {!isLoading &&
            getUserOrders.map((order) => {
              return (
                <tr key={order.id} className="account-payment-line">
                  <td className="account-payment-detail">
                    {new Date(order.paymentDate).toLocaleDateString()}
                  </td>
                  <td className="account-payment-detail">{order.amount} €</td>
                  <td className="account-payment-detail">Livré</td>
                  <td className="account-payment-detail">
                    {order.orderNumberStripe}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* <div>
        <div className="account-payment-line">
          <p className="account-payment-detail">Date</p>
          <p className="account-payment-detail">Montant</p>
          <p className="account-payment-detail">Status</p>
        </div>
        {!isLoading &&
          getUserOrders.map((order) => {
            return (
              <div key={order.id} className="account-payment-line">
                <p className="account-payment-detail">
                  {new Date(order.paymentDate).toLocaleDateString()}
                </p>
                <p className="account-payment-detail">{order.amount} €</p>
                <p className="account-payment-detail">Livré</p>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default UserAccount;
