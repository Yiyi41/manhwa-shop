import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ManhwaDetail = () => {
  const [manhwaDetail, setManhwaDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchManhwaDetail = async () => {
      try {
        console.log(id);
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

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <p>{manhwaDetail.Name}</p>
      <img src={manhwaDetail.img} alt="manhwa" />
      <p>{manhwaDetail.Price} €</p>
    </div>
  );
};

export default ManhwaDetail;
