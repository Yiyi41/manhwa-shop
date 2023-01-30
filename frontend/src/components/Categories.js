import { useState } from "react";
import Button from "@mui/material/Button";

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
          <div>
            <button
              key={categorie}
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
