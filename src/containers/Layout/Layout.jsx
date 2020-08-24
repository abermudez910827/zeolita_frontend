import React, { Component } from "react";
import axios from "../../axios";
import Nav from "../../components/Navegation/Navegation";
// import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Index from "../../components/Index/Index";
// import Servicios from '../../components/Servicios/Servicios'
import About from "../../components/About/About";

import "./style.css";
import '../../fonts/ionicons/css/ionicons.min.css'
import "./animate.css";

class Layout extends Component {
  state = {
    persons: [],
    persons_loading: true,
    personsError: null,
  };

  async componentDidMount() {
    axios
      .get("/api/test-view")
      .then((response) => {
        const persons = response.json();
        this.setState({ persons: persons, persons_loading: false, personsError: null});
      })
      .catch((error) => {
        this.setState({ persons_loading: false, personsError: error });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Index />
        {/* <About persons={this.state.persons} personsLoading={this.state.persons_loading} personsError={this.state.personsError} /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
