import React from "react";
import Item from "./myItem";
const MyCarousel = () => {
  return (
    <section className="home-slider owl-carousel">
      <Item />
      <div className="owl-nav ">
        <button role="presentation" className="owl-prev">
          <span className="ion-chevron-left"></span>
        </button>
        <button role="presentation" className="owl-next">
          <span className="ion-chevron-right"></span>
        </button>
      </div>
    </section>
  );
};

export default MyCarousel;
