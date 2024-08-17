import React, { useEffect, useRef, memo } from "react";
import "./style/tcw.css";

function TradeCustomWidget() {
  const container = useRef();

  useEffect(() => {
    try {
      // Check if the script is already added to avoid adding it multiple times
      if (container.current.querySelector("script")) {
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(12, 52, 61, 1)",
          "withdateranges": true,
          "range": "ALL",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "calendar": true,
          "support_host": "https://www.tradingview.com"
        }`;
      script.onerror = (e) => {
        console.error("Script load error:", e);
      };
      container.current.appendChild(script);
      // Cleanup function to remove the script if the component unmounts
      return () => {
        container.current.removeChild(script);
      };
    } catch (error) {
      console.error("Error adding script:", error);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}>
      <div
        className="tradingview-widget-container__widget"
        style={{ width: "100%" }}></div>
    </div>
  );
}

export default memo(TradeCustomWidget);
