import React, { useEffect } from "react";
import "./styles/overview.css";

function Overview() {
  useEffect(() => {
    new window.TradingView.widget({
      container_id: "tradingview_widget", // Matches the div ID
      width: "100%",
      height: "100%",
      symbol: "NASDAQ:AAPL", // Replace with your desired symbol
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark", // Options: "light" or "dark"
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true
    });
  }, []);

  return (
    <div className="overview-main-container">
      <div className="overview-content-wrapper">
        <div className="overview-widget-wrapper">
          <div className="overview-widget">
            <div className="tradingChart"
              id="tradingview_widget"
              style={{ flex: 1, margin: "auto" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
