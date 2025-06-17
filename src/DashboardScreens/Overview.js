import React, { useEffect } from "react";
import "./styles/overview.css";
import styled from "styled-components";

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
            <div className="chartLoader-wrapper">
              <StyledWrapper>
                <div className="loader">
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                </div>
              </StyledWrapper>
            </div>
            <div
              className="tradingChart"
              id="tradingview_widget"
              style={{ flex: 1, margin: "auto" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
  }

  .bar {
    display: inline-block;
    width: 3px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    animation: scale-up4 1s linear infinite;
  }

  .bar:nth-child(2) {
    height: 35px;
    margin: 0 5px;
    animation-delay: 0.25s;
  }

  .bar:nth-child(3) {
    animation-delay: 0.5s;
  }

  @keyframes scale-up4 {
    20% {
      background-color: #ffff;
      transform: scaleY(1.5);
    }

    40% {
      transform: scaleY(1);
    }
  }
`;

export default Overview;
