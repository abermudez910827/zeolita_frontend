import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";

import "./About.css";
// import Modal from "../../hoc/Modal/Modal"
import InnerPage from "../../components/UI/innerPage/innerPage";
import Section from "../../components/UI/section/section";
import Person from "../../components/person/person";
import Loader from "../../components/Loader/Loader";
import * as actions from "../../store/actions";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

class About extends Component {
  state={
        modalShow:false,
        modalTitle:'',
        modalText:''
            }
  componentDidMount() {
    this.props.initPersons();
  }
    
  


  render() {
  
    const handleShow=()=>{
      this.setState({
      modalTitle:'Objeto Social',
      modalText:`
      La Empresa Geominera del Centro, perteneciente al Grupo Empresarial GeoMinSal, del Ministerio de la Industria Básica, brinda servicios mineros, reparación de plantas de procesamiento de minerales, salineras y otros servicios a las mismas en el territorio central comprendido en las provincias Sancti Spíritus, Villa Clara y Cienfuegos.
Todo esto está enmarcado en su objeto social que se describe en:
\n•	Brindar servicios de elaboración y ejecución de proyectos geotécnicos, geoquímicos, geomorfológicos, geofísicos, topográficos e hidrológicos para la determinación de yacimientos de minerales sólidos, metálicos y no metálicos así como aguas minero medicinales, en moneda nacional.
\n•	Producir, distribuir y comercializar de forma mayorista bienes terminados y materias primas de minerales metálicos y no metálicos, en moneda nacional y divisa.
\n•	Producir, distribuir y comercializar de forma mayorista productos industriales a partir de materias primas de los minerales tales como talco tocador, polvo facial, talco antimicótico, desodorante y polvo limpiador, en moneda nacional y divisa.
\n•	Brindar servicios mineros que contemplan las actividades de barrenación, voladura, extracción y acarreo de diferentes materias primas menas y otros materiales vinculados con la actividad minera, en moneda nacional y divisa.
\n•	Procesar y comercializar de forma mayorista fangos mineromedicinales, en moneda nacional y divisa.
\n•	Ofrecer servicios de laboratorios químicos, físicos mecánicos petrográficos y de otros tipos de ensayos químicos vinculados a la determinación de elementos y minerales para la industria minera y la geología, que incluye los diferentes tipos de análisis de resistencia de materiales y el comportamiento de la roca ante esfuerzos vinculados a la construcción, en moneda nacional y divisa.
\n•	Producir y comercializar de forma mayorista equipos tecnológicos, eléctricos y electrónicos, en moneda nacional y divisa.
\n•	Realizar estudios de consumo energético en moneda nacional y montaje de equipos de registros y control de potencia eléctrica, en moneda nacional y divisa.
\n•	Prestar servicios de reparación y mantenimiento a equipos tecnológicos, eléctricos, electrónicos, montaje de sistemas mecánicos y eléctricos afines a la actividad de la rama, en moneda nacional y divisa.
\n•	Prestar servicios de mantenimiento industrial y constructivo de obras menores, en moneda nacional y divisa.
\n•	Prestar servicios de estudios integrales vinculados a la actividad medio ambiental, en moneda nacional.
\n•	Prestar servicios de suministro de fuerza de trabajo al Grupo Empresarial Geominero-Salinero, GeoMinSal, en moneda nacional.
\n•	Prestar servicios de reparación y mantenimiento de equipos automotores; de transportación de cargas; de almacenamiento de mercancías; de alquiler de equipos mineros; de alojamiento no turístico y de alimentación asociada a éste, a los trabajadores y a entidades del Ministerio de la Industria Básica y de recreación a sus trabajadores, todos ellos en moneda nacional.
\n•	Comercializar de forma mayorista chatarra a las empresas de la Unión de Recuperación de Materias Primas, en moneda nacional y divisa.
\n•	Comercializar de forma mayorista productos ociosos y de lento movimiento, en moneda nacional.
\n\n
La situación actual de la Empresa esta en un lento desarrollo por el escaso mercado en divisa, pero tiene amplias perspectivas de desarrollo por la contratación de mercados que aportarán buenos dividendos en ésta moneda, para alcanzar los niveles de producción y servicios que se tuvieron en años anteriores ascendentes a los 9.9 millones de pesos, como promedio en los últimos tres años, proyectándonos para obtener una productividad de 11.1 millones de pesos para este año.
\n\n
La inversión como tal consiste en la reposición de tres camiones de volteo, para la unidad de Remedios, Geotecnología y Zeolita que son las encargadas de la transportación de minerales en la Empresa; (Ver modelo VI-7). Además de el incremento de una perforadora sobre esteras ROC- 460, la misma será usada para la explotación de las canteras de cemento Cienfuegos.

      `,
      modalShow:true})
      }

    const handleClose=()=>{
      this.setState({modalShow:false})

    }


    let persons = this.props.persons.map((person) => {
      return (
        <Person
          key={person.id}
          photo={person.photo}
          name={person.name}
          last_name={person.last_name}
          email={person.email}
          telephone={person.telephone}
          cargo={person.cargo}
        />
      );
    });

    if (this.props.errors) {
      persons = (
        <div className="col-lg-12 text-center">
          <h1>
            <span
              className="ion-sad-outline text-danger "
              aria-hidden="true"
            ></span>
          </h1>
          <h5 className="text-danger">Ocurrio un error al cargar los datos</h5>
        </div>
      );
    }

    if (this.props.loading) {
      persons = (
        <div className="col-lg-12">
          <Loader embebed />
        </div>
      );
    }

    return (
      <React.Fragment>
        <InnerPage
          title="Acerca de "
          description="La Empresa Geominera del Centro, perteneciente al Grupo Empresarial GeoMinSal, del Ministerio de la Industria Básica, brinda servicios mineros, reparación de plantas de procesamiento de minerales, salineras y otros servicios a las mismas en el territorio central comprendido en las provincias Sancti Spíritus, Villa Clara y Cienfuegos."
          img="url('images/portada2.jpg')"
        />
        <Section>
        <div className="half d-lg-flex d-block">
            <div
              className="image order-2"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: "url('images/industrial_hero_2.jpg')" }}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Objeto Social</h3>
              <p className="mb-5">
              Producir diferentes surtidos de zeolitas naturales con diferentes características 
              determinadas por la composición mineralógica, tamaños y formas de las partículas, 
              son comercializados tanto a granel como en distintos envases para muy variados usos
              en el mercado nacional y el exterior.
              </p>

              <p className="mb-5">
              Presta servicios de asesorías técnicas a clientes con 
              relación a la aplicación a los diferentes surtidos que 
              se producen en nuestra planta.
              </p>

              <p className="mb-5">
              Presta servicios de transportación de nuestros productos a los clientes principales.
              </p>

              <p>
              <Button className="btn btn-primary btn-sm px-3 py-2" onClick={handleShow}>
                  Leer más
                </Button>
              </p>
            </div>
          </div>
          <div className="half d-lg-flex d-block">
            <div
              className="image"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: "url('images/industrial_hero_1.jpg')" }}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Nuestra Misión</h3>
              <p className="mb-5">
              Comercializamos productos de zeolitas naturales y modificadas de las mas alta calidad y mas variados usos.
              </p>
            
            </div>
          </div>

          <div className="half d-lg-flex d-block">
            <div
              className="image order-2"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: "url('images/industrial_hero_2.jpg')" }}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Nuestra Visión</h3>
              <p className="mb-5">
              Convertirnos en el proveedor de preferencia de productos de zeolitas naturales 
              y modificadas en toda Cuba y la Cuenca del Caribe.
              </p>

              
            </div>
          </div>
        </Section>
        <Section section title="Conoce al equipo">
          <div className="row">{persons}</div>
        </Section>
        <Modal size="lg" show={this.state.modalShow} onHide={handleClose} backdrop="static" keyboard={false} Title="Prueba" >
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
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons.persons,
    loading: state.persons.loading,
    errors: state.persons.errors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
     initPersons: () => dispatch(actions.initPersons()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
