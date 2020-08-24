import React, { Component } from "react";
import landingData from "./landingdata";
import LeftArrow from "./leftarrow";
import RightArrow from "./rightarrow";
import Slide from "./slide";
import './style.css'

class Slider extends Component {
  state = {
    activeIndex: 0,
    length: landingData.length,
  };
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-items">
          <LeftArrow goToPrevSlide={() => this.goToPrevSlide()} />
          <div className="slider-text">
            <Slide data={landingData} activeIndex={this.state.activeIndex} />
          </div>
          <RightArrow goToNextSlide={() => this.goToPrevSlide()} />
        </div>
      </div>
    );
  }
}

export default Slider;
