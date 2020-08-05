import React from "react";
const RightArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToNextSlide}>
      <i className="fa fa-angle-right fa-3x" aria-hidden="true">Next</i>
    </div>
  );
};

export default RightArrow;
