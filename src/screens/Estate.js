import React from "react";
import "../styles/estate.css";

import mapImg from "../assets//map.png";
import estateImage from "../assets/housing.jpg";

import Nav from "../Components/Nav";
import SubHeader from "../screens/subpages/SubHeaders";
import Footer from "../screens/subpages/Footer";
import Entrepreneurs from "../screens/subpages/Entrepreneurs";
import TickerTapeWidget from "./subpages/TickerTape";

function Estate() {
  return (
    <div className="estate-main-wrapper">
      <Nav />
      <SubHeader
        description="Building Wealth, One Property at a Time – Invest in Your Future with Real Estate."
        header="Real Estate"
      />
      <div className="estate-sections-wrapper">
        <div className="est-image-header-wrapper">
          <img src={estateImage} alt="" />
        </div>
        <div className="estate-section2">
          <h3>Real Estate Investment ?</h3>
          <p>
            Diversify Your Portfolio with Real Estate Excellence: Discover the
            unparalleled benefits of real estate investment, where strategic
            acquisitions pave the way for enduring financial success. Harness
            the stability and resilience of property assets, experiencing
            consistent capital appreciation and the potential for passive income
            streams. Our approach goes beyond mere transactions; it's about
            cultivating a robust investment portfolio tailored to your financial
            goals. With real estate, you gain not only tangible assets but also
            the ability to leverage, ensuring optimized returns on your
            investment. Embrace the security of a tangible asset class,
            shielding your wealth from market volatility. Real estate not only
            preserves capital but has a proven track record of substantial
            appreciation over time. Uncover the potential for tax advantages,
            cash flow, and the satisfaction of being a part of thriving
            communities. Invest wisely, invest in real estate – where financial
            stability meets lasting prosperity.
          </p>
          <h3>What we offer at TradeWave ?</h3>
          <p>
            TradeWave, along with its affiliated entities, boasts a rich
            portfolio encompassing the ownership, development, and management of
            multifamily, office, industrial, retail, and hotel properties across
            the southeastern and southwestern United States. Leveraging an
            extensive network of enduring, strategic relationships, TradeWave
            has consistently identified and capitalized on lucrative real estate
            investment opportunities. <br />
            <br /> Our seasoned team capitalizes on profound industry knowledge
            to establish real estate investment ventures anchored in compelling
            secular trends. We are committed to driving operational enhancements
            that propel income growth across a diverse portfolio exceeding 400
            assets spanning various sectors. With an average of more than two
            decades of experience, our senior team possesses expertise in
            acquisitions, asset management, portfolio management, financing,
            investment sales, investment banking, financial reporting, legal,
            construction management, and development.
          </p>
        </div>
        <h5>
          Real estate trading has a shorter time period during which capital and
          effort are tied up in a property. Depending on market conditions,
          there can be significant returns even on this shorter time frame.
        </h5>
      </div>
      <Entrepreneurs bckImg={mapImg} />
      <TickerTapeWidget />
      <Footer />
    </div>
  );
}

export default Estate;
