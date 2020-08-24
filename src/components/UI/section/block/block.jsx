import React from "react";

const block = (props) => {
  return (
    <div className="col-md-6 col-lg-4 ">
      <div className="media block-6 d-block text-center">
        <div className="icon mb-3">
                  <span className={props.icon +' text-primary'}></span>
        </div>
        <div className="media-body">
          <h3 className="heading">{props.title}</h3>
          <p>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default block;