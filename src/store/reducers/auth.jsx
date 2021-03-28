import * as actionTypes from '../actions/actionTypes';
import { updateObject, checkValidity } from '../../utilities/utility';

const initialState = {
    token: null,
    userId: null,
    isSignup: false,
    error: null,
    loading: false,
    authRedirectPath: '/',
    loginControls: {
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Correo",
          },
          value: "",
          error:"",
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Contraseña",
          },
          value: "",
          error:"",
          validation: {
            required: true,
            minLength: 6,
          },
          valid: false,
          touched: false,
        },
      },
    registerControls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Nombre",
        },
        divclass: "col-md-12 form-group",
        label: "Nombre",
        value: "",
        error:"",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      last_name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Apellidos",
        },
        divclass: "col-md-12 form-group",
        label: "Apellidos",
        value: "",
        error:"",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Correo",
        },
        value: "",
        error:"",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Contraseña",
        },
        value: "",
        error:"",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    opinionForm: {
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
    loadingSend: false,
    dataSend: false,
    sendError:null,
    opinion:null,

};

const authStart = ( state ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        userId: action.userId,
        isSignup: false,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};
const registerFail = (state, action) => {
    console.log(action.error)
    let control=state.loginControls
    if(state.isSignup)
      control=state.registerControls

      for (let error in action.error){
        control = {
            ...control,
            [error]: {
              ...control[error],
              error:action.error[error]
            },
          };  
      }
    

    if(state.isSignup){ 
     return updateObject(state, { loading: false, registerControls: control }); 
    }else{
     return updateObject(state, { loading: false, loginControls: control });
    }   

    // return updateObject( state, {
    //     error: action.error,
    //     loading: false
    // });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const inputOpinionChangedHandler = (state, action) => {
    let control=state.opinionForm
    

    const updatedControls = {
      ...control,
      [action.controlName]: {
        ...control[action.controlName],
        value: action.event.target.value,
        valid: checkValidity(
          action.event.target.value,
          control[action.controlName].validation
        ),
        touched: true,
      },
    };

    
        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
          formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
        

     return updateObject(state, { opinionForm: updatedControls,formIsValid: formIsValid, }); 
    
  };

  const inputChangedHandler = (state, action) => {
    let control=state.loginControls
    if(state.isSignup)
      control=state.registerControls

    const updatedControls = {
      ...control,
      [action.controlName]: {
        ...control[action.controlName],
        value: action.event.target.value,
        valid: checkValidity(
          action.event.target.value,
          control[action.controlName].validation
        ),
        touched: true,
      },
    };

    if(state.isSignup){ 
     return updateObject(state, { registerControls: updatedControls }); 
    }else{
     return updateObject(state, { loginControls: updatedControls });
    }   
    
  };

const clearData=(state)=>{
  return updateObject(state, initialState)
}
 
  
const switchAuthModeHandler = (state, action) => {
    return updateObject(state, { isSignup: !state.isSignup })
};

const opinionStart = ( state ) => {
  return updateObject( state, { sendError: null, loadingSend: true } );
};

const editOpinion = ( state ) => {
  return updateObject( state, {
    dataSend: false,
    opinionForm : {
      ...state.opinionForm,
      messaje:{
        ...state.opinionForm.messaje,
        value: state.opinion.data.messaje
    }}
  } );
};

const setOpinion = (state, action) => {
  return updateObject(state, {
    opinion : {data:action.opinion,loadingOpinion:false,error:null},
    dataSend : true,
    loadingSend: false
  });
};


const fetchOpinionFailed = (state, action) => {
  return updateObject(state, {
    opinion : {data:null,loadingOpinion:false,error:action.error},
  });
};

const sendOpinionFailed = (state, action) => {
  return updateObject(state, {
    sendError :action.error,
    dataSend : false,
    loadingSend: false
  });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.CLEAR_DATA: return clearData(state, action);
        case actionTypes.SWITCH_AUTH_MODE_HANDLER: return switchAuthModeHandler(state, action);
        case actionTypes.OPINION_START: return opinionStart(state, action);
        case actionTypes.EDIT_OPINION: return editOpinion(state, action);
        case actionTypes.INPUT_OPINION_CHANGED_HANDLER: return inputOpinionChangedHandler(state, action);
        case actionTypes.INPUT_CHANGED_HANDLER: return inputChangedHandler(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        case actionTypes.SET_OPINION:
          return setOpinion(state, action);
        case actionTypes.SEND_OPINION_FAILED:
          return sendOpinionFailed(state, action);
      case actionTypes.FETCH_OPINION_FAILED:
        return fetchOpinionFailed(state, action);
      
        default:
            return state;
    }
};

export default reducer;