import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/cartContext";

const Home = () => {
  const [manhwaList, setManhwaList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const fetchManhwaList = async () => {
      try {
        const response = await axios.get("http://localhost:4000/manhwas");
        // console.log(response.data.responseDB);
        setManhwaList(response.data.responseDB);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchManhwaList();
  }, []);

  const handleAddToCart = (manhwa) => {
    // cart=[{info:{tout l'obj manhwa 1}, quantity:1},{info:{tout l'obj manhwa 2}, quantity:1}]
    const newCart = [...cart];
    console.log(newCart);
    // let manhwaToAdd = {
    //   info: manhwa,
    //   quantity: 1,
    // };
    // si panier est vide, push directement le manhwa cliqué
    if (newCart.length === 0) {
      newCart.push({
        info: manhwa,
        quantity: 1,
      });
      } else {
        const id = manhwaclique.info.id;
        const quantity = 1;
        newCart.push({
          info: id,
          quantity: quantity,
        });
      }
    };

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
