import React, { useState } from "react";
import NavItem from "./NavItem/NavItem";

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
          <a className="navbar-brand " href="index.html">
            Industrial
          </a>
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
              <NavItem link="/about" exact>
                Acerca de
              </NavItem>
              <NavItem link="/projects" exact>
                Proyectos
              </NavItem>
              <NavItem link="/services" exact>
                Servicios
              </NavItem>
              <NavItem link="/contact" exact>
                Contacto
              </NavItem>

            </ul>
            <div className="navbar-nav ml-auto"></div>
          </div>
        </div>
      </nav>
    </header>
  );
});

export default nav;
