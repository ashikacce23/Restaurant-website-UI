import React from 'react';
import "./Recipes.scss"
import {Link} from "react-router-dom"
import { GrSearch } from "react-icons/gr";
import RecipeCard from '../../component/recipeCard/RecipeCard';

function Recipes() {
  const searches =["pizza","burger","coockies","juice","biriyani","salad","icecream","lasanga","pudding","soup"]

  const recipes=[
    {
      title:"Chicken Pan Pizza",
      img:"/img/gallery/img_1.jpg",
      authorImg:"/img/top-chiefs/img_1.jpg"
    },
    {
      title:"Roast Lamb Salad",
      img:"/img/gallery/img_2.jpg",
      authorImg:"/img/top-chiefs/img_4.jpg"
    },
    {
      title:"Prawn Pie",
      img:"/img/gallery/img_3.jpg",
      authorImg:"/img/top-chiefs/img_2.jpg"
    },
    {
      title:"Stuffed Jacket Potatoes",
      img:"/img/gallery/img_5.jpg",
      authorImg:"/img/top-chiefs/img_5.jpg"
    },
    {
      title:"Roast Lamb Salad",
      img:"/img/gallery/img_4.jpg",
      authorImg:"/img/top-chiefs/img_5.jpg",
    },
    {
      title:"Laccha Aloo Sooji Pakoda Recipe",
      img:"/img/gallery/img_6.jpg",
      authorImg:"/img/top-chiefs/img_6.jpg"
    },
    {
      title:"Chicken Kabsa : Arabian Style Chicken And Rice",
      img:"/img/gallery/img_7.jpg",
      authorImg:"/img/top-chiefs/img_3.jpg"
    },
    {
      title:"Butter Scotch Cookies",
      img:"/img/gallery/img_8.jpg",
      authorImg:"/img/top-chiefs/img_1.jpg"
    },
    {
      title:"Red Wine Braised Mushroom Flatbread",
      img:"/img/gallery/img_9.jpg",
      authorImg:"/img/top-chiefs/img_2.jpg"
    },
    {
      title:"Zesty Smoked Salmon With Avocado Tomato Salad",
      img:"/img/gallery/img_10.jpg",
      authorImg:"/img/top-chiefs/img_6.jpg"
    }
  ]
  return (
      <>
      <div className="recipe">
        <Link to="/" className="back_home">Back to Home</Link>
          <div className="previous_search">
            <h2>Previous Searches</h2>
            <div className="previous_search_item">
              {
                searches.map((item,index)=>(
                  <div key={index} className='search_item'>
                     {item}
                  </div> 
                ))
              }
            </div>
            <div className="search">
              <input type="text" placeholder='Search for items....' />
              <button className='btn'>
                <GrSearch />
              </button>
            </div>
          </div>
          {/* For recipe card */}

        <div className="recipe_card_container">
          {
            recipes.map((recipe,index)=>(
              <RecipeCard recipe={recipe} key={index} />
            ))
          }
            {/* <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard /> */}
        </div>
          
      </div>
      </>
  )
}

export default Recipes;
