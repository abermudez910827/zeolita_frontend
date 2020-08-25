import React, { useState } from "react";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";

const nav = React.memo((props) => {
  const inputState = useState({ collapsedNav: false });

  const classToggle = ["collapse", "navbar-collapse"];
  if (inputState[0].collapsedNav) {
    classToggle.push("show");
  }

  return (
    <header role="banner">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            UEB Zeolita
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={(event) => {
              inputState[1]({ collapsedNav: !inputState[0].collapsedNav });
            }}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classToggle.join(" ")}>
            <ul className="navbar-nav pl-md-5 ml-auto">
              <NavItem link="/" exact>
                Inicio
              </NavItem>
              <NavItem link="/about" >
                Acerca de
              </NavItem>
              <NavItem link="/projects" >
                Proyectos
              </NavItem>
              <NavItem link="/services" >
                Servicios
              </NavItem>
              <NavItem link="/contact" >
                Contacto
              </NavItem>
            </ul>
            <div className="navbar-nav ml-auto">
              <NavItem link="/login">Admin</NavItem>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});

export default nav;
