import axios from "../../axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
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

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      username: email,
      password: password,
    };
    let url = "api/profiles/";
    if (!isSignup) {
      url = "api/login/";
    }
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(authSuccess(response.data.token));
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

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
      }
    }
  };
};
