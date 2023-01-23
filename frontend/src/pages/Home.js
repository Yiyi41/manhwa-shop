import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/cartContext";

const Home = () => {
  const [manhwaList, setManhwaList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { cart, setCart } = useState(CartContext);

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

  const handleAddToCart = (manhwaId) => {
    const newCart = [...cart];
    const manhwaToCheck = newCart.find();

    let manhwaToAdd = {
      name: manhwa.name,
      price: manhwa.price,
      quantity: 1,
    };
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
                    const newCart = [...cart];
                    let manhwaToAdd = {
                      name: manhwa.name,
                      price: manhwa.price,
                      quantity: 1,
                    };

                    //avant de push manhwa, je vérifie si ce manhwa est déjà dans mon tableau
                    let isIn = false;
                    for (let i = 0; i < newCart.length; i++) {
                      if (newCart[i].name === manhwa.name) {
                        newCart[i].quantity++;
                        isIn = true;
                        break;
                      }
                    }
                    if (isIn === false) {
                      newCart.push(manhwaToAdd);
                    }

                    setCart(newCart);
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
