import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000
      
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
             <img src={"images/22.jpg"}/>
          </div>
          <div>
            <img src={"images/22.jpg"}/>
          </div>
          <div>
          <img src={"images/22.jpg"}/>
          </div>
          <div>
              <img src={"images/22.jpg"}/>
          </div>
          <div>
              <img src={"images/22.jpg"}/>
          </div>
          <div>
            <img src={"images/22.jpg"}/>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}