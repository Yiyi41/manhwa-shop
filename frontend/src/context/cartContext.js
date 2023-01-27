import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [categorieFiltree, setCategorieFiltree] = useState("");

  return (
    <CartContext.Provider value={{ cart, setCart, categorieFiltree, setCategorieFiltree }}>
      {props.children}
    </CartContext.Provider>
  );
}
