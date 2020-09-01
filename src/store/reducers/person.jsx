import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utilities/utility";

const initialState = {
  persons: [],
  cargos: [],
  loading: true,
  errors: null,
};

const setPersons = (state, action) => {
  return updateObject(state, {
    persons: action.persons,
    loading: false,
  });
};

const setCargos = (state, action) => {
  return updateObject(state, { cargos: action.cargos });
};

const fetchPersonsFailed = (state, action) => {
  return updateObject(state, {
    errors: action.error,
    loading: false,
  });
};

const fetchCargosFailed = (state, action) => {
  return updateObject(state, {
    errors: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PERSONS:
      return setPersons(state, action);
    case actionTypes.SET_CARGOS:
      return setCargos(state, action);
    case actionTypes.FETCH_PERSONS_FAILED:
      return fetchPersonsFailed(state, action);
    case actionTypes.FETCH_CARGOS_FAILED:
      return fetchCargosFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
