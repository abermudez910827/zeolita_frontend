import React from 'react'
import {Link} from 'react-router-dom'

const BlogItem =props=>{
  const classItem=props.left ? "image order-2":"image"
 
    return (
      props.large ? (
        <div className="half d-md-flex d-block">
        <div className={classItem} style={ {backgroundImage: `url('${props.img}')`}}></div>
        <div className="text text-center element-animated">
          <span className="post-meta">{props.date}</span>
          <h3 className="mb-4">{props.title}</h3>
          <p className="mb-5">{props.text}</p>
          <p><Link to={"blogs/"+props.link} className="btn btn-primary btn-sm px-3 py-2">Continuar leyendo</Link></p>
        </div>
      </div>
      ): (
        <div className="col-md-6">
              <div className="media mb-4 d-md-flex d-block element-animated">
                <Link to={"blogs/"+props.link} className="mr-5"><img src={props.img} alt={props.title} className="img-fluid"/></Link>
                <div className="media-body">
                  <span className="post-meta">{props.date}</span>
                  <h3 className="mt-2 text-black"><Link to={"blogs/"+props.link}>{props.title}</Link></h3>
                      <p>{props.text}</p>
                  <p><Link to={"blogs/"+props.link} className="readmore">Leer más<span className="ion-android-arrow-dropright-circle"></span></Link></p>
                </div>
              </div>
            </div>
      )
    )
}

export default BlogItem