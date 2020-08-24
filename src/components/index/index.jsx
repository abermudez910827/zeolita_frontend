import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
// import "../../styles/owl.carousel.min.css";

const Index = (props) => {
  const style = {
    backgroundImage: "url('images/industrial_hero_1.jpg')",
  };
  
  return (
    <Carousel pause={false} indicators={false}>
      

      <CarouselItem className='slider-item' style={style}>
         {/* <img
          className="d-bock w-100"
          src="images/industrial_hero_1.jpg"
          alt="Test2"
        /> */}
        <Carousel.Caption>
          <div class="container">
            <div class="container">
              <div class="row slider-text align-items-center justify-content-center">
                <div class="col-lg-7 text-center col-sm-12 fadeInUp element-animated">
                  <div class="btn-play-wrap mx-auto"><p class="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" class="btn-play"><span class="ion ion-ios-play"></span></a></p></div>
                  <h1 class="mb-4"><span>We Are Industrial Company</span></h1>
                  <p class="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?</p>
                </div>
              </div>
            </div> </div>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
};

export default Index;
