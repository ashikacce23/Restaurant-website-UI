import React from 'react';
import CustomImage from '../customImage/CustomImage';
import "./Hero.scss"



function Hero() {
    const images=[
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]
  return (
      <>
      <div className="hero">
         <div className="col info_div">
             <h1>What Are We About</h1>
             <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Qui asperiores, nihil repudiandae, 
                  id exercitationem unde dolorum, maxime deleniti
                  dignissimos ea autem quo voluptatum mollitia?</p>
                  <button className='btn'>Explore now</button>
         </div>
         <div className="col gallery">
             {
                 images.map((src,index)=>(
                     <CustomImage src={src} pt={"85%"} key={index} />
                 ))
             }
             {/* <CustomImage pt={"85%"}/>
              <CustomImage pt={"85%"}/>
               <CustomImage pt={"85%"}/>
                <CustomImage pt={"85%"}/>
             <CustomImage pt={"85%"}/>
              <CustomImage pt={"85%"}/>
              <CustomImage pt={"85%"}/>
               <CustomImage pt={"85%"}/>
                <CustomImage pt={"85%"}/> */}
         </div>
      </div>
      </>
  )
}

export default Hero;
