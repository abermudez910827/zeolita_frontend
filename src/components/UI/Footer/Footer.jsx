import React from 'react';

const footer = props => {
  return (
    <footer className="site-footer bg-light" role="contentinfo">
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-6 mb-2">
            <h3>Acerca de </h3>
            <p className="mb-2">
            {props.entidad.descripcion}
            </p>
          </div>
          <div className="col-md-6 mb-2 pl-md-5">
            <h3>Información de contacto</h3>
            <ul className="list-unstyled footer-link">
              <li className="d-block">
                <span className="d-block">Dirección:</span>
                <span> {props.entidad.direccion}</span>
              </li>
              <li className="d-block">
                <span className="d-block">Telefóno:</span>
                <span> {props.entidad.telefono}</span>
              </li>
              <li className="d-block">
                <span className="d-block">Correo:</span>
                <span> {props.entidad.correo}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-md-center text-left">
            <p className="copyright">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> Todos
              los derechos reservados |{" "}
              <i className="ion-heart text-danger" aria-hidden="true"></i>{" "}
              Creado por{" "}
              <a
                href="mailto:abermudez10827@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Alejandro Bermúdez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
