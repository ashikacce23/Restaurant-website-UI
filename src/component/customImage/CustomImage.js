import React from 'react';
import {Link} from "react-router-dom"
import "./CustomImage.scss"

//NB: Ei tar css Hero.scss e ase
function CustomImage({src, pt}) {
  return(
      <>
      <div className='custom_image' style={{paddingTop:pt}}>
          <Link to="/recipe">
             <img src={src} alt="myimage"/>
          </Link>
      </div>
      </>
  )
}

export default CustomImage;
