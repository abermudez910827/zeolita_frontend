import React from "react";
import InnerPage from "../../UI/innerPage/innerPage";
import Section from "../../UI/section/section";
import Testimonial from "../../UI/Testimonial/Testimonial"
import Articulos from "../../Articulos/Articulos"
import Blog from "../../Blogs/Blog/Blog"
import Personas from "../../UI/Personas/Personas";

const Entity =props=>{
  
  const entity=props.entidades.find(entity=>String(entity.nro) === props.props.match.params.nro)
  let page;
  if(entity){
     page= (
        <React.Fragment>
                <InnerPage
                    title={entity.nombre}
                    img={`url(${entity.foto_portada})`}
                    />
                <Section>
                  <div className="half d-lg-flex d-block">
                      <div
                        className="image order-2"
                        data-animate-effect="fadeIn"
                        style={{ backgroundImage: `url('${entity.photo_objeto_social}') ` }}
                      ></div>
                      <div className="text text-center">
                        <h3 className="mb-4">Objeto Social</h3>
                        <p className="mb-5">
                        {entity.objeto_social}
                        </p>

                        <p>
                        <a href="/" className="btn btn-primary btn-sm px-3 py-2" >
                            Leer más
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="half d-lg-flex d-block">
                      <div
                        className="image"
                        data-animate-effect="fadeIn"
                        style={{ backgroundImage: `url('${entity.photo_mision}') ` }}
                      ></div>
                      <div className="text text-center">
                        <h3 className="mb-4">Nuestra Misión</h3>
                        <p className="mb-5">
                        {entity.mision}
                        </p>
                      
                      </div>
                    </div>

                    <div className="half d-lg-flex d-block">
                      <div
                        className="image order-2"
                        data-animate-effect="fadeIn"
                        style={{ backgroundImage: `url('${entity.photo_vision}') `}}
                      ></div>
                      <div className="text text-center">
                        <h3 className="mb-4">Nuestra Visión</h3>
                        <p className="mb-5">
                        {entity.vision}
                        </p>

                        
                      </div>
                    </div>
             </Section>
             <Articulos articulos={entity.articulos} />
        <Section section title="Conoce al equipo">
          <div className="row"><Personas personas={entity.personas} /></div>
        </Section>
                <Testimonial testimonios={entity.testimonios}/>

                <section className="section blog">
                  <div className="container">

                    <div className="row justify-content-center mb-5 element-animated">
                      <div className="col-md-8 text-center">
                        <h2 className=" heading mb-4">Nuestros Blogs</h2>
                      </div>
                    </div>

                    <div className="row">
                      {entity.blogs.map(blog=><Blog key={blog.id} link={blog.id} img={blog.img} date={blog.date} title={blog.title} text={blog.text} />)}
                            </div>
                  </div>
                </section>
                <Section  section>
                
                <div className="container-fluid">
                  <div className="row no-gutters">

                  </div>      
                </div>
                </Section>
                

              </React.Fragment>
   
       )
  }else {
    page=(
      <InnerPage
        title="La entidad que busca no existe"
      /> 
      )
      }

        return page 
        

}



export default Entity;
