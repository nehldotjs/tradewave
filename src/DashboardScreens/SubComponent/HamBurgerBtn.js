import React, { useState } from "react";
import "./style/bbtn.css";

function HamBurgerBtn({ isActive, setIsActive }) {
  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="hamburgerBtn-wrapper">
      <button onClick={handleBurgerClick}>btn</button>
    </div>
  );
}

export default HamBurgerBtn; 
