import React from "react";

const section = (props) => {
  const classSection = [""];
  if (props.section) {
    classSection.push("section");
  }
  if (props.light) {
    classSection.push("bg-light");
  }
  return (
    <section className={classSection.join(" ")}>
      {props.title ? (
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2>{props.title}</h2>

              {props.description ? (
                <p class="mb-5 lead">
                  <h2>{props.description}</h2>
                </p>
              ) : null}
            </div>
          </div>
          {props.children}
        </div>
      ) : props.children }
      
    </section>
  );
};

export default section;
