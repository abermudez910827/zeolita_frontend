import React, { Component } from "react";
// import { divWithClassName  } from "react-bootstrap";
import Section from "../../components/UI/section/section";
import InnerPage from "../../components/UI/innerPage/innerPage";
import Loader from "../../components/Loader/Loader";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container/Container";
import Row from "../../components/UI/Row/Row";
import axios from "../../axios";
import { updateObject } from "../../utilities/utility";

class Contact extends Component {
  state = {
    contactForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Tu nombre",
        },
        divclass: "col-md-12 form-group",
        label: "Nombre",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      phone: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Tu Telefono",
        },
        divclass: "col-md-12 form-group",
        label: "Telefono",
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 8,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Tu correo",
        },
        divclass: "col-md-12 form-group",
        label: "Correo",
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      messaje: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Mensaje",
        },
        divclass: "col-md-12 form-group",
        label: "Mensaje",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false,
    dataSend: false,
  };

  sendHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.contactForm) {
      formData[formElementIdentifier] = this.state.contactForm[
        formElementIdentifier
      ].value;
    }

    axios
      .post("/api/contact/", formData)
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ dataSend: true });
        this.clearData();
        // this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  clearData() {
    for (let item in this.state.contactForm) {
      const updatedFormElement = updateObject(this.state.contactForm[item], {
        value: "",
        valid: false,
        touched: false,
      });
      const updatedcontactForm = updateObject(this.state.contactForm, {
        [item]: updatedFormElement,
      });
      this.setState({
        contactForm: updatedcontactForm,
        formIsValid: false,
      });
    }

  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.contactForm[inputIdentifier],
      {
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.contactForm[inputIdentifier].validation
        ),
        touched: true,
      }
    );

    const updatedcontactForm = updateObject(this.state.contactForm, {
      [inputIdentifier]: updatedFormElement,
    });
   

    let formIsValid = true;
    for (let inputIdentifier in updatedcontactForm) {
      formIsValid = updatedcontactForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      contactForm: updatedcontactForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.contactForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contactForm[key],
      });
    }
    let form = (
      <form onSubmit={this.sendHandler}>
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
                this.inputChangedHandler(event, formElement.id)
              }
            />
          </Row>
        ))}
        <Button
          classN="btn btn-primary px-3 py-3"
          disabled={!this.state.formIsValid}
        >
          Enviar
        </Button>
        {this.state.dataSend? <h5>Se envio el formulario </h5>: null}
      </form>
    );
    if (this.state.loading) {
      form = <Loader embebed />;
    }

    return (
      <React.Fragment>
        <InnerPage
          title="Contactenos"
          description="dejenos su opinion"
          img="url('images/industrial_hero_3.jpg')"
        />
        <Section section>
          <Container>
            <Row>
              <div className="col-md-6 mb-5 order-2">{form}</div>
              <div className="col-md-6 order-2 mb-5">
                <div className="row justify-content-right">
                  <div className="col-md-8 mx-auto contact-form-contact-info">
                    <p className="d-flex">
                      <span className="ion-ios-location icon mr-5"></span>
                      <span>Carretera de Maleza km dos y medio en la ciudad y municipio de Santa Clara, provincia de Villa Clara, Cuba</span>
                    </p>

                    <p className="d-flex">
                      <span className="ion-ios-telephone icon mr-5"></span>
                      <span>+53 42 459 202</span>
                    </p>

                    <p className="d-flex">
                      <span className="ion-android-mail icon mr-5"></span>
                      <span>geominera@geominera.cu</span>
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
}

export default Contact;
