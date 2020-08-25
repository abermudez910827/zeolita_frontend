import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.css";
import InnerPage from "../../components/UI/innerPage/innerPage";
import Section from "../../components/UI/section/Section";
import Block from "../../components/UI/section/block/block";
import Person from "../../components/Person/Person";
import Loader from "../../components/Loader/Loader";
import * as actions from "../../store/actions";

class About extends Component {
  componentDidMount() {
    // this.props.initPersons();
  }

  render() {
    let persons = this.props.persons.map((person) => {
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

    if (this.props.errors) {
      persons = (
        <div className="col-lg-12 text-center">
          <h1>
            <span
              className="ion-sad-outline text-danger "
              aria-hidden="true"
            ></span>
          </h1>
          <h5 className="text-danger">Ocurrio un error al cargar los datos</h5>
        </div>
      );
    }

    if (this.props.loading) {
      persons = (
        <div className="col-lg-12">
          <Loader embebed />
        </div>
      );
    }

    return (
      <React.Fragment>
        <InnerPage
          title="Acerca de "
          description="Zeolita"
          img="url('images/industrial_hero_3.jpg')"
        />
        <Section>
          <div className="half d-lg-flex d-block">
            <div
              className="image"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: "url('images/industrial_hero_1.jpg')" }}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Our Mission</h3>
              <p className="mb-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <button className="btn btn-primary btn-sm px-3 py-2">
                  Learn More
                </button>
              </p>
            </div>
          </div>

          <div className="half d-lg-flex d-block">
            <div
              className="image order-2"
              data-animate-effect="fadeIn"
              style={{ backgroundImage: "url('images/industrial_hero_2.jpg')" }}
            ></div>
            <div className="text text-center">
              <h3 className="mb-4">Company History</h3>
              <p className="mb-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <p>
                <button className="btn btn-primary btn-sm px-3 py-2">
                  Learn More
                </button>
              </p>
            </div>
          </div>
        </Section>
        <Section section light>
          <div className="row">
            <Block
              icon="ion-android-notifications"
              title="Modern Design"
              description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
            />
            <Block
              icon="ion-heart"
              title="Built With Passion"
              description="Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic."
            />

            <Block
              icon="ion-flash"
              title="Fast Loading"
              description="Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic."
            />
          </div>
        </Section>
        <Section section title="Conoce al equipo">
          <div className="row">{persons}</div>
        </Section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons.persons,
    loading: state.persons.loading,
    errors: state.persons.errors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  initPersons: () => dispatch(actions.initPersons),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
