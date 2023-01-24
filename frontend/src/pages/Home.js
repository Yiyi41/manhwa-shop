import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/cartContext";

const Home = () => {
  const [manhwaList, setManhwaList] = useState();
  const [isLoading, setIsLoading] = useState(true); // pour ne rien afficher tant qu'on n'a pas la liste des Manhuas
  // attention!!! il faut utiliser {} pour useContext, pas []
  // Sinon on a l'erreur "not iterable"
  const { cart, setCart } = useContext(CartContext); //le state cart est dans un useContext pour etre accessible de partout (dans le header, dans la page panier...)

  // on recupere la liste des manhuas
  // n'est executé qu'une fois car le useEffect a pour argument []
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
    // maintenant que les modification sont faite on peux mettre à jour le state
    setCart(newCart);
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <SearchBar />
      <div className="manhwaList-container">
        {manhwaList.map((manhwa) => {
          return (
            <div key={manhwa.id} className="manhwa-card">
              <Link to={`/detail/${manhwa.id}`}>
                <img src={manhwa.img} alt="manhwa" />
              </Link>
              <div className="cardInfos">
                <p>{manhwa.name}</p>
                <p>{manhwa.author}</p>
                {/* <p>{manhwa.artist}</p> */}
                <p>{manhwa.price} €</p>
                <button
                  className="ajoutPanier"
                  onClick={() => {
                    handleAddToCart(manhwa);
                  }}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
