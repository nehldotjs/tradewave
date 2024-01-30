import React from "react";
import { TickerTape, SymbolOverview } from "react-ts-tradingview-widgets";
import fxImg from "../assets/foreign-exchange.jpg";
import "../styles/forex.css";
import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import Footer from "./subpages/Footer";
import GetStartedBtn from "./subpages/GetStartedBtn";

function Forex() {
  return (
    <div className="forex-main-wrapper">
      <Nav />
      <SubHeaders
        description={"Investment Products"}
        header={"FOREIGN EXCHANGE TRADING"}
      />
      <div className="forex-widget-wrapper">
        <SymbolOverview />
      </div>
      <div className="forex-section-wrapper">
        <h2>FOREIGN EXCHANGE</h2>

        <p>
          FOREX, short for Foreign Exchange, stands as the world's largest
          financial asset market. In Forex trading, currencies are exchanged
          globally, boasting a daily trading volume exceeding 5 trillion
          dollars. Operating on a global scale, Forex remains open 24 hours a
          day, five days a week, from Monday through Friday.
        </p>

        <div className="forex-image-wrapper">
          <img src={fxImg} alt="" />
        </div>

        <h2>Market Indices</h2>

        <p>
          Forex trading involves speculating on the fluctuation of exchange
          prices by buying one currency while simultaneously selling another.
          Currency values appreciate or depreciate against each other due to
          various economic, geopolitical, and technical factors. <br />
          <br /> In the realm of cryptocurrencies, aside from the pioneering
          Bitcoin, there are now nearly 3000 different cryptocurrencies.
          Capitalize on the most valuable ones, including Bitcoin, Ethereum,
          Litecoin, and Ripple. Safely store and trade your crypto assets with
          Tradewave.
        </p>
        <GetStartedBtn />
      </div>
      <TickerTape />
      <Footer />
    </div>
  );
}

export default Forex;
