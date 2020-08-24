import React, { Component } from "react";
import Section from "../../components/UI/section/section";
import InnerPage from "../../components/UI/innerPage/innerPage";
import Loader from "../../components/Loader/Loader";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import axios from 'axios'

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
          maxLength:8,
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
      message: {
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
    const contact = {
      contactData: formData,
    };
    axios
      .post("/contact", contact)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };


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
    const updatedcontactForm = {
      ...this.state.contactForm,
    };
    const updatedFormElement = {
      ...updatedcontactForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedcontactForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedcontactForm) {
      formIsValid = updatedcontactForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ contactForm: updatedcontactForm, formIsValid: formIsValid });
  };

  render() {
    const styleImg = {
      backgroundImage: "url('images/industrial_hero_1.jpg')",
    };

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
          <div key={formElement.id} className="row">
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
          </div>
        ))}
        <Button
          classN="btn btn-primary px-3 py-3"
          disabled={!this.state.formIsValid}
        >
          Enviar
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Loader embebed/>;
    }

    return (
      <React.Fragment>
        <InnerPage
          title="Contactenos"
          description="dejenos su opinion"
          img="url('images/industrial_hero_3.jpg')"
        />
        <Section>
          <div className="row">
            <div className="col-md-6 mb-5 order-2">
              {form}
            </div>
            <div className="col-md-6 order-2 mb-5">
              <div className="row justify-content-right">
                <div className="col-md-8 mx-auto contact-form-contact-info">
                  <p className="d-flex">
                    <span className="ion-ios-location icon mr-5"></span>
                    <span>34 Street Name, City Name Here, United States</span>
                  </p>

                  <p className="d-flex">
                    <span className="ion-ios-telephone icon mr-5"></span>
                    <span>+1 242 4942 290</span>
                  </p>

                  <p className="d-flex">
                    <span className="ion-android-mail icon mr-5"></span>
                    <span>info@yourdomain.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </React.Fragment>
    );
  }
}

export default Contact;
