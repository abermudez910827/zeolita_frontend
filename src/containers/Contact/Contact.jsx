import React from "react";
// import { divWithClassName  } from "react-bootstrap";
import Section from "../../components/UI/section/section";
import InnerPage from "../../components/UI/innerPage/innerPage";
import Loader from "../../components/UI/Loader/Loader";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container/Container";
import Row from "../../components/UI/Row/Row";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Contact =props=> {
  
  const  sendHandler = (event) => {
    event.preventDefault();
    props.sendOpinion(props.opinionForm);
    
  };

    const formElementsArray = [];
    for (let key in props.opinionForm) {
      formElementsArray.push({
        id: key,
        config: props.opinionForm[key],
      });
    }
    let form = (
      
        props.opinion.data !== null && props.dataSend ? (

          <div className="row justify-content-right">
          <div className="col-md-8 mx-auto ">
            <div className="text-center">
            <h1> <span className="text-primary display-3 ion-chatbubble-working icon"></span></h1>
            <h5 className="text-primary">Esta fue su opinion de hoy </h5>
            <p className="d-grid">
              <span>&ldquo; {props.opinion.data.messaje}  &rdquo;</span>
            </p>
              <button className="btn btn-primary" onClick={()=>props.editOpinion()}><span className="ion-edit icon"></span>Editarla</button>
             {/* {props.dataSend? <h5>Formulario enviado</h5>: null} */}
        </div>
          </div>
        </div>

          
        ): 
      (<React.Fragment>
        <h3>Dejenos su Opinion</h3>
      <form onSubmit={sendHandler}>
        {formElementsArray.map((formElement) => (
          <Row key={formElement.id}>
            <Input
              id={formElement.id}
              label={formElement.config.label}
              divclass={formElement.config.divclass}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) =>
                props.inputChangedHandler(event, formElement.id)
              }
            />
          </Row>
        ))}
        <Button
          classN="btn btn-primary px-3 py-3"
          disabled={!props.formIsValid}
        >
          Enviar
        </Button>
        
        {props.sendError? <h5 className="text-danger">Ocurrio un error al enviar el formulario </h5>: null}
      </form>
      </React.Fragment>
     ) 

    );
    if (props.loadingSend) {
      form = <Loader embebed />;
    }

    return (
      <React.Fragment>
        <InnerPage
          title="Contactenos"
          description="dejenos su opinion"
          img={`url(${props.entidad.foto_portada})`}
        />
        <Section section>
          <Container>
            <Row>
              <div className="col-md-6 mb-5 order-2">{form}</div>
              <div className="col-md-6 order-2 mb-5">
                <div className="row justify-content-right">
                  <div className="col-md-8 mx-auto ">
                    <p className="d-flex">
                      <span className="ion-ios-location icon mr-5"></span>
                      <span> {props.entidad.direccion}</span>
                    </p>

                    <p className="d-flex">
                      <span className="ion-ios-telephone icon mr-5"></span>
                      <span> {props.entidad.telefono}</span>
                    </p>

                    <p className="d-flex">
                      <span className="ion-android-mail icon mr-5"></span>
                      <span> {props.entidad.correo}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </Section>
      </React.Fragment>
    );
  
}

const mapStateToProps = (props) => {
  return {
    opinion: props.auth.opinion,
    formIsValid: props.auth.formIsValid,
    loadingSend: props.auth.loadingSend,
    dataSend: props.auth.dataSend,
    sendError: props.auth.sendError,
    opinionForm: props.auth.opinionForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    inputChangedHandler: (event, controlName)=>dispatch(actions.inputOpinionChangedHandler(event, controlName)),
    sendOpinion:(opinionForm)=>dispatch(actions.sendOpinion(opinionForm)),
    editOpinion:()=>dispatch(actions.editOpinion()),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact); 
