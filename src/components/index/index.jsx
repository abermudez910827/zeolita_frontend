import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Section from "../UI/section/section"
import Thumbnail from "../UI/thumbnail/linkThumbnail"
import Loader from "../Loader/Loader"
import Testimonial from "../Testimonial/Testimonial"
import BlogItem from "../Blog/BlogItem"
import ArticuloItem from "../Articulo/ArticuloItem"
import MensajeItem from "../Mensaje/MensajeItem"
import { connect } from "react-redux";

const Index = (props) => {
 
  
  let entitys = props.entitys.map((entity) => {
    return (
      <Thumbnail key={entity.nro} url={entity.nro} title={entity.nombre} img={entity.foto_portada}/>
       
     
    );
  });

  if (props.errors) {
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
    entitys = (
      <div className="col-lg-12">
        <Loader embebed />
      </div>
    );
  }

  return (
    <React.Fragment>
    <Carousel pause={false} indicators={false} fade={false} slide={false}>
      <CarouselItem className="slider-item" style={{backgroundImage: "url('images/portada.jpg')"}}>
      
        <Carousel.Caption>
          <div className="container">
            <div className="container">
              <div className="row slider-text align-items-center justify-content-center">
                <div className="col-lg-7 text-center col-sm-12 fadeInUp element-animated">
                  <div className="btn-play-wrap mx-auto">
                    <p className="mb-4">
                      
                    </p>
                  </div>
                  <h1 className="mb-4">
                    <span>Empresa Geominera del Centro</span>
                  </h1>
                  <p className="mb-5 w-75">
                     
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </Carousel.Caption>
     
      </CarouselItem>
      <CarouselItem className="slider-item" style={{backgroundImage: "url('images/portada1.jpg')"}}>
      
      <Carousel.Caption>
        <div className="container">
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
              <div className="col-lg-7 text-center col-sm-12 fadeInUp element-animated">
                <div className="btn-play-wrap mx-auto">
                  <p className="mb-4">
                    
                  </p>
                </div>
                <h1 className="mb-4">
                  <span>UEB Zeolita</span>
                </h1>
                <p className="mb-5 w-75">
                  
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </Carousel.Caption>
   
    </CarouselItem>
    </Carousel>

    <Section classSection={["section-subscribe","bg-danger"]} >
      <MensajeItem title="Titulo del mensaje" text="Descripcion del mensaje" link={"/"}/>
    </Section>

    <Section>
      <ArticuloItem link="/" img="images/img.jpg" title="Entidad de excelencia" text="Líderes en los servicios geotecnológicos, mineros, la perforación y la minería subterránea." />
      
    </Section>

    <Section light>
    <ArticuloItem left={true} link="/" img="images/img1.jpg" title="Lídeles" text="Entidad con responsabilidad en la fabricación de cemento, piensos, fertilizantes, áridos y otros productos." />

    </Section>
   { props.entitys.length > 0 ?
    <Section section>
      <div className="container">
        <div className="row justify-content-center mb-5 element-animated">
          <div className="col-md-8 text-center">
            <h2 className=" heading mb-4">Entidades </h2>
            {/* <p className="mb-5 lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
        {entitys}
        </div>      
      </div>
      </Section>:null}

   
    <Section className="section bg-light block-11">
      <div className="container"> 
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className=" heading mb-4">Testimonios</h2>
          </div>
        </div>
        
    <Carousel className="nonloop-block-11 owl-carousel owl-loaded owl-drag" interval={15000} pause={false} indicators={false} fade={false} slide={false}>
      <CarouselItem className="item" >
      
      <Testimonial nombre="Alejandro Bermudez" cargo="Informatico" img="images/person_2.jpg" text="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."/>
   
     
      </CarouselItem>
      <CarouselItem className="item" >
      
      <Testimonial nombre="John Smith" cargo="Informatico" img="images/person_3.jpg" text="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."/>
        
   
    </CarouselItem>
    </Carousel>

        </div>
    </Section>
    
    <section className="section blog">
      <div className="container">

        <div className="row justify-content-center mb-5 element-animated">
          <div className="col-md-8 text-center">
            <h2 className=" heading mb-4">Blog Posts</h2>
            <p className="mb-5 lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>

        <div className="row">
          <BlogItem key={1} link="/" img="images/industrial_blog_1.jpg" date="Feb 26th, 2018" title="How to handle any intercate custom design" text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
          <BlogItem key={2} link="/" img="images/industrial_blog_1.jpg" date="Feb 26th, 2018" title="How to handle any intercate custom design" text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
          <BlogItem key={3} link="/" img="images/industrial_blog_2.jpg" date="Feb 26th, 2018" title="How to handle any intercate custom design" text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
          <BlogItem key={4} link="/" img="images/industrial_blog_3.jpg" date="Feb 26th, 2018" title="How to handle any intercate custom design" text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
           
        </div>
      </div>
    </section>
    

    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    entitys: state.entitys.entitys,
    loading: state.entitys.loading,
    errors: state.entitys.errors,
  };
};
export default connect(mapStateToProps, null)(Index);
// export default Index;
