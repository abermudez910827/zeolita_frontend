import React from "react";
import InnerPage from "../UI/innerPage/innerPage";
import Section from '../UI/section/section'
import Block from "../../components/UI/section/block/block";



const servicios = props => {
   const servicios = props.entidad.servicios.map(servicio=>{
          return( 
              <Block 
                key={servicio.id} 
                icon={servicio.icon} 
                size="col-md-6 col-lg-6"
                description={servicio.description}
              />
          )
    })
    
  return (
    <React.Fragment>
          <InnerPage title='Nuestros Servicios' 
         
          img={`url(${props.entidad.foto_portada})`}/>
          <Section section light>
              <div className="row">
              {servicios}
            
              </div>
          </Section>

       
      </React.Fragment>
  );
};

export default servicios;
