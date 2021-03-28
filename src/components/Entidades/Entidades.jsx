import React from "react";
import InnerPage from "../UI/innerPage/innerPage";
import Section from "../UI/section/section";
import Loader from "../UI/Loader/Loader";
import Thumbnail from "../UI/thumbnail/linkThumbnail"

const Entitys = (props) =>{

  let entitys = props.entidades.map((entity) => {
    return (
      <Thumbnail key={entity.nro} url={entity.nro} title={entity.nombre} img={entity.foto_portada}/>
           
    );
  });

  let page= (
    <InnerPage
    title="Entidades"
    img={`url(${props.entidad_img})`}
    />
       )

  if (props.errors) {
    page=(
      <InnerPage
        title="Error al cargar las entidades"
        img={`url(${props.entidad_img})`}
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
      img={`url(${props.entidad_img})`}
      />
         )
 
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


export default Entitys;