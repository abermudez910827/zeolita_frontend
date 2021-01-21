import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Section from "../UI/section/section"
const Index = (props) => {
  const style = {
    backgroundImage: "url('images/portada.jpg')",
  };
  const style1 = {
    backgroundImage: "url('images/portada1.jpg')",
  };
  return (
    <React.Fragment>
    <Carousel pause={false} indicators={false} fade={false} slide={false}>
      <CarouselItem className="slider-item" style={style}>
      
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
      <CarouselItem className="slider-item" style={style1}>
      
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

    <Section>
    <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-7 order-md-2">
            <div className="scaling-image">
              <div className="frame">
                <img src="images/industrial_featured_img_1.jpg" alt="Free template by Free-Template.co" className="img-fluid" />
                </div>
          </div>
          </div>
          <div className="col-md-5 pr-md-5 mb-5">
            <div className="block-41">
              <h2 className="block-41-heading mb-5">Let's Build Together</h2>
              <div className="block-41-text">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p><a href="#" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </Section>

    <Section light>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-7 order-md-1">
            <div className="scaling-image"><div className="frame"><img src="images/industrial_featured_img_2.jpg" alt="Free template by Free-Template.co" className="img-fluid"/></div></div>
          </div>
          <div className="col-md-5 pl-md-5 mb-5 order-md-2">
            <div className="block-41">
              <h2 className="block-41-heading mb-5">We'll handle any intercate custom design</h2>
              <div className="block-41-text">
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p><a href="#" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
    

    </React.Fragment>
  );
};

export default Index;
