import React from "react";

const Person = (props) => {
  return (
    // <div className="item">
    //   <div className="block-33 h-100">
    //     <div className="vcard d-flex mb-3">
    //       <div className="image align-self-center">
    //         <img src={props.photo} alt="Person here" />
    //       </div>
    //       <div className="name-text align-self-center">
    //         <h2 className="heading">
    //           {props.name} {props.last_name}
    //         </h2>
    //         <span className="meta">{props.email}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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

export default Person;
