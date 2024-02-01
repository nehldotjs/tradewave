import React from "react";
import "./styles/overview.css";
import TradeCustomWidget from "./SubComponent/TradeCustomWidget";
import { TickerTape } from "react-ts-tradingview-widgets";

function Overview() {
  return (
    <div className="overview-main-container">
      <TickerTape />
      <div className="overview-widget-wrapper">
        <TradeCustomWidget />
      </div>
    </div>
  );
}

export default Overview;
