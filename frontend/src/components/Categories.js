import { useState } from "react"

const Categories = (props)=> {
    //
    // on stock les catégories dans un state
    const [categories, setCategories]= useState(["Comedy","Romance","Action","Adventure","Martial Arts","Fantasy",""])
    

//
    return (
        <div className="categories">
            {categories.map(categorie =>{ 
                return(
            <button key={categorie}
            name={categorie}
            onClick={()=> props.handleCategories(categorie)}
            >
            {categorie ? categorie : "Tous les manhwas"}
            </button>
            )})}
        </div>
    )
}

export default Categories