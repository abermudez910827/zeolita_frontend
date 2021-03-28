import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Nav extends Component {

  state = {
    collapsedNav: false,
    
  };

 
    
  

  render() {
    let entitysLoaded = this.props.entidades.map((entity) => {
      return (
        {
          key:entity.nro,
          id:entity.nro,
          logo:entity.logo,
          name:entity.nombre,
          foto_portada:entity.foto_portada,
          
        }
       
      );
    });
    
    let entitysNav = (
      this.props.entidades.length > 0 ?
      <NavItem link="/entitys" dropdown={true} entitys={entitysLoaded}>Entidades</NavItem>
      :
      null
      // <NavItem link="/entitys">Entidades <span className="ion ion-information-circled text-secondary" alt="No existen entidades"></span></NavItem>
    );

   

    const handleNav=()=>{
      this.setState({
        ...this.state,
        collapsedNav: !this.state.collapsedNav,
      });
    }

    const classToggle = ["collapse", "navbar-collapse"];
    if (this.state.collapsedNav) {
      classToggle.push("show");
    }

    return (
      <header role="banner">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand " to="/">
              Geominera
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNav}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classToggle.join(" ")}>
              <ul className="navbar-nav pl-md-5 ml-auto">
                <NavItem link="/" exact>
                  Inicio
                </NavItem>
                <NavItem link="/about" >Acerca de</NavItem>
                {entitysNav}
                <NavItem link="/projects">Proyectos</NavItem>
                <NavItem link="/services">Servicios</NavItem>
                <NavItem link="/blogs">Blogs</NavItem>
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
  return {
    isAuthenticated: state.auth.token !== null,
    
  };
};

export default connect(mapStateToProps)(Nav);