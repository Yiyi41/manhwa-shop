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

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].info.id) {
        newCart[i].quantity++;
      } else {
        const manhwaToAdd = {
          info: manhwa,
          quantity: 1,
        };
        newCart.push(manhwaToAdd);
      }
    }

    setCart(newCart);

    // if (newCart.length !== 0) {
    //   let manhwaIsInCart = newCart.find((item) => item.name === manhwa.name);
    //   console.log(manhwaIsInCart);
    //   if ((manhwaIsInCart = undefined)) {
    //     let manhwaToAdd = {
    //       name: manhwa.name,
    //       price: manhwa.price,
    //       quantity: 1,
    //     };
    //     newCart.push(manhwaToAdd);
    //   } else {
    //     manhwaIsInCart.quantity++;
    //   }
    // }
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
