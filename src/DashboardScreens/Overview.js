import React from "react";
import "./styles/overview.css";
import TradeCustomWidget from "./SubComponent/TradeCustomWidget";

function Overview() { 
  return (
    <div className="overview-main-container">
      <div className="overview-widget-wrapper">
        <TradeCustomWidget />
      </div>
    </div>
  );
}

export default Overview;
