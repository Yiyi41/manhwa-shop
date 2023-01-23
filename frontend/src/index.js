import React from "react";
import ReactDOM from "react-dom/client";
// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/cartContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
