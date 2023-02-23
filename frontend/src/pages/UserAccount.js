import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const userId = localStorage.getItem("userId");
  console.log(userId);

  const userName = localStorage.getItem("userName");
  console.log(userName);
  const [getUserOrders, setGetUserOrders] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/payments/${userId}`
        );

        console.log(response.data.responseDB);
        setGetUserOrders(response.data.responseDB);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserOrders();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="account-container">
      <p className="account-logout" onClick={handleLogout}>
        Déconnecter
      </p>
      <h2 className="title">BONJOUR {userName.toUpperCase()}</h2>
      <p className="account-subtitle-detail">
        Bienvenue dans votre compte. Vous êtes ici dans votre espace personnel.
        Vous trouverez ici le suivi et le détail de vos commandes.
      </p>
      <h3>Historiques de mes commandes</h3>
      <div>
        <div className="account-payment-line">
          <p className="account-payment-detail">Date</p>
          <p className="account-payment-detail">Montant</p>
          <p className="account-payment-detail">Status</p>
        </div>
        {getUserOrders.map((order) => {
          return (
            <div key={order.id} className="account-payment-line">
              <p className="account-payment-detail">
                {/* {order.paymentDate.slice(0, 10)} */}
                {order.paymentDate}
              </p>
              <p className="account-payment-detail">{order.amount} €</p>
              <p className="account-payment-detail">Livré</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserAccount;
