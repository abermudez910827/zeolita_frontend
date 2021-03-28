import React from "react";
import Nav from "../../components/UI/Navegation/Navegation";
import Footer from "../../components/UI/Footer/Footer";

import "./style.css";
// import "./Layout.css";
import "../../fonts/ionicons/css/ionicons.min.css";
import "./animate.css";

const layout = (props) => {
  return (
    <React.Fragment>
      <Nav entidades={props.siteData.entidades} />
      {props.children}
      <Footer entidad={props.siteData.entidad_pric} />
    </React.Fragment>
  );
};

export default layout;
