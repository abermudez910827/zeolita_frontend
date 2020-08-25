import React from "react";
import Nav from "../../components/Navegation/Navegation";
import Footer from "../../components/Footer/Footer";

import "./style.css";
import "../../fonts/ionicons/css/ionicons.min.css";
import "./animate.css";

const layout = (props) => {
  return (
    <React.Fragment>
      <Nav />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default layout;
