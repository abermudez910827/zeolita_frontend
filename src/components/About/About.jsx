import React from "react";
// import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
// import ModalHeader from "react-bootstrap/esm/ModalHeader";

import "./About.css";
import InnerPage from "../UI/innerPage/innerPage";
import Section from "../UI/section/section";
import Personas from "../UI/Personas/Personas";

const About = props=> {
  

    return (
      <React.Fragment>
        <InnerPage
          title="Acerca de "
          description={props.entidad.descripcion}
          img={`url(${props.entidad.foto_portada})`}
        />
        <Section>
        <div className="half d-lg-flex d-block">
            <div
              className="image order-2"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: `url('${props.entidad.photo_objeto_social}') ` }}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Objeto Social</h3>
              <p className="mb-5">
              {props.entidad.objeto_social}
              </p>

              <p>
              <a href="/" className="btn btn-primary btn-sm px-3 py-2" >
                  Leer más
                </a>
              </p>
            </div>
          </div>
          <div className="half d-lg-flex d-block">
            <div
              className="image"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: `url('${props.entidad.photo_mision}') ` }}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Nuestra Misión</h3>
              <p className="mb-5">
              {props.entidad.mision}
              </p>
            
            </div>
          </div>

          <div className="half d-lg-flex d-block">
            <div
              className="image order-2"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: `url('${props.entidad.photo_vision}') `}}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Nuestra Visión</h3>
              <p className="mb-5">
              {props.entidad.vision}
              </p>

              
            </div>
          </div>
        </Section>
        <Section section title="Conoce al equipo">
          <div className="row"><Personas personas={props.entidad.personas} /></div>
        </Section>
        {/* <Modal size="lg" show={this.state.modalShow} onHide={handleClose} backdrop="static" keyboard={false} Title="Prueba" >
            <ModalHeader closeButton>
              <ModalTitle>{this.state.modalTitle}</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>
                {this.state.modalText}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </ModalFooter>
        </Modal> */}
      </React.Fragment>
    );
  }


 
export default About;
