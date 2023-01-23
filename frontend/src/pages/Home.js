import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [manhwaList, setManhwaList] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <SearchBar />
      <div className="manhwaList-container">
        {manhwaList.map((manhwa) => {
          return (
            <div key={manhwa.Id} className="manhwa-card">
              <Link to={`/detail/${manhwa.Id}`}>
                <img src={manhwa.img} alt="manhwa" />
              </Link>
              <div className="cardData">
                <p>{manhwa.Name}</p>
                <p>{manhwa.Author}</p>
                {/* <p>{manhwa.Artist}</p> */}
                <p>{manhwa.Price}€</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
