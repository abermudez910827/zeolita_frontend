import React from 'react'
import { Link } from "react-router-dom";

const linkThumbnail = (props) => {
    return (
        <div className="col-md-4 element-animated">
        <Link to={"/entitys/"+props.url} className="link-thumbnail">
          <h3>{props.title}</h3>
          <span className="ion-android-search icon"></span>
          <img loading='lazy' src={props.img} alt={props.title} className="img-fluid"/>
        </Link>
      </div>
      )
}
 
export default linkThumbnail;