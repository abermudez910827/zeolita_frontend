import React, { Component, Suspense } from "react";
import axios from "./axios";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

import Index from "./components/Index/Index";
import Loader from "./components/Loader/Loader";

const About = React.lazy(() => import("./components/About/About"));
const Services = React.lazy(() => import("./components/Servicios/Servicios"));
const Contact = React.lazy(() => import("./containers/Contact/Contact"));

class App extends Component {
  state = {
    persons: [],
    cargos: [],
    persons_loading: true,
    personsError: null,
  };

  async componentDidMount() {
    axios
      .get("/api/persons/cargos")
      .then((response) => {
        const cargos = response.data;
        this.setState({ cargos: cargos, personsError: null });
        axios
          .get("/api/persons/persons")
          .then((response) => {
            const persons = response.data.map((person) => {
              const cargoId = person.cargo;
              const mapedPerson = person;
              const cargoName = cargos.filter(
                (cargo) => cargo.id === cargoId
              )[0].name;
              mapedPerson.cargo = cargoName;
              return mapedPerson;
            });
            this.setState({
              persons: persons,
              persons_loading: false,
              personsError: null,
            });
          })
          .catch((error) => {
            this.setState({ persons_loading: false, personsError: error });
          });
      })
      .catch((error) => {
        this.setState({ persons_loading: false, personsError: error });
      });
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route
            path="/services"
            render={() => (
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            )}
          />
          <Route path="/projects" component={Index} />
          <Route
            path="/about"
            render={() => (
              <Suspense fallback={<Loader />}>
                <About
                  persons={this.state.persons}
                  personsLoading={this.state.persons_loading}
                  personsError={this.state.personsError}
                />
              </Suspense>
            )}
          />
          <Route path="/" exact component={Index} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
