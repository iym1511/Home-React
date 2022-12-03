import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slick.css";
export default class Slick extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      onwheel: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="./22050902393055843475.jpg" alt="" />
          </div>
          <div>
            <img src="./01-Tones-lookbook-5.jpg" alt="" />
          </div>
          <div>
            <img src="./bed1.jpg" alt="" />
          </div>
          <div>
            <img src="./bed4.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
