import React, { useEffect } from "react";
import "./subStyles/tradeWidget.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { ForexCrossRates } from "react-ts-tradingview-widgets";

function TradeWidget() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []);

  return (
    <div className="widgetWrapper" data-aos="zoom-in-up">
      <ForexCrossRates symbol="AAPL" locale="en" autosize />
    </div>
  );
}

export default TradeWidget;
