import React from "react";
import "./Loader.css";

const loader = (props) => {
  const loaderClasses = ["show"];
  let size=(
        <svg className="circular" width="48px" height="48px">
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#f4b214"></circle>
        </svg>
        )
  if (props.fullscreen) {
    loaderClasses.push("fullscreen");
    size=(
      <svg className="circular" width="100px" height="100px">
         <circle className="path" cx="50" cy="50" r="33" fill="none" strokeWidth="3" strokeMiterlimit="5" stroke="#f4b214"></circle>
      </svg>)
      }

  if (props.embebed) {
    loaderClasses.push("embebed");
  }

  return (
    <div id="loader" className={loaderClasses.join(" ")}>
         {size}  
    </div>
  );
};

export default loader;
