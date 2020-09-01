import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const initPersons = () => {
  return (dispatch) => {
    axios
      .get("/api/persons/cargos")
      .then((response) => {
        console.log(response);
        const cargos = response.data;
        dispatch(setCargos(response.data));
        axios
          .get("/api/persons/persons")
          .then((response) => {
            const persons = response.data.map((person) => {
              const cargoId = person.cargo;
              const mapedPerson = person;
              const cargoName = cargos.filter(
                (cargo) => cargo.id === cargoId
              )[0].name;
              mapedPerson.cargo = cargoName;
              return mapedPerson;
            });
            dispatch(setPersons(persons));
          })
          .catch((error) => {
            console.log(error);
            dispatch(fetchCargosFailed(error));
          });
      })
      .catch((error) => {
        dispatch(fetchPersonsFailed(error));
      });
  };
};

export const setPersons = (persons) => {
  return {
    type: actionTypes.SET_PERSONS,
    persons: persons,
  };
};
export const fetchPersonsFailed = (error) => {
  return {
    type: actionTypes.FETCH_PERSONS_FAILED,
    error: error,
  };
};

export const setCargos = (cargos) => {
  return {
    type: actionTypes.SET_CARGOS,
    cargos: cargos,
  };
};

export const fetchCargosFailed = (error) => {
  return {
    type: actionTypes.FETCH_CARGOS_FAILED,
    error: error,
  };
};
