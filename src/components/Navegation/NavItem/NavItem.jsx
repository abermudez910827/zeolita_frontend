import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = props => {

const [expandNav,setExpandNav]= useState(false)

  const handleNav=()=>{
    setExpandNav(!expandNav)
  }

  const classToggle = ["dropdown-menu"];
  if (expandNav) {
    classToggle.push("show");
  }

  const classNavLink = ["nav-link"];
  if (props.disabled) {
    classNavLink.push("text-danger");
  }
  
   let navlink = (<li className="nav-item">
          <NavLink className={classNavLink.join(' ')} disabled={true} exact={props.exact} to={props.link}>
            {props.children}
          </NavLink>
          </li>)

          if(props.dropdown === true ){
              const entitys=props.entitys
            navlink= ( <li className="nav-item dropdown" onMouseEnter={handleNav}>
            <NavLink className="nav-link" exact={props.exact} to={props.link} >
              {props.children}
            </NavLink>
            
                      <div className={classToggle.join(' ')} onMouseLeave={handleNav} aria-labelledby="dropdown04">
                      { entitys.map( entity =>{
                        return (  <NavLink key={entity.id} className="dropdown-item" to={props.link+'/'+entity.id} >
                          {entity.name}
                        </NavLink>)

                      }) }
                      </div>
                    </li>)
          }

  return (
    navlink
  );
};

export default NavItem;
