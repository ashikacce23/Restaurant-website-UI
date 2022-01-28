import React from 'react';
import "./RecipeCard.scss";
import {Link} from "react-router-dom"

function RecipeCard({recipe}) {
  return (
      <>
      <div className="recipe_card">
          <img src={recipe.img} className='recipe_img' alt="Lailunnahar" />
          <div className="recipe_card_info">
            <img src={recipe.authorImg} alt="Abir vai" />
            <div className="info">
              <h3> {recipe.title} </h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis cupiditate id fugit et. Ad.</p>
              <Link to="#">View recipe</Link>
            </div>
          </div>
      </div>
      </>
  )
}

export default RecipeCard;
