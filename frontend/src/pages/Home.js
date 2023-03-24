import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/cartContext";
import Categories from "../components/Categories";
import panier from "../assets/ajouter-au-panier2.png";

const Home = () => {
  const [manhwaList, setManhwaList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // attention!!! il faut utiliser {} pour useContext, pas []
  // Sinon on a l'erreur "not iterable"
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
        console.log(error.response);
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
        quantity: 1,
      });
    }
    setCart(newCart);
  };

  //
  const handleCategories = (categorie) => {
    setCategorieFiltree(categorie);
  };
  //
  //
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {/* <SearchBar   /> */}
      <Categories handleCategories={handleCategories} />
      <div className="manhwaList-container">
        {categorieFiltree === ""
          ? manhwaList.map((manhwa) => {
              return (
                <div key={manhwa.id} className="manhwa-card">
                  <Link to={`/detail/${manhwa.id}`} className="link-to-detail">
                    <img src={manhwa.img} alt="manhwa" className="manhwa-img" />
                  </Link>
                  <div className="cardInfos">
                    <span className="cardInfos-title">{manhwa.name}</span>
                    <span className="cardInfos-author">{manhwa.author}</span>
                    <p className="cardInfos-price">{manhwa.price}, 00 €</p>
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
              );
            })
          // eslint-disable-next-line array-callback-return
          : manhwaList.map( manhwa => { 
            if (manhwa.genre === categorieFiltree)
                return (<div key={manhwa.id} className="manhwa-card">
                    <Link
                      to={`/detail/${manhwa.id}`}
                      className="link-to-detail"
                    >
                      <img
                        src={manhwa.img}
                        alt="manhwa"
                        className="manhwa-img"
                      />
                    </Link>
                    <div className="cardInfos">
                      <span className="cardInfos-title">{manhwa.name}</span>
                      <span className="cardInfos-author">{manhwa.author}</span>
                      <p className="cardInfos-price">{manhwa.price}, 00 €</p>

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
                );
            })}
      </div>
    </div>
  );
};

export default Home;
