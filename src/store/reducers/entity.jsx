import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utilities/utility";

const initialState = {
    entitys: [],
    selectEntity:{
              key:0,
              id:0,
              logo:'',
              name:'',
              foto_portada:'',
              objeto_social:'',
              mision:'',
              vision:'',
              descripcion:'',
              correo:'',
              telefono:'',
              direccion:'',
            },
    loading: true,
    errors: null,
  };



  const fetchEntitysFailed = (state, action) => {
    return updateObject(state, {
      errors: action.error,
      loading: false,
    });
  };

  const setEntitys = (state, action) => {
    return updateObject(state, {
      entitys: action.entitys,
      loading: false,
    });
  };

  const setSelectEntity = (state, nro) => {
      return updateObject(state, {
        selectEntity: state.entitys.find(entity=>String(entity.nro) === nro.nro),
      });
    };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_ENTITYS:
        return setEntitys(state, action);
      case actionTypes.SET_SELECT_ENTITY:
        return setSelectEntity(state, action);
      case actionTypes.FETCH_ENTITYS_FAILED:
        return fetchEntitysFailed(state, action);
      default:
        return state;
    }
  };
  
  export default reducer;