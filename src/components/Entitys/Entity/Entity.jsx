import React ,{Component}from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import InnerPage from "../../../components/UI/innerPage/innerPage";
import Section from "../../../components/UI/section/section";
import Loader from "../../../components/Loader/Loader";

class Entity extends Component{

  componentDidUpdate(){
    if (!this.props.loading){
      this.props.getEntity(this.props.match.params.nro)}
  }
 
  componentDidMount(){
    if (!this.props.loading){
      this.props.getEntity(this.props.match.params.nro)}
  }

  render(){
    
  
  // const entity=entitys.find(entity=>String(entity.nro) === match.params.nro)
  let page;
  if(this.props.entity){
     page= (
    <InnerPage
    title={this.props.entity.nombre}
    img={`url(${this.props.entity.foto_portada})`}
    />
       )
  }
  

  if (this.props.errors) {
    page=(
      <InnerPage
        title="Error al cargar la entidad"
      /> 
      )
      }

  if (this.props.loading) {
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
                  {/* {console.log(this.props.entity)} */}
                  </div>      
                </div>
                </Section>
                

              </React.Fragment>
        )
        }

}

const mapStateToProps = (state) => {
  return {
    entity: state.entitys.selectEntity,
    loading: state.entitys.loading,
    errors: state.entitys.errors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getEntity: (nro) => dispatch(actions.getEntity(nro)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Entity);

// let entitysLoaded = this.props.entitys.map((entity) => {
//     return (
//       {
//         key:entity.nro,
//         id:entity.nro,
//         logo:entity.logo,
//         name:entity.nombre,
//         foto_portada:entity.foto_portada,
//         objeto_social:entity.objeto_social,
//         mision:entity.mision,
//         vision:entity.vision,
//         descripcion:entity.descripcion,
//         correo:entity.correo,
//         telefono:entity.telefono,
//         direccion:entity.direccion,
//       }
     
//     );
//   });