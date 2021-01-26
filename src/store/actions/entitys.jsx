import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const initEntitys = () => {
    return (dispatch) => {
        axios
            .get("/api/entidad")
            .then((response) => {
              
              const entitys = response.data.map((entity) => {
                //   todo reemplazar con personas
                // const cargoId = entity.cargo;
                const mapedEntity = entity;
                // const cargoName = cargos.filter(
                //   (cargo) => cargo.id === cargoId
                // )[0].name;
                // mapedEntity.cargo = cargoName;
                return mapedEntity;
              });
              // console.log(entitys)
              dispatch(setEntitys(entitys));
            })
            .catch((error) => {
              console.log(error);
              dispatch(fetchEntitysFailed(error));
            });
       
    };
  };

  export const getEntity= (nro)=>{
   
    return (dispatch) => dispatch(setSelectEntity(nro));
    
  }
  
  export const setSelectEntity = (nro) => {
    return {
      type: actionTypes.SET_SELECT_ENTITY,
      nro: nro,
    };
  };

  export const setEntitys = (entitys) => {
    return {
      type: actionTypes.SET_ENTITYS,
      entitys: entitys,
    };
  };

  export const fetchEntitysFailed = (error) => {
    return {
      type: actionTypes.FETCH_ENTITYS_FAILED,
      error: error,
    };
  };