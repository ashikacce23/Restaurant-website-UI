import React from 'react';
import "./ChiefCard.scss"
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


function ChiefCard({chief}) {
  return (
      <>
      <div className="chief_card">
          <img src={chief.img} alt="" />
          <div className="chief_card_info">
              <h3 className='chief_card_name'> {chief.name} </h3>
              <p className="chief_recipe-count"> Recipies : <b> {chief.recipesCount} </b> </p>
               <p className="chief_recipe-cuisine"> Cuisine : <b> {chief.cuisine} </b> </p>
               <div className="chief_icon">
                   < BsFacebook className='fb'/>
                   <FaTwitter className='tr'/>
                   <BsInstagram className='in'/>
               </div>
          </div>
      </div>
      </>
  )
}

export default ChiefCard;
