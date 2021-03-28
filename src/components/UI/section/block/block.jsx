import React from "react";
// import { Link } from "react-router-dom";

const block = (props) => {

  const size =  props.size  ? props.size  : "col-md-6 col-lg-4 "

  const classes = [ size +" element-animate"];
  const startAnimation = () => {
    // console.log("AnimationTrigger")
    classes.push("fadeInUp element-animated");
   }

  return (
    <div onFocus={startAnimation()} className={classes.join(" ")}>
      <div className="media block-6 d-block text-center">
        <div className="icon mb-3">
          <span className={props.icon + " text-primary"}></span>
        </div>
        <div className="media-body">
          <h3 className="heading">{props.title}</h3>
          <p>{props.description}</p>
          
           </div>
      </div>
    </div>
  );
};

export default block;
