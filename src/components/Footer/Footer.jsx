import React from 'react';

const footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 mb-5">
            <h3>Acerca de </h3>
            <p className="mb-5">
            La Empresa Geominera del Centro, perteneciente al Grupo Empresarial GeoMinSal, 
            del Ministerio de la Industria Básica, brinda servicios mineros, reparación de
             plantas de procesamiento de minerales, salineras y otros servicios a las mismas 
             en el territorio central comprendido en las provincias Sancti Spíritus, Villa Clara y Cienfuegos.
            </p>
          </div>
          <div className="col-md-6 mb-5 pl-md-5">
            <h3>Información de contacto</h3>
            <ul className="list-unstyled footer-link">
              <li className="d-block">
                <span className="d-block">Dirección:</span>
                <span>Carretera de Maleza km dos y medio en la ciudad y municipio de Santa Clara, provincia de Villa Clara, Cuba</span>
              </li>
              <li className="d-block">
                <span className="d-block">Telefóno:</span>
                <span>+53 42 459 202</span>
              </li>
              <li className="d-block">
                <span className="d-block">Correo:</span>
                <span>geominera@geominera.cu</span>
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
