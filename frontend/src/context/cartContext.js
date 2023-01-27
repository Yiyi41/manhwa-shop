import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [categorieFiltree, setCategorieFiltree] = useState("");
  const [menu, setMenu] = useState([
    { name: "accueil" ,isActive : true, path:"/"} 
    , {name :"se connecter / créer un compte", isActive : true, path:"/login"}
    , {name:"se déconnecter",isActive : false, path:"/logout"}
    ,{ name: "nouveautés",isActive : false, path:"/nouveautes"}
     ,{name :"à paraitre",isActive : false, path:"/aparaitre"} ,
    {name :"meilleurs ventes",isActive : false, path:"/meilleursventes"}
     ,{name :"à offrir",isActive : false} ,
])
  return (
    <CartContext.Provider value={{ cart, setCart, categorieFiltree, setCategorieFiltree, menu, setMenu }}>
      {props.children}
    </CartContext.Provider>
  );
}
