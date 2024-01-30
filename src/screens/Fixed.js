import React from "react";
import "../styles/fixed.css";

import mapImg from "../assets//map.png";

import tradesv from "../assets/trade-sv.png";
import Footer from "./subpages/Footer";
import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import GetStartedBtn from "./subpages/GetStartedBtn";
import Entrepreneurs from "./subpages/Entrepreneurs";
function Fixed() {
  return (
    <div className="fixed-main-wrapper">
      <Nav />
      <SubHeaders
        description={
          "Steadfast Returns, Secure Futures: Embrace the Stability of Fixed Income."
        }
        header={"Fixed Income"}
      />
      <div className="fixed-income-main-wrapper">
        <h1>Our Stable Returns</h1>
        <div className="fixed-section-wrapper">
          <div className="fixed-writeUp">
            <p>
              Our objective is to consistently achieve superior results by
              systematically implementing investment themes across various
              securities. We firmly believe that employing a multi-factor
              investment strategy, leveraging the fundamental drivers of
              performance, will yield excess returns that are not correlated
              with other asset classes or traditional fixed-income management
              approaches.
            </p>
            <h2>What Makes Stock Trading Compelling?</h2>
            <p>
              Stocks let you own a piece of a company’s future. They’re
              available for a wide variety of industries so you can tap into
              your knowledge of specific businesses, or help you to diversify
              your portfolio.
            </p>
          </div>
          <div className="fixed-img-wrapper">
            <img src={tradesv} alt="" />
          </div>
        </div>
        <Entrepreneurs bckImg={mapImg} />
        <div className="fixed-section-2">
          <h3>
            Exploring Opportunities in Emerging Markets with Hard Currency
          </h3>
          <p>
            Striving for superior returns, the approach involves discerning
            choices in country, maturity, and currency within both hard and
            local currency markets. Despite incorporating local currency
            investments, the strategy maintains a neutral stance on beta to
            local currency debt, refrains from overarching duration or spread
            timing, and aims for a beta of one concerning its hard currency
            benchmark.
          </p>
          <h3>Worldwide Inclusion: The Global Aggregate Perspective </h3>
          <p>
            Aspiring for additional returns, the strategy focuses on choices in
            country, maturity, credit, and currency. It aligns its credit and
            duration profile with the benchmark, abstaining from involvement in
            duration timing or sector selection.
          </p>
          <h3>
            Navigating Stability: Global Investments in Government Securities{" "}
          </h3>
          <p>
            This strategy aims for superior returns by making strategic choices
            in country, maturity, and currency. It adopts a cautious approach to
            duration timing, focusing on optimizing performance through prudent
            selection rather than extensive timing maneuvers.
          </p>
          <h3>Elevating Returns: Investing in High-Yield Corporates </h3>
          <p>
            This strategy predominantly manifests investment themes through
            selective choices within industries, emphasizing security selection.
            It intentionally avoids involvement in timing decisions related to
            duration and credit.
          </p>
        </div>
        <GetStartedBtn />
      </div>
      <Footer />
    </div>
  );
}

export default Fixed;
