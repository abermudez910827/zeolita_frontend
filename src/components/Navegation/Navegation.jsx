import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  state = {
    collapsedNav: false,
  };

  render() {
    const classToggle = ["collapse", "navbar-collapse"];
    if (this.state.collapsedNav) {
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
                this.setState({
                  ...this.state,
                  collapsedNav: !this.state.collapsedNav,
                });
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
                <NavItem link="/about">Acerca de</NavItem>
                <NavItem link="/projects">Proyectos</NavItem>
                <NavItem link="/services">Servicios</NavItem>
                <NavItem link="/contact">Contacto</NavItem>
              </ul>
              <div className="navbar-nav ml-auto">
                {this.props.isAuthenticated ? (
                  <NavItem link="/logout">Logout</NavItem>
                ) : (
                  <NavItem link="/login">Login</NavItem>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.token !== null };
};


export default connect(mapStateToProps, null)(Nav);
