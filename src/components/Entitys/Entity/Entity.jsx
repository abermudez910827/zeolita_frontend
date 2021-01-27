import React from "react";
import { connect } from "react-redux";

import InnerPage from "../../../components/UI/innerPage/innerPage";
import Section from "../../../components/UI/section/section";
import Loader from "../../../components/UI/Loader/Loader";

const Entity =props=>{
  
  const entity=props.entitys.find(entity=>String(entity.nro) === props.match.params.nro)
  let page;
  if(entity){
     page= (
    <InnerPage
    title={entity.nombre}
    img={`url(${entity.foto_portada})`}
    />
       )
  }
  

  if (props.errors) {
    page=(
      <InnerPage
        title="Error al cargar la entidad"
      /> 
      )
      }

  if (props.loading) {
        page= (
         <InnerPage
         title="Cargando"
         loader={<div className="col-lg-12">
                    <Loader embebed />
                 </div>}
                 
                 />
            )
          }

        return(
              <React.Fragment>
                {page}
                <Section  section>
                
                <div className="container-fluid">
                  <div className="row no-gutters">
                  {/* {console.log(props.entity)} */}
                  </div>      
                </div>
                </Section>
                

              </React.Fragment>
        )
        

}

const mapStateToProps = (state) => {
  return {
    entitys: state.site.dataSite[0].entidades,
    loading: state.site.loading,
    errors: state.site.errors,
  };
};

export default connect(mapStateToProps)(Entity);
