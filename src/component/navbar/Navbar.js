
import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import "./Navbar.scss"
//Navbar icon
import { BiX } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import Sidebar from '../sidebar/Sidebar';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { MdTagFaces } from "react-icons/md";


export default function Navbar() {
    const [showSidebar, setShowSidebar]=useState(false);
    const handleClick = () =>{
        setShowSidebar(!showSidebar)
    }
    //sidebar er jekothao click korle jeno sidebar off hoye jay tar function
    const closeSidebar = () =>{
        setShowSidebar(false)
    }
    //Navbar objects
    const links = [
        { name:"Home",
        path:"/",
        icon: <AiOutlineHome />
        },
        {name:"Recipes",
        path:"/recipe",
        icon: <AiOutlineBars />
        },
         { name:"About",
         path:"/about",
         icon: <MdTagFaces />
        }
    ]
//For active navbar we have to use useLocation
         const location = useLocation()
  return (<>
      <div className='navbar container'>
          <Link to="/" className='logo'>F<span>oo</span>disHub</Link>
          <div className="nav-links"> 
              {

              //map er ekhane () deya lagse.
                  links.map(link=>(
                      <Link to={link.path} key={link.name} className={location.pathname===link.path ? "active" : ""}>
                          {link.name}
                      </Link>
                   ))
                   
                }
          </div>
          <div className="icons" onClick={handleClick}>
                {showSidebar ?  (<BiX />) :(<GoThreeBars />)}
          </div>
      </div>

      {/* Sidebar here. amra links gulake props akare Sidebar e patahbo.*/}
      {showSidebar && <Sidebar links={links} close={closeSidebar}/>}
      {/* <Sidebar links={links}/> */}
      </>
  );
}
