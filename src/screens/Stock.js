import React from "react";
import "../styles/stock.css";

import mapImg from "../assets//map.png";

import { Screener } from "react-ts-tradingview-widgets";

import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";
import SubHeaders from "./subpages/SubHeaders";
import Entrepreneurs from "./subpages/Entrepreneurs";
import Responsible from "./subpages/Responsible";

function Stock() {
  return (
    <div className="stock-main-wrapper">
      <Nav />
      <SubHeaders
        description={
          "Empower Your Financial Journey with Insightful Investments in the Stock Market."
        }
        header={"Stock market"}
      />
      <div className="stock-widget-wrapper">
        <Screener />
      </div>
      <div className="stock-section-wraper">
        <h4>
          As implied by its name, the stock market serves as a dynamic
          marketplace facilitating the exchange of stocks or shares. Globally,
          numerous stock markets operate, with The London Stock Exchange (LSE)
          standing as the primary exchange in the United Kingdom.
        </h4>
        <h1>Market Indices</h1>
        <p>
          In the creation of a market index, individual company shares are
          amalgamated, with their values aggregated as a weighted average, where
          the influence on the index value is proportionate to the size of the
          company. Typically, companies of comparable size and value are grouped
          together. <br />
          <br /> Market performance is often discussed in terms of being 'up' or
          'down,' a reflection of stock market indices experiencing growth or
          decline. <br />
          <br /> For investors holding shares in a company, dividends become a
          notable aspect. These periodic payments are received as returns on
          investment. In the event of a company's success and sustained profit
          growth, the dividend payout has the potential to increase over time.
        </p>
      </div>
      <Responsible />
      <Entrepreneurs bckImg={mapImg} />
      <Footer />
    </div>
  );
}

export default Stock;
