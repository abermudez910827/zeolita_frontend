import React from "react";
import Persona from "./Persona/Persona"
const Personas = (props) => {

  let persons = props.personas.map((person) => {
    return (
      <Persona
        key={person.id}
        photo={person.photo}
        name={person.name}
        last_name={person.last_name}
        email={person.email}
        telephone={person.telephone}
        cargo={person.cargo}
      />
    );
  });

  return persons
};

export default Personas;
