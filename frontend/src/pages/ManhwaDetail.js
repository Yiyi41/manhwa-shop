import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const ManhwaDetail = () => {
  const [manhwaDetail, setManhwaDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchManhwaDetail = async () => {
      try {
        // console.log(id);
        const response = await axios.get(`http://localhost:4000/manhwas/${id}`);
        // console.log(response.data.responseDB[0]);
        setManhwaDetail(response.data.responseDB[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchManhwaDetail();
  }, [id]);
  //console.log(manhwaDetail.Resume);

  const handleAddToCart = (manhwa) => {
    const newCart = [...cart];
    let isIn = false;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].info.id === manhwa.id) {
        isIn = true;
        newCart[i].quantity++;
        break;
      }
    }

    if (isIn === false) {
      newCart.push({
        info: manhwa,
        quantity: 1,
      });
    }

    setCart(newCart);
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div key={manhwaDetail.id} className="manhwaDetails">
      <p>{manhwaDetail.name}</p>
      <p>Auteur: {manhwaDetail.author}</p>
      <p> Artist: {manhwaDetail.artist ? manhwaDetail.artist : ""}</p>
      <img src={manhwaDetail.img} alt="manhwa" />
      {/* <div className="cardInfos"> */}
      {/* <p>{manhwa.artist}</p> */}
      <details>
        <summary>Voir le synopsis</summary>
        {manhwaDetail.resume}
      </details>
      <p>{manhwaDetail.price} €</p>
      <button
        className="ajoutPanier"
        onClick={() => {
          handleAddToCart(manhwaDetail);
        }}
      >
        Ajouter au panier
      </button>
    </div>
    // </div>
  );
};

export default ManhwaDetail;
