import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utilities/utility";

const initialState = {
    dataSite: [ {
      "id": 1,
      "title": "",
      "banners": [
      ],
      "mensajes": [
      ],
      "entidad_pric": {
          "nro": 0,
          "nombre": "",
          "logo": "",
          "foto_portada": "",
          "descripcion": "",
          "objeto_social": "",
          "mision": "",
          "vision": "",
          "direccion": "",
          "telefono": "",
          "correo": "",
          "blogs": [],
          "articulos": [],
          "testimonios": [],
          "productos": [],
          "personas": [
          ],
          "servicios": []
      },
      "entidades": []
  }],
    loading: true,
    errors: null,
  };



  const fetchDataSiteFailed = (state, action) => {
    return updateObject(state, {
      errors: action.error,
      loading: false,
    });
  };

  const setDataSite = (state, action) => {
    return updateObject(state, {
      dataSite: action.dataSite,
      loading: false,
    });
  };

   
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_DATASITE:
        return setDataSite(state, action);
      case actionTypes.FETCH_DATASITE_FAILED:
        return fetchDataSiteFailed(state, action);
      default:
        return state;
    }
  };
  
  export default reducer;