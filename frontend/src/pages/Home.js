import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
// import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/cartContext";
import Categories from "../components/Categories";
import panier from "../assets/ajouter-au-panier2.png";
import Loader from "../components/loader/Loader";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const [manhwaList, setManhwaList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext); //le state cart est dans un useContext pour etre accessible de partout (dans le header, dans la page panier...)
  //

  //   On stock la catégorie filtrée dans un state pour l'appliquer..
  const { categorieFiltree, setCategorieFiltree } = useContext(CartContext);
  //

  useEffect(() => {
    const fetchManhwaList = async () => {
      try {
        //on fait la requete au back et on attend
        const response = await axios.get("http://localhost:4000/manhwas");
        setManhwaList(response.data.responseDB);
        setIsLoading(false); // pour ne rien afficher tant qu'on n'a pas la liste
      } catch (error) {
        console.error("Error fetching manhwa list:", error);
      }
    };
    fetchManhwaList();
  }, []);

  const handleAddToCart = (manhwa) => {
    // on copie le tableau car on ne peut pas modifier un state directement il faudra utiliser setCart
    const newCart = [...cart];

    // on teste si il est déjà dans le panier
    let isIn = false; //pour memoriser si on l'a trouvé
    for (let i = 0; i < newCart.length; i++) {
      // on boucle sur les element du panier
      if (newCart[i]["info"]["id"] === manhwa.id) {
        // on l'a trouvé
        isIn = true; //on le note pour eviter de l'ajouter dans le panier après
        newCart[i].quantity++; // on ajoute 1 a la quantité de cet article
        break; // on sort de la boucle du panier car on n'a pas besoin de tester les autres elements
      }
    }
    //si il n'est pas encore dans le panier on l'ajoute
    if (isIn === false) {
      // ===false si on ne l'a pas trouvé dans la boucle au dessus
      newCart.push({
        info: manhwa,
        quantity: 1
      });
    }
    setCart(newCart);
    setModalOpen(true);
  };

  const handleCategories = (categorie) => {
    setCategorieFiltree(categorie);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {" "}
      <div className="content-container">
        {/* <SearchBar   /> */}
        <Categories handleCategories={handleCategories} />
        <div className="manhwaList-container">
          {categorieFiltree === ""
            ? manhwaList.map((manhwa) => {
                return (
                  <div className="manhwa-card-container">
                    <div key={manhwa.id} className="manhwa-card">
                      <Link
                        to={`/detail/${manhwa.id}`}
                        className="link-to-detail"
                      >
                        <img
                          src={manhwa.img}
                          alt="manhwa"
                          className="manhwaImg"
                        />
                      </Link>
                      <div className="manhwaInfos">
                        <span className="manhwa-title">{manhwa.name}</span>
                        <span className="manhwa-author">{manhwa.author}</span>
                        <div className="priceContainer">
                          <p className="manhwa-price">{manhwa.price}, 00 €</p>
                          <img
                            src={panier}
                            alt=""
                            className="ajoutPanier-icon"
                            onClick={() => {
                              handleAddToCart(manhwa);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : // eslint-disable-next-line array-callback-return
              manhwaList.map((manhwa) => {
                if (manhwa.genre === categorieFiltree)
                  return (
                    <div className="manhwa-card-container">
                      {" "}
                      <div key={manhwa.id} className="manhwa-card">
                        <Link
                          to={`/detail/${manhwa.id}`}
                          className="link-to-detail"
                        >
                          <img
                            src={manhwa.img}
                            alt="manhwa"
                            className="manhwaImg"
                          />
                        </Link>
                        <div className="manhwaInfos">
                          <span className="manhwa-title">{manhwa.name}</span>
                          <span className="manhwa-author">{manhwa.author}</span>

                          <div className="priceContainer">
                            <p className="manhwa-price">{manhwa.price}, 00 €</p>
                            <img
                              src={panier}
                              alt=""
                              className="ajoutPanier-icon"
                              onClick={() => {
                                handleAddToCart(manhwa);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
              })}
        </div>
      </div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Home;
