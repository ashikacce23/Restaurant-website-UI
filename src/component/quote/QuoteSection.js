import React from 'react';
import "./QuoteSection.scss"
import { AiOutlineEdit } from "react-icons/ai";


function QuoteSection() {
  return (
      <>
      <div className="quote">
          <p className="quote_text">
              < AiOutlineEdit  className='write_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing 
              elit. Enim natus vel blanditiis sunt iure. Rerum, 
              praesentium ea aliquid ab quas nisi aspernatur vero 
              quam exercitationem pariatur eaque facilis ratione 
              recusandae hic earum alias officiis voluptates.
          </p>
          <p className='quote_author'>- Ashikur Rahman Ashik</p>
      </div>
      </>
  )
}

export default QuoteSection;
