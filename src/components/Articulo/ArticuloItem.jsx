import React from 'react'
import {Link} from 'react-router-dom'

const ArticuloItem =props=>{

   let classesAlter=props.left ? 'col-md-5 pr-md-5 mb-5 order-md-2' : 'col-md-5 pr-md-5 mb-5'

    return(
        <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-7 order-md-1">
            <div className="scaling-image">
              <div className="frame">
                <img src={props.img} alt="" className="img-fluid" />
                </div>
          </div>
          </div>
          <div className={classesAlter}>
            <div className="block-41">
              <h2 className="block-41-heading mb-5">{props.title}</h2>
              <div className="block-41-text">
                <p>{props.text}</p>
                <p><Link to={props.link} className="readmore">Leer más <span className="ion-android-arrow-dropright-circle"></span></Link></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )

}

export default ArticuloItem