import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const initDataSite = () => {
    return (dispatch) => {
        axios
            .get("/api/site")
            .then((response) => {
              // console.log(response.data)
              dispatch(setDataSite(response.data));
            })
            .catch((error) => {
              console.log(error);
              dispatch(fetchDataSiteFailed(error));
            });
       
    };
  };


  export const setDataSite = (dataSite) => {
    return {
      type: actionTypes.SET_DATASITE,
      dataSite: dataSite,
    };
  };

  export const fetchDataSiteFailed = (error) => {
    return {
      type: actionTypes.FETCH_DATASITE_FAILED,
      error: error,
    };
  };