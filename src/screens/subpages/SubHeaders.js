import React from "react";
import "./subStyles/subHeader.css";
import shWaveLine from "../../assets/80493.jpg";

function SubHeaders(prop) {
  const { header, description } = prop;
  return (
    <div className="subHeader-wrapper">
      <div className="sp-overlay">
        
      </div>
      <div className="sh-imageWrapper">
        <img src={shWaveLine} alt="" />
      </div>
      <div className="sh-writeUp">
        <h4>{description}</h4>
        <h1>{header}</h1>
      </div>
    </div>
  );
}

export default SubHeaders;
