import React from "react";

const Persona = (props) => {
  return (
    <div className="col-lg-3">
      <div className="media d-block block-99 h-100 media-custom text-center">
        <div className="vcard d-flex mb-3">
        <div className="image align-self-center">
          <img src={props.photo} alt="" />
          </div>
        </div>
        <div className="media-body">
          <h4 className="mt-0 text-primary">{props.cargo}</h4>
          <h3 className="mt-0 text-black">{props.name} {props.last_name}</h3>
          <span className="meta">{props.email}</span>
        </div>
      </div>
    </div>

    
  );
};

export default Persona;
