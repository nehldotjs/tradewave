import React from "react";
import "../styles/private.css";

import financeImage from "../assets/finance-meeting.jpg";
import mapImg from "../assets/map.png";

import { TickerTape } from "react-ts-tradingview-widgets";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";
import SubHeaders from "./subpages/SubHeaders";
import Entrepreneurs from "./subpages/Entrepreneurs";
import TickerTapeWidget from "./subpages/TickerTape";

function Private() {
  return (
    <div className="pri-mainWrapper">
      <Nav />
      <SubHeaders
        header={"Private Wealth Management"}
        description={"Wealth, Tailored for You."}
      />
      <TickerTape />

      <div className="priv-SectionWrapper">
        <div className="private-imageHeader-wrapper">
          <img src={financeImage} alt="" />
        </div>
        <div className="private-writeup-section1Wrapper">
          <h1>
            Elevating Financial Collaboration: A Partnership Beyond Your
            Portfolio
          </h1>
          <p>
            Experience Wealthful Living: Our holistic private wealth management
            approach ensures that you and your family can savor your wealth
            today and for generations to come."
          </p>
          <h1>
            Empower Your Finances: Partnering with Financial Thought Leaders on
            Your Team
          </h1>
          <p>
            Expertise in Action: Our Wealth Management Investment Team, sought
            after by national news and media during significant market shifts,
            collaborates with our Private Client Group advisors. Led by our
            Chief Investment Strategist, Brent Schutte, we integrate their
            insights and philosophy into shaping your portfolio.
          </p>
        </div>
        <div className="private-getStarted-Btn">
          <Link className="pri-getStartedBtn" to={"/sign-up"}>
            <h3>Get Started</h3>
          </Link>
        </div>
      </div>

      <Entrepreneurs bckImg={mapImg} />
      <TickerTapeWidget />
      <Footer />
    </div>
  );
}

export default Private;
