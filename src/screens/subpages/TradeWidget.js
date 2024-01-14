import React from "react";
import "./subStyles/tradeWidget.css";
// import { Link } from "react-router-dom";

import { ForexCrossRates } from "react-ts-tradingview-widgets";

function TradeWidget() {
  return (
    <div className="widgetWrapper">
      <ForexCrossRates symbol="AAPL" locale="en" autosize />
    </div>
  );
}

export default TradeWidget;
