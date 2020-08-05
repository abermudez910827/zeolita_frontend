import React from "react";
import logo from "./logo.svg";
// import Persons from "./components/person/persons";
// import Index from "./components/index/index";
import Carousel from "./components/index/carousel/carousel";
import Banner from "./components/banner/banner";
// import Slider from "./components/index/carousel/slider";
import ServerUrl from "./config";
function App() {
  return (
    <React.Fragment>
      {/* <Index /> */}
      {/* <Slider /> */}
      <Banner />
      <div class="top-shadow"></div>
      <Carousel />
      {/* <Persons ServerUrl={ServerUrl} /> */}
    </React.Fragment>
  );
}

export default App;
