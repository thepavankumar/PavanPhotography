import React from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroOne from "../assets/hero-1.avif";
import heroTwo from "../assets/hero-2.avif";
import heroThree from "../assets/hero-3.avif";


function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className="w-full slider-container">
    <Slider {...settings}>
      <div>
      <img className="w-full" src={heroOne} alt="" />
     </div>
      <div>
      <img className="w-full" src={heroTwo} alt="" />
      </div>
      <div>
      <img className="w-full" src={heroThree} alt="" />
      </div>
    </Slider>
  </div>
  )
}

export default Hero