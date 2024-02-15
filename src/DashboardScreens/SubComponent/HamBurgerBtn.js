import React from "react";
import "./style/bbtn.css";
import { PropData } from "../../Context/PropDataHandler";

function HamBurgerBtn() {
  const { isNavActive, setIsNavActive } = PropData();

  const handleBurgerClick = () => {
    setIsNavActive(() => !isNavActive);
  };
  console.log(isNavActive);

  return (
    <div className="hamburgerBtn-wrapper">
      <button onClick={handleBurgerClick}>btn</button>
    </div>
  );
}

export default HamBurgerBtn;
