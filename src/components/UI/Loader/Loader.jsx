import React from "react";
import "./Loader.css";

const loader = (props) => {
  const loaderClasses = ["show"];
  if (props.fullscreen) {
    loaderClasses.push("fullscreen");
  }

  if (props.embebed) {
    loaderClasses.push("embebed");
  }

  return (
    <div id="loader" className={loaderClasses.join(" ")}>
      <svg className="circular" width="48px" height="48px">
        <circle
          className="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#eeeeee"
        />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#f4b214"
        />
      </svg>
    </div>
  );
};

export default loader;
