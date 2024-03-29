import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import Modal from "../components/Modal/Modal";

import "./ManhwaDetail.css";

import Button from "../components/Button/Button";

const ManhwaDetail = () => {
  const [manhwaDetail, setManhwaDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchManhwaDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/manhwas/${id}`);
        setManhwaDetail(response.data.responseDB[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchManhwaDetail();
  }, [id]);

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
        quantity: 1
      });
    }

    setCart(newCart);
    setModalOpen(true);
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      {" "}
      <div key={manhwaDetail.id} className="content-container">
        <p className="manhwaTitle-in-manhwaDetail">{manhwaDetail.name}</p>
        <p className="author">Auteur: {manhwaDetail.author}</p>
        <img
          src={manhwaDetail.img}
          alt="manhwa"
          className="manhwa-img-in-manhwaDetail"
        />

        <p className="author">
          Dessinateur:
          {manhwaDetail.artist ? manhwaDetail.artist : " non communiqué"}
        </p>
        <details>
          <summary>Voir le synopsis</summary>
          {manhwaDetail.resume}
        </details>
        <p className="price">{manhwaDetail.price}, 00 €</p>
        <Button
          type="button"
          onClick={() => {
            handleAddToCart(manhwaDetail);
          }}
          text="Ajouter au panier"
        />
      </div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default ManhwaDetail;
