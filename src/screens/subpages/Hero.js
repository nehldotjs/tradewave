import React from "react";

import "./subStyles/hero.css";
import { Link } from "react-router-dom";
import GetStarted from "../../PropAssets/GetStarted";

function Hero(prop) {
  const { image } = prop;
  return (
    <div className="homeWrapper">
      <div className="heroCotainer">
        <div className="heroContent">
          <div className="heroImageWrapper">
            <img src={image} alt="market" className="stockMarketImage" />
            <div className="overlayDiv"></div>
          </div>
          <div className="heroWriteUp">
            <p>
              "Navigating the Market Seas with a Strategy Anchored in Risk
              Management and Profit Potential."
            </p>
            <div className="heroAuthButton">
              <Link to="/login" className="heroAuthBtn">
                <GetStarted name="Get Started" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
