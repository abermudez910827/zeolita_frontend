import React from "react";
import InnerPage from "../UI/innerPage/innerPage";
import Section from '../UI/section/Section'
const styleImg = {
    backgroundImage: "url('images/industrial_hero_1.jpg')",
};

const servicios = () => {
  return (
    <React.Fragment>
          <InnerPage title='Nuestros Servicios' description='Servicios prestados' img="url('images/industrial_hero_3.jpg')"/>
          <Section title='Titulo' >
              <div className="row align-items-stretch">
                  <div className="col-lg-4 order-lg-2">
                      <div className="scaling-image h-100">
                          <div className="frame h-100">
                              <div className="feature-img-bg h-100" style={styleImg}></div>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">
                      <div className="feature-1 d-md-flex">
                          <div className="align-self-center">
                              <span className="ion ion-easel display-4 text-primary"></span>
                              <h3>Ducting Design</h3>
                              <p>
                                  Even the all-powerful Pointing has no control about the blind
                                  texts.
                </p>
                          </div>
                      </div>

                      <div className="feature-1 d-md-flex">
                          <div className="align-self-center">
                              <span className="ion ion-hammer display-4 text-primary"></span>
                              <h3>Stacks Design</h3>
                              <p>
                                  Even the all-powerful Pointing has no control about the blind
                                  texts.
                </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
                      <div className="feature-1 d-md-flex">
                          <div className="align-self-center">
                              <span className="ion ion-cube display-4 text-primary"></span>
                              <h3>Tanks Design</h3>
                              <p>
                                  Even the all-powerful Pointing has no control about the blind
                                  texts.
                </p>
                          </div>
                      </div>

                      <div className="feature-1 d-md-flex">
                          <div className="align-self-center">
                              <span className="ion ion-clipboard display-4 text-primary"></span>
                              <h3>Structural Design</h3>
                              <p>
                                  Even the all-powerful Pointing has no control about the blind
                                  texts.
                </p>
                          </div>
                      </div>
                  </div>
              </div>

        </Section>
      </React.Fragment>
  );
};

export default servicios;
