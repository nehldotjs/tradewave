import React from "react";

import "../styles/Home.css";
import bckGrndImage from "../assets/stock.jpg";
import mapImg from "../assets//map.png";

import Footer from "./subpages/Footer";
import Hero from "./subpages/Hero";
import SubAboutPage from "./subpages/SubAboutPage";
import HowToTrade from "./subpages/HowToTrade";
import TradeWidget from "./subpages/TradeWidget";
import Entrepreneurs from "./subpages/Entrepreneurs";
import TickerTapeWidget from "./subpages/TickerTape";
import Expertise from "./subpages/Expertise";
import FinanceControl from "./subpages/FinanceControl";
import SubscriptionPlan from "./subpages/SubscriptionPlan";
import Responsible from "./subpages/Responsible";
import Research from "./subpages/Research";
import Nav from "../Components/Nav";

function Home() {
  return (
    <div className="homeWrapper">
      <Nav />
      <Hero image={bckGrndImage} />
      <FinanceControl />
      <Expertise />
      <HowToTrade />
      <SubAboutPage />
      <TradeWidget />
      <Entrepreneurs bckImg={mapImg} />
      <TickerTapeWidget />
      <SubscriptionPlan />
      <Responsible />
      <Research />
      <TickerTapeWidget />
      <Footer />
    </div>
  );
}

export default Home;
