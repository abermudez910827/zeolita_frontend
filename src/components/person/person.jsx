import React from "react";

const Person = (props) => {
  return (
    <div className="item">
      <div className="block-33 h-100">
        <div className="vcard d-flex mb-3">
          <div className="image align-self-center">
            <img src={props.photo} alt="Person here" />
          </div>
          <div className="name-text align-self-center">
            <h2 className="heading">
              {props.name} {props.last_name}
            </h2>
            <span className="meta">{props.email}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Person;
