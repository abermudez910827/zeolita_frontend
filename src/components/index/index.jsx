import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Index = (props) => {
  const style = {
    backgroundImage: "url('images/industrial_hero_1.jpg')",
  };

  return (
    <Carousel pause={false} indicators={false}>
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
                    <span>We Are Industrial Company</span>
                  </h1>
                  <p className="mb-5 w-75">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias iste ipsa excepturi nostrum sequi molestias?
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
};

export default Index;
