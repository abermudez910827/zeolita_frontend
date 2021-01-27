import React from "react";
import { connect } from "react-redux";
import InnerPage from "../../components/UI/innerPage/innerPage";
import Section from "../../components/UI/section/section";
import Loader from "../../components/UI/Loader/Loader";
import Thumbnail from "../../components/UI/thumbnail/linkThumbnail"

const Entitys = (props) =>{

  let entitys = props.entitys.map((entity) => {
    return (
      <Thumbnail key={entity.nro} url={entity.nro} title={entity.nombre} img={entity.foto_portada}/>
           
    );
  });

  let page= (
    <InnerPage
    title="Entidades"
    img="url('../images/portada2.jpg')"
    />
       )

  if (props.errors) {
    page=(
      <InnerPage
        title="Error al cargar las entidades"
        img="url('../images/portada2.jpg')"
      /> 
      )
    entitys = (
      <div className="col-lg-12 text-center">
        <h1>
          <span
            className="ion-sad-outline text-danger "
            aria-hidden="true"
          ></span>
        </h1>
        <h5 className="text-danger">Ocurrio un error al cargar los datos</h5>
      </div>
    );
  }

 

  if (props.loading) {
     page= (
      <InnerPage
      title="Entidades"
      loader={<div className="col-lg-12">
      <Loader embebed />
    </div>}
      img="url('images/portada2.jpg')"
      />
         )

    // entitys = (
    //   <div className="col-lg-12">
    //     <Loader embebed />
    //   </div>
    // );
  }

    
        return(
            <React.Fragment>
              {page}
              <Section  section>
              
              <div className="container-fluid">
                <div className="row no-gutters">
                {entitys}
                </div>      
              </div>
              </Section>
              

            </React.Fragment>
        )
    }



const mapStateToProps = (state) => {
    return {
      entitys: state.entitys.entitys,
      loading: state.entitys.loading,
      errors: state.entitys.errors,
    };
  };


export default connect(mapStateToProps,null)(Entitys);