import React from "react";
const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-angle-left fa-3x" aria-hidden="true">Prev</i>
    </div>
  );
};

export default LeftArrow;
