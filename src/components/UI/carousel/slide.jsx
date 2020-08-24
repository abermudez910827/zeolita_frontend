import React from 'react'

const Slide = (props) => {
    return ( 
        <section>
            {props.data.map((s, index) => {
                return(
                <div className={index === props.activeIndex ? 'active' : 'inactive'} key={index}>
                    <h1>{s.title}</h1>
                    <p>{s.description}</p>
                </div>)
            })}
        </section>
     );
}
 
export default Slide;