import React from 'react'
import TestimonialItem from "./TestimonialItem/TestimonialItem"
import Section from "../section/section"
import { Carousel, CarouselItem } from "react-bootstrap";

const Testimonial =props=>{

    const testimonios = props.testimonios.map(testimonio=>{
     return( 
      <CarouselItem key={testimonio.id} className="item" >
        <TestimonialItem nombre={testimonio.name} cargo={testimonio.cargo} img={testimonio.photo} text={testimonio.text}/>
      </CarouselItem>
      )
    })

    return(
          <Section light >
              <Carousel className="nonloop-block-11 bg-light owl-carousel owl-loaded owl-drag" interval={15000} pause={false} indicators={false} fade={false} slide={false}>
                 {testimonios}
              </Carousel>
          </Section>
    )
}

export default Testimonial