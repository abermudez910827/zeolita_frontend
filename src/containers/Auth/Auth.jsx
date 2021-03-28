import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {Button} from "react-bootstrap"
import Input from "../../components/UI/Input/Input";
// import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import Section from "../../components/UI/section/section";
import * as actions from "../../store/actions/index";

class Auth extends Component {
 
  componentDidMount() {
    this.props.clearData()
    if (this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirectPath();
    }
  }



  submitHandler = (event) => {
    event.preventDefault();
    this.props.isSignup? 
    this.props.onResgister(
      this.props.registerControls.name.value,
      this.props.registerControls.last_name.value,
      this.props.registerControls.email.value,
      this.props.registerControls.password.value,
    )
    :
    this.props.onAuth(
      this.props.loginControls.email.value,
      this.props.loginControls.password.value,
    )
  };


  render() {
    const formElementsArray = [];
    if(this.props.isSignup){
      for (let key in this.props.registerControls) {
        formElementsArray.push({
          id: key,
          config: this.props.registerControls[key],
        });
      }
    }else{
      for (let key in this.props.loginControls) {
        formElementsArray.push({
          id: key,
          config: this.props.loginControls[key],
        });
      }
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        error={formElement.config.error}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.props.inputChangedHandler(event, formElement.id)}
      />
    ));


    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <React.Fragment>
      <div className="inner-page">
        <div className="slider-item" style={{    height: 'calc(257vh - 234px)'}}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center fadeInUp element-animated">
              <div className="col-md-8 text-center col-sm-12 pt-5">
                <h1 className="pt-5">
                  <span>{
                   !this.props.loading?
                   
                   this.props.isSignup ? "Registrar" : "Acceder"
                  :"Espere"
                  }</span>
                </h1>
                
                <Section>
        {this.props.token ? (
          <div>Token: {this.props.token}</div>
        ) : (
          !this.props.loading?
          <div className="form">
            {authRedirect}
            <Button onClick={()=>this.props.switchAuthModeHandler()} variant="danger">
              Cambiar a {this.props.isSignup ? "Acceder" : "Registrar" }
            </Button>
            <form onSubmit={this.submitHandler}>
              {form}
              {/* {errorMessage} */}

              <br></br>
              <Button onClick={this.submitHandler} variant="success">{this.props.isSignup ? "Registrar" : "Acceder"}</Button>
            </form>
            
          </div>:
           <div className="col-lg-12">
           <Loader embebed />
         </div>
          
        )}
      </Section>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      

      </React.Fragment>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    loading: props.auth.loading,
    error: props.auth.error,
    isSignup: props.auth.isSignup,
    loginControls:props.auth.loginControls,
    registerControls:props.auth.registerControls,
    isAuthenticated: props.auth.token !== null,
    authRedirectPath: props.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password)),
    onResgister:(email,name,last_name, password)=>
      dispatch(actions.register(email,name,last_name, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
    inputChangedHandler: (event, controlName)=>dispatch(actions.inputChangedHandler(event, controlName)),
    switchAuthModeHandler:()=>dispatch(actions.switchAuthModeHandler()),
    clearData:()=>dispatch(actions.clearData()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
