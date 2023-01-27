 import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
//import pages
import Home from "./pages/Home";
import ManhwaDetail from "./pages/ManhwaDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import ValidCart from "./pages/ValidCart";

function App() {

   //   On stock la catégorie filtrée dans un state pour l'appliquer..
   const [categorieFiltreeApp, setCategorieFiltreeApp]= useState("")
   //
   //
   const handleCategories = () =>{
     setCategorieFiltreeApp("")

     console.log(categorieFiltreeApp);
   }
   //
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/detail/:id" element={<ManhwaDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/valid" element={<ValidCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
