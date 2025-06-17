import React from "react";
import "./style/bbtn.css";
import { PropData } from "../../Context/PropDataHandler";

function HamBurgerBtn() {
  const { isNavActive, setIsNavActive } = PropData();

  const handleBurgerClick = () => {
    setIsNavActive(() => !isNavActive);
  };

  return (
    <div className="hamburgerBtn-wrapper">
      <button className="hamburgerBtn" onClick={handleBurgerClick}>
        <div
          className={
            !isNavActive
              ? "dash-btn-line1"
              : "dash-btn-line1 dash-btn-line1-anim "
          }></div>
        <div
          className={
            !isNavActive
              ? "dash-btn-line2"
              : "dash-btn-line2 dash-btn-line2-anim"
          }></div>
        <div
          className={
            !isNavActive
              ? "dash-btn-line3"
              : "dash-btn-line3 dash-btn-line3-anim"
          }></div>
      </button>
    </div>
  );
}

export default HamBurgerBtn;
