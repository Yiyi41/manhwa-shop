import { useState } from "react";
// import Button from "@mui/material/Button";
import "./Categories.css"

const Categories = (props) => {
  // on stock les catégories dans un state
  const [categories, setCategories] = useState([
    "Comedy",
    "Romance",
    "Action",
    "Adventure",
    "Martial Arts",
    "Fantasy",
    "",
  ]);

  return (
    <div className="categories">
      {categories.map((categorie) => {
        return (
          <div key={categorie}>
            <button
              name={categorie}
              onClick={() => props.handleCategories(categorie)}
            >
              {categorie ? categorie : "Tous les manhwas"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
