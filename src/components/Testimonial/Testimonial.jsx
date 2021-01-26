import React from 'react'

const Testimonial =props=>{

    return(
            <div className="block-33 h-100">
                <div className="vcard d-flex mb-3">
                  <div className="image align-self-center"><img src={props.img} alt="Person here"/></div>
                  <div className="name-text align-self-center">
                    <h2 className="heading">{props.nombre}</h2>
                     <span className="meta">{props.cargo}</span>
                  </div>
                </div>
                <div className="text">
                  <blockquote>
                    <p className="text-secondary">&rdquo; {props.text} &ldquo;</p>
                  </blockquote>
                </div>
            </div>
    )
}

export default Testimonial