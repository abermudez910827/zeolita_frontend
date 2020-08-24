import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class MyCarousel extends Component {
  state = {
    imgs: [
      {
        titulo: "Hola",
        descripcion: "Que tal",
        url: "images/industrial_hero_1.jpg",
      },
      {
        titulo: "Hola2",
        descripcion: "Que tal",
        url: "images/industrial_hero_2.jpg",
      },
      {
        titulo: "Hola3",
        descripcion: "Que tal",
        url: "images/industrial_hero_3.jpg",
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <Carousel
          slideshowSpeed={2000}
          keyboard={false}
          indicators={false}
          wrap={false}
        >
          {this.state.imgs.map((img, index) => {
            return (
              <Carousel.Item
                key={index}

                // style={{ height: "300px" }}
              >
                <img
                  //   style={{ height: "300px" }}
                  className="d-block w-100"
                  src={img.url}
                />

                <Carousel.Caption>
                  <div className="container">
                    <div className="row slider-text align-items-center justify-content-center">
                      <div className="col-lg-7 text-center col-sm-12 ">
                        <h1 className="mb-4">
                          <span>{img.titulo} </span>
                        </h1>
                        <p className="mb-5 w-75">{img.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default MyCarousel;
