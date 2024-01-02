// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialNetworks">
        <img src={youtube} alt="logo youtube" />
        <img src={facebook} alt="logo facebook" />
        <img src={twitter} alt="logo twitter" />
        <img src={instagram} alt="logo instagram" />
      </div>
      <p className="contact">
        CONTACTEZ-NOUS PAR TÉLÉPHONE <br />
        +33 89 12 34 56 <br />
        serviceclientele@manhwa.com
      </p>
    </div>
  );
};

export default Footer;
