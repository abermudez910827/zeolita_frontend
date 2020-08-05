import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const Item = (props) => {
    return (
      <Carousel.Item
       
        // style={{ height: "300px" }}
      >
        <img
          //   style={{ height: "300px" }}
          className="d-block w-100"
          src={props.url}
        />
        <Carousel.Caption>
          <h3>{props.titulo} </h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
}
 
export default Item;