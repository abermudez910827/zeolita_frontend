import React from "react";
import "./Error.css";

const Error = (props) => {
  const errorClasses = ["show"];
  let size=(
        <div className="circular col-lg-12 text-center">
            <h1>
            <span
                className="ion-sad-outline text-danger "
                aria-hidden="true"
            ></span>
            </h1>
            <h5 className="text-danger">{props.mensaje}</h5>
        </div> 
       
        )
  if (props.fullscreen) {
    errorClasses.push("fullscreen");
    size=(
        <div className="circular col-lg-12 text-center">
        <h1>
          <span
            className="ion-sad-outline text-danger "
            aria-hidden="true"
          ></span>
        </h1>
        <h5 className="text-danger">{props.mensaje}</h5>
        <div>{props.error}</div>
      </div> 
      )
      }

  if (props.embebed) {
    errorClasses.push("embebed");
  }

  return (
    <div id="error" className={errorClasses.join(" ")}>
        {size}
    </div>
  );
};

export default Error;
