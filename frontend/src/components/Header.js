import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-v1-manhwa.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <FontAwesomeIcon icon="bars" className="bars-icon" />
      <Link to="/">
        <img src={logo} alt="logo du site" className="logo" />
      </Link>

      <div className="block-right">
        <FontAwesomeIcon icon="user" className="user-icon" />
        <FontAwesomeIcon icon="cart-arrow-down" className="cart-icon" />
      </div>
    </div>
  );
};

export default Header;
