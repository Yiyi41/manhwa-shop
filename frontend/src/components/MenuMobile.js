import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

const MenuMobile = () => {
    const {menu, setMenu} = useContext(CartContext)

    return (
        <div className="menuMobile">
            <ul className="menuMobileList">
            {menu.map(element => {
              if (element.isActive) return <li key={element.name}>
              <Link to="/" onClick={()=>handleCategories("")}>
              <img src={logo} alt="logo du site" className="logo" />
              </Link></li>
            })}
            </ul>
        </div>
    )
}

export default MenuMobile;