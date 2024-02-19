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
      <button
        className={isNavActive ? " hamburgerBtn" : "  hamburgerBtnIsActive"}
        onClick={handleBurgerClick}></button>
    </div>
  );
}

export default HamBurgerBtn;
