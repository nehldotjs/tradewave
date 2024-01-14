import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

function TickerTapeWidget() {
  return (
    <div>
      <TickerTape symbol="AAPL" locale="en" autosize />
    </div>
  );
}

export default TickerTapeWidget;
