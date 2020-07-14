import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>
        Hola {props.name} {props.last_name}
      </h1>
    </div>
  );
};

export default Person;
