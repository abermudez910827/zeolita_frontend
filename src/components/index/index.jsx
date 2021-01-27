import React from "react";
import Section from "../UI/section/section"
import Thumbnail from "../UI/thumbnail/linkThumbnail"
import Testimonial from "../UI/Testimonial/Testimonial"
import Blog from "../Blogs/Blog/Blog"
import Articulos from "../Articulos/Articulos"
import Mensajes from "../UI/Mensajes/Mensajes"
import Banners from "../UI/Banners/Banners"

const Index = (props) => {
 
  
  let entitys = props.entidades.map((entity) => {
    return (
      <Thumbnail key={entity.nro} url={entity.nro} title={entity.nombre} img={entity.foto_portada}/>
           
    );
  });




  return (
    <React.Fragment>
   
    <Banners banners={props.banners} />
    <Mensajes mensajes={props.mensajes} />

    <Articulos articulos={props.articulos} />
    
   { props.entidades.length > 0 ?
    <Section section>
      <div className="container">
        <div className="row justify-content-center mb-5 element-animated">
          <div className="col-md-8 text-center">
            <h2 className=" heading mb-4">Entidades </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
        {entitys}
        </div>      
      </div>
      </Section>:null}

   
   <Testimonial testimonios={props.testimonios}/>

   
       <section className="section blog">
      <div className="container">

        <div className="row justify-content-center mb-5 element-animated">
          <div className="col-md-8 text-center">
            <h2 className=" heading mb-4">Nuestros Blogs</h2>
          </div>
        </div>

        <div className="row">
           {props.blogs.map(blog=><Blog key={blog.id} link={blog.id} img={blog.img} date={blog.date} title={blog.title} text={blog.text} />)}
                 </div>
      </div>
    </section>
    
    </React.Fragment>
  );
};


export default Index;
