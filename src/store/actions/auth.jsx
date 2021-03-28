import axios from "../../axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const registerFail = (error) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    error: error,
  };
};

export const clearData = () => {
  return {
    type: actionTypes.CLEAR_DATA,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  // localStorage.removeItem('expirationDate');
  // localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime * 1000);
//     };
// };

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      username: email,
      password: password,
    };
      
    const url = "api/login/";
    
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem("userId", response.data.token);
        dispatch(authSuccess(response.data.token));
        dispatch(fetchOpinion())
      })
      .catch((err) => {

        if(err.response){
          if(err.response.data.non_field_errors){
          dispatch(authFail(err.response.data.non_field_errors[0]));
        }else if(err.response.data.detail){
          dispatch(authFail(err.response.data.detail));

        }

        }else{
            dispatch(authFail("Ocurrio un error al tratar de contactar con el servidor"));
          }
      });
  };
};

export const register = (name,last_name,email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      name:name,
      last_name:last_name,
      password: password,
    };
    let url = "api/profiles/";
    
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(authSuccess(response.data.token));
      })
      .catch((err) => {
            // console.log(err.response.data)
            dispatch(registerFail(err.response.data));
      
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const inputChangedHandler = (event, controlName) => {
  
  return {
    type: actionTypes.INPUT_CHANGED_HANDLER,
    event,
    controlName
  };
};

export const inputOpinionChangedHandler = (event, controlName) => {
  
  return {
    type: actionTypes.INPUT_OPINION_CHANGED_HANDLER,
    event,
    controlName
  };
};

export const switchAuthModeHandler = () => {
  
  return {
    type: actionTypes.SWITCH_AUTH_MODE_HANDLER,
    
  };
};

export const opinionStart = () => {
  return {
    type: actionTypes.OPINION_START,
  };
};

export const editOpinion = () => {
  return {
    type: actionTypes.EDIT_OPINION,
  };
};

export const fetchOpinion=()=>{
  return(dispatch) =>{
    axios
        .get("/api/opinion/miopinion/")
        .then((response) => {
          dispatch(setOpinion(response.data.result));
        })
        .catch((error) => {
          dispatch(fetchOpinionFailed(error));
        });
  }
}

export const sendOpinion=(opinionForm)=>{
  return(dispatch) =>{
           dispatch(opinionStart());
            const formData = {};
            for (let formElementIdentifier in opinionForm) {
              formData[formElementIdentifier] = opinionForm[
                formElementIdentifier
              ].value;
            }

            axios
              .post("/api/opinion/opinar/", formData)
              .then((response) => {
                dispatch(setOpinion(response.data.result));

              })
              .catch((error) => {
                dispatch(sendOpinionFailed(error));

              });
  }
}

export const authCheckState = () => {
  return dispatch => {
      const token = localStorage.getItem('token');
      if (!token) {
          dispatch(logout());
      } else {
              dispatch(authSuccess(token));
              dispatch(fetchOpinion())

          }   
      }
  };


export const setOpinion = (opinion) => {
  return {
    type: actionTypes.SET_OPINION,
    opinion: opinion,
  };
};

export const fetchOpinionFailed = (error) => {
  return {
    type: actionTypes.FETCH_OPINION_FAILED,
    error: error,
  };
};
export const sendOpinionFailed = (error) => {
  return {
    type: actionTypes.SEND_OPINION_FAILED,
    error: error,
  };
};
