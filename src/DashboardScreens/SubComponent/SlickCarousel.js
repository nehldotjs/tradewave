import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style/slickCarousel.css";

import CustomSliderBtns from "./CustomSliderBtn";

const SlickCarousel = ({ data, render }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "40px" }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "20px" }
      }
    ]
  };

  return (
    <div className="slider__container">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slider__item">
            {render(item, index)}
          </div>
        ))}
      </Slider>
      <CustomSliderBtns
        onPrevClick={() => sliderRef.current?.slickPrev()}
        onNextClick={() => sliderRef.current?.slickNext()}
      />
      
    </div>
  );
};

export default SlickCarousel;
