// CustomSliderBtn.js
import React from "react";

import "./style/slickCarousel.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const CustomSliderBtns = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="custom-btn-container">
      <div className="custom-slider-btns">
        <button onClick={onPrevClick} className="custom-btn prev">
          <FaLongArrowAltLeft className="custom-arrow-btn" />
        </button>
        <button onClick={onNextClick} className="custom-btn next">
          <FaLongArrowAltRight className="custom-arrow-btn" />
        </button>
      </div>
    </div>
  );
};

export default CustomSliderBtns;
