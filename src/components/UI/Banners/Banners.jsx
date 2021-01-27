import React from 'react'
import { Carousel, CarouselItem } from "react-bootstrap";

const Banners = props =>{

    const banners = props.banners.map(banner=>{

        return(
         <CarouselItem key={banner.id} className="slider-item" style={{backgroundImage: `url('${banner.img}')`}}>
      
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
                        <span>{banner.title}</span>
                      </h1>
                      <p className="mb-5 w-75">
                        {banner.text}
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </Carousel.Caption>
         
          </CarouselItem>
       
            )
    })

    return(
        <Carousel pause={false} indicators={false} fade={false} slide={false}>
            {banners}
        </Carousel>
    )
}

export default Banners