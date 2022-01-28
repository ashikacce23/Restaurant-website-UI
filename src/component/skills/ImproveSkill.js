import React from 'react';
import "./ImproveSkills.scss"

function ImproveSkill() {
    const lists = [ 
         "Learn new recipies",
          "Experiment with food",
          "Write your won recipies",
           "Know nutrition facts",
          "Get coocking tips",
           "Get ranked"
    ]
  return (
      <>
      <div className="improve_skill">
          <div className="col1">
              <img src="./img/gallery/img_10.jpg" alt="thumbnail" />
          </div>
          <div className="col2">
              <h1>Improve Your Culinary Skills</h1>
              {
                  lists.map((list,index)=>(
                      <p className='skill_item' key={index}> {list} </p>
                  ))
              }
              <button className='btn'>Sugnup now</button>
          </div>
      </div>
      </>
  );
}

export default ImproveSkill;
