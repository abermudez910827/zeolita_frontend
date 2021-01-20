import React from "react";
import InnerPage from "../UI/innerPage/innerPage";
import Section from '../UI/section/section'
import Block from "../../components/UI/section/block/block";

const styleImg = {
    backgroundImage: "url('images/industrial_hero_1.jpg')",
};

const servicios = () => {
  return (
    <React.Fragment>
          <InnerPage title='Nuestros Servicios' 
          description='La Empresa Geominera del Centro, perteneciente 
          al Grupo Empresarial GeoMinSal, del Ministerio de la Industria Básica, 
          brinda servicios mineros, reparación de plantas de procesamiento de minerales, 
          salineras y otros servicios a las mismas en el territorio central comprendido 
          en las provincias Sancti Spíritus, Villa Clara y Cienfuegos.' 
          img="url('images/industrial_hero_3.jpg')"/>

          <Section title='' >
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
                              <span className="ion ion-flame display-4 text-primary"></span>
                              <h3>Servicios mineros</h3>
                              <p>
                              Brindar servicios mineros que contemplan las actividades de barrenación, 
                              voladura, extracción y acarreo de diferentes materias primas menas y otros 
                              materiales vinculados con la actividad minera, en moneda nacional y divisa.
                </p>
                          </div>
                      </div>

                      <div className="feature-1 d-md-flex">
                          <div className="align-self-center">
                              <span className="ion ion-briefcase display-4 text-primary"></span>
                              <h3>Servicios de elaboración y ejecución</h3>
                              <p>
                              Brindar servicios de elaboración y ejecución de proyectos geotécnicos,
                               geoquímicos, geomorfológicos, geofísicos, topográficos e hidrológicos
                                para la determinación de yacimientos de minerales sólidos, metálicos
                                 y no metálicos así como aguas minero medicinales, en moneda nacional.
                </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
                      <div className="feature-1 d-md-flex">
                          <div className="align-self-center">
                              <span className="ion ion-wrench display-4 text-primary"></span>
                              <h3>Servicios de reparación y mantenimiento</h3>
                              <p>
                                Prestar servicios de reparación y mantenimiento a equipos tecnológicos, 
                                eléctricos, electrónicos, montaje de sistemas mecánicos y eléctricos afines
                                 a la actividad de la rama, en moneda nacional y divisa.
                </p>
                          </div>
                      </div>

                      <div className="feature-1 d-md-flex">
                          <div className="align-self-center">
                              <span className="ion ion-erlenmeyer-flask-bubbles display-4 text-primary"></span>
                              <h3>Servicios de laboratorios químicos</h3>
                              <p>
                              Ofrecer servicios de laboratorios químicos, físicos mecánicos petrográficos y
                               de otros tipos de ensayos químicos vinculados a la determinación de elementos y 
                               minerales para la industria minera y la geología, que incluye los diferentes tipos 
                               de análisis de resistencia de materiales y el comportamiento de la roca ante esfuerzos
                                vinculados a la construcción, en moneda nacional y divisa.
                </p>
                          </div>
                      </div>
                  </div>
              </div>

        </Section>
        <Section section title='Producir, procesar, distribuir y comercializar' light>
          <div className="row">
            <Block 
              icon="ion-clipboard"
              description="Producir, distribuir y comercializar de forma mayorista bienes terminados 
              y materias primas de minerales metálicos y no metálicos, en moneda nacional y divisa."
            />
            <Block  
              icon="ion-erlenmeyer-flask"
              description="Producir, distribuir y comercializar de forma mayorista productos industriales
               a partir de materias primas de los minerales tales como talco tocador, polvo facial, talco 
               antimicótico, desodorante y polvo limpiador, en moneda nacional y divisa."
            />
             <Block
              icon="ion-waterdrop"
              description="Procesar y comercializar de forma mayorista fangos mineromedicinales, 
              en moneda nacional y divisa."
            />
            <Block 
              icon="ion-ios-monitor"
              description="Producir y comercializar de forma mayorista equipos tecnológicos,
               eléctricos y electrónicos, en moneda nacional y divisa."
            />
            <Block 
              icon="ion-gear-a"
              description="Comercializar de forma mayorista chatarra a las empresas de la Unión de Recuperación de Materias Primas,
               en moneda nacional y divisa."
            />
             <Block  
              icon="ion-social-usd"
              description="Comercializar de forma mayorista productos ociosos y de lento movimiento, en moneda nacional."
            />

          </div>
        </Section>
      
        <Section section title='Prestación de Servicios' light>
          <div className="row">
            <Block 
              icon="ion-hammer" size="col-md-6 col-lg-6"
              description="Prestar servicios de mantenimiento industrial y constructivo de obras menores, en moneda nacional y divisa."
            />
            
            <Block 
              icon="ion-android-globe" size="col-md-6 col-lg-6"
              description="Prestar servicios de estudios integrales vinculados a la actividad medio ambiental, en moneda nacional."
            />
            <Block 
              icon="ion-android-people" size="col-md-6 col-lg-6"
              description="Prestar servicios de suministro de fuerza de trabajo al Grupo Empresarial Geominero-Salinero, GeoMinSal, en moneda nacional."
            />
            <Block 
              icon="ion-android-car" size="col-md-6 col-lg-6"
              description="Prestar servicios de reparación y mantenimiento de equipos automotores; de transportación de cargas;
               de almacenamiento de mercancías; de alquiler de equipos mineros; de alojamiento no turístico y de alimentación
                asociada a éste, a los trabajadores y a entidades del Ministerio de la Industria Básica y de recreación a sus 
                trabajadores, todos ellos en moneda nacional."
            />
            
          </div>
        </Section>
      
        <Section section title='Otros Servicios' light>
          <div className="row">
            <Block 
              icon="ion-calculator" size="col-md-12 col-lg-12"
              description="Realizar estudios de consumo energético en moneda nacional y montaje de equipos de registros y control de potencia eléctrica, en moneda nacional y divisa."
            />
         
          </div>
        </Section>
      
      </React.Fragment>
  );
};

export default servicios;
