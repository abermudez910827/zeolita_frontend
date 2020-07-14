import React, { Component } from "react";
import Person from "./person";
class Persons extends Component {
  state = {
    persons: [],
    is_loading: true,
  };

  async componentDidMount() {
    // let options = {
    //   method: "get",
    //   mode: "cors",
    //   header: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    // };
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
            name={person.name}
            last_name={person.last_name}
          />
        );
      });
      return <div>{persons}</div>;
    }
    return <React.Fragment>{persons}</React.Fragment>;
  }
}

export default Persons;
