import React from 'react'

const MensajeItem= props=>{

    return(
        <React.Fragment>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-8">
                    <h4 className="text-white mb-0">{props.title}</h4>
                    <p className="text-white">{props.text}</p>
                </div>
                {props.link ? (<div className="col-lg-4 text-lg-right">
                    <a href={props.link} className="btn btn-outline-white px-4 py-3">Descargar</a>
                </div>)
                : null}
                
                </div>
            </div>
        </React.Fragment>
    )
}
export default MensajeItem