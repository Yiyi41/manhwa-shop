import React, { useState, createContext } from "react";

export const CategorieContext = createContext();

export default function CategorieProvider(props) {
  const [categorieFiltree, setCategorieFiltree] = useState("");

  return (
    <CategorieContext.Provider value={{ categorieFiltree, setCategorieFiltree }}>
      {props.children}
    </CategorieContext.Provider>
  );
}
