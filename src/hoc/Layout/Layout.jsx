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
      <Nav entidades={props.entidades} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default layout;
