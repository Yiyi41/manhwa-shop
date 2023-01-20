// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
//import pages
import Home from "./pages/Home";
import ManhwaDetail from "./pages/ManhwaDetail";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBars,
  faCartPlus,
  faCartArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faBars, faCartPlus, faCartArrowDown, faMagnifyingGlass);

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ManhwaDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
