import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

// export const CartContext = createContext({
//   manhwaInfo: {},
//   quantity: 0,
//   setCartContext: (info) => {},
// });

// export default function CartProvider(props) {
//   const cartState = {
//     manhwaInfo: {},
//     quantity: 0,
//     setCartContext: (info) =>
//       setCart((prevState) => ({
//         ...prevState,
//         manhwaInfo: info.manhwaInfo,
//         quantity: info.quantity,
//       })),
//   };
//   const [cart, setCart] = useState(cartState);
