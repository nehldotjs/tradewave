import React, { useState } from "react";
import "./style/bbtn.css";

function HamBurgerBtn(prop) {
  const [isActive, setIsActive] = useState(false);
  const handleBurgerClick = () => {
    setIsActive(() => (isActive ? false : true));
  };
  console.log(isActive);

  return (
    <div className="hamburgerBtn-wrapper">
      <button onClick={handleBurgerClick}>click here</button>
    </div>
  );
}

export default HamBurgerBtn;
