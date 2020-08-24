import React from "react";

import InnerPage from "../UI/innerPage/innerPage";
import Section from "../UI/section/section";
import Block from "../UI/section/block/block";
import Person from "../Person/Person";
import Loader from '../Loader/Loader'

const about = (props) => {
  let persons =   props.persons.map((person) => {
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

  if (props.personsError) {
    persons = <div className="col-lg-12 "><h5 className="text-center text-danger">Ocurrio un error al cargar los datos</h5></div>;
  }

  if (props.personsLoading) {
    persons = <div className="col-lg-12"><Loader embebed /></div>;
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
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
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
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
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
};

export default about;
