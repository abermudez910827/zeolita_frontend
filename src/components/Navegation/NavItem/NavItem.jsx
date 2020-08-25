import React from "react";
import { NavLink } from "react-router-dom";

const navItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" exact={props.exact} to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navItem;
