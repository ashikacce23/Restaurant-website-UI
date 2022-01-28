import React from 'react';
import ChiefCard from '../cheifCard/ChiefCard';
import "./ChiefsSection.scss"

function ChiefsSection() {

    const chiefs = [
        {
            name:"Juan Carlos",
            img:"/img/top-chiefs/img_1.jpg",
            recipesCount:10,
            cuisine:"Mexican"
        },
         {
            name:"John Doe",
            img:"/img/top-chiefs/img_2.jpg",
            recipesCount:16,
            cuisine:"American"
        },
         {
            name:"Erich Maria",
            img:"/img/top-chiefs/img_3.jpg",
            recipesCount:7,
            cuisine:"Britishian"
        },
         {
            name:"Calros",
            img:"/img/top-chiefs/img_4.jpg",
            recipesCount:21,
            cuisine:"Etalian"
        },
         {
            name:"Crish Brown",
            img:"/img/top-chiefs/img_5.jpg",
            recipesCount:16,
            cuisine:"Russian"
        },
         {
            name:"Morgan",
            img:"/img/top-chiefs/img_6.jpg",
            recipesCount:14,
            cuisine:"African"
        }
    ]
    
    return (
      <>
      <div className="chief_section">
          <h1 className="title">Out Top Chiefs</h1>
          <div className="top_cheif_container">

              {
                  chiefs.map((chief,index)=>(
                      <ChiefCard chief={chief} key={index} />
                  ))
              }
              {/* <ChiefCard />
               <ChiefCard />
                <ChiefCard />
                 <ChiefCard />
                  <ChiefCard />
                   <ChiefCard /> */}
          </div>
      </div>
      </>
  )
}

export default ChiefsSection;
