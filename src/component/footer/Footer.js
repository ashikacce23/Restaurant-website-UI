import React from 'react';
import "./Footer.scss"

function Footer() {
  return(
      <>
      <div className="footer">
          <div className="footer_section">
              <p className="title">FoodishesHub.com</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam cumque. Quisquam minima.</p>
              <p className='copy'>&copy; 2022 | All Rights Reserved</p>
          </div>
            <div className="footer_section">
              <p className="title">Contact Us</p>
              <p>foodishes@gmail.com</p>
              <p>+88 01744 528351</p>
              <p>2345, Street - Rangpur</p>
          </div>
            <div className="footer_section">
              <p className="title">Socials</p>
             <p className='social'>Facebook</p>
             <p className='social'>Twitter</p>
             <p className='social'>Instagram</p>
          </div>
      </div>
      </>
  )
}

export default Footer;
