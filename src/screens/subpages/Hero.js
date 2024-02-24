import React from "react";

import "./subStyles/hero.css";
import { Link } from "react-router-dom";

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
            <h2>
              Navigating the Market Seas with a Strategy Anchored in Risk
              Management and Profit Potential.
            </h2>
            <p>
              We view portfolio management as an art beyond mere stock and bond
              acquisitions, devoid of mere speculation. Our approach melds a
              proven 'top-down' investment strategy with personalized planning
              to craft a portfolio uniquely aligned with your enduring financial
              objectives.
            </p>
            <div className="heroAuthButton">
              <Link className="heroAuthBtn herologinBtn" to="/login">
                <h3>Login</h3>
              </Link>
              <Link className="heroAuthBtn herosignUpBtn" to="/sign-up">
                <h3>Register</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
