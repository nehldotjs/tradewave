import React, { useEffect } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

import AOS from "aos";
import "aos/dist/aos.css";

function TickerTapeWidget() {
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
    <div data-aos="zoom-in-up">
      <TickerTape symbol="AAPL" locale="en" autosize />
    </div>
  );
}

export default TickerTapeWidget;
