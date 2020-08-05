import React, { Component } from "react";
import Person from "./person";
class Persons extends Component {
  state = {
    persons: [],
    is_loading: true,
  };

  async componentDidMount() {
    fetch(this.props.ServerUrl + "/api/test-view")
      .then((rest) => rest.json())
      .then((persons) => {
        this.setState({ persons: persons, is_loading: false });
      });
  }

  render() {
    let persons = <h2>Loading data ...</h2>;
    if (!this.state.is_loading) {
      persons = this.state.persons.map((person) => {
        return (
          <Person
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
      
    }
    return (
      <section className="section bg-light block-11">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <h2 className=" heading mb-4">Personal</h2>
            </div>
          </div>
          <div className="nonloop-block-11 owl-carousel">
            <div>{persons}</div>;
            </div>
        </div>
      </section>
    );
  }
}

export default Persons;
