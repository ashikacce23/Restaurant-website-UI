import React from 'react';
import "../sidebar/Sidebar.scss"
import {Link, useLocation} from 'react-router-dom'
//navbar er active class dekhanor jonno useLocation use kora hoy.

//likns gulake ekhane props akare accept korbo.
function Sidebar({links, close}) {
    const location = useLocation();
  return (
      <div className="sidebar" onClick={close}>
        
          {
              links.map((link)=>(
                <Link to={link.path} key={link.name} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"}>
                      {link.icon}
                      {link.name}
                </Link>
                //   <Link to={link.path} key={link.name} className='sidebar-link'>
                //       {link.icon}
                //       {link.name}
                //     </Link>
               
              ))
          }
      </div>
  )
}
export default Sidebar;

 