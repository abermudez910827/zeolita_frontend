import React from 'react';

const footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 mb-5">
            <h3>Acerca de </h3>
            <p className="mb-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. .
            </p>
          </div>
          <div className="col-md-6 mb-5 pl-md-5">
            <h3>Información de contacto</h3>
            <ul className="list-unstyled footer-link">
              <li className="d-block">
                <span className="d-block">Address:</span>
                <span>34 Street Name, City Name Here, United States</span>
              </li>
              <li className="d-block">
                <span className="d-block">Telephone:</span>
                <span>+1 242 4942 290</span>
              </li>
              <li className="d-block">
                <span className="d-block">Email:</span>
                <span>info@yourdomain.com</span>
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
