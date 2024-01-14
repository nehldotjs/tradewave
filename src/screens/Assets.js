import React from "react";

import "../styles/assets.css";
import imgBck from "../assets/sv.png";
import moneyImg from "../assets/dollar.jpg";
import mapImg from "../assets//map.png";

import { RiRefund2Line } from "react-icons/ri";
import { AiOutlineFundView } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";

import SubHeaders from "./subpages/SubHeaders";
import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";
import Entrepreneurs from "./subpages/Entrepreneurs";

function Assets() {
  const typeCardsDetails = [
    {
      id: 1,
      header: "Funds for Generating Income",
      text: "These funds serve as a valuable addition to portfolios when investors aim to receive regular distributions or payouts. Distribution payouts may derive from dividends, bonds, or a combination of various asset classes. They can be structured to be consistently regular (occasionally involving a return of capital) or regularly irregular, paying out only what the investment earns.",
      svg: <RiRefund2Line size={40} />
    },
    {
      id: 2,
      header: "Funds Tailored to Risk Preferences",
      text: `These funds typically aim to attain growth and/or income within a defined volatility range. Fund managers utilize various asset classes to balance the fund's risk and return in accordance with the investor's risk tolerance. For instance, investors with low risk tolerance may opt for a "conservative" fund, while those comfortable with more risk might choose "moderate," "aggressive," or "growth" target risk funds.`,
      svg: <AiOutlineFundView size={40} />
    },
    {
      id: 3,
      header: "Funds Aligned with Target Dates",
      text: `These funds are commonly linked to education or retirement planning. Investors select a future target date aligning with a specific financial goal. The funds adhere to a "glide path," gradually adjusting exposure to growth-oriented assets and decreasing equity risk as the specified date approaches.`,
      svg: <AiOutlineFund size={40} />
    },
    {
      id: 4,
      header: "Diversified Portfolio Funds",
      text: `A "fund of funds" is a mutual fund that typically invests in 10-20 mutual funds or ETFs from various asset classes, rather than directly in individual stocks or bonds. These funds provide similar multi-asset advantages to a model portfolio but operate within a unified mutual fund structure. Ongoing allocations are overseen by a portfolio construction expert and managed directly within the mutual fund framework.`,
      svg: <GiPayMoney size={40} />
    }
  ];
  return (
    <div className="assets-mainWrapper">
      <Nav />
      <SubHeaders
        header={"Elevate Your Wealth with Expert Asset Management Solutions."}
        description={"ASSETS MANAGEMENT"}
      />
      <div className="assets-wrapper">
        <div className="asset-header">
          <h1>Real Estate</h1>
        </div>
        <div className="asstes-writeup">
          <div className="assets-description">
            <p>
              As a leading global real estate investor, we own and manage iconic
              properties in dynamic markets across the world. Our extensive
              portfolio spans various sectors such as office, retail,
              multifamily, logistics, hospitality, triple net lease,
              manufactured housing, and student housing assets on five
              continents. With a commitment to delivering stable and growing
              distributions, we prioritize safeguarding investors against
              downside risk. Our diversified assets, both in terms of sector and
              geography, mitigate exposure to fluctuations in any single market,
              ensuring minimal volatility. <br />
              <br /> Through our public and private investment vehicles, we aim
              to achieve exceptional returns by leveraging our operational
              expertise and concentrating on core real estate competencies,
              including leasing, financing, development, design and
              construction, and property and facilities management.
            </p>
          </div>
          <div className="assetsImageWrapper">
            <img src={imgBck} alt="" />
          </div>
        </div>

        <div className="fixedIncome">
          <h2>Fixed Income</h2>
          <p>
            We address investor requirements through a comprehensive array of
            fixed income solutions and focused global market insights. <br />
            <br /> Our adept sales, trading, and analyst teams ensure that we
            stay ahead of the curve, keeping our clients thoroughly informed.
            Leveraging the profound expertise of our Origination team, we form
            strategic partnerships with major corporate clients to meet all
            their capital raising and debt financing requirements.
          </p>
        </div>
        <div className="fixedIncome">
          <h2>What makes Fixed Products a compelling choice?</h2>
          <p>
            Fixed income investment products play a crucial role in numerous
            portfolios, offering diverse opportunities to investors by: <br />
            <br /> 1. Serving as a hedge against market volatility and
            mitigating downside risk. <br />
            2. Establishing a low-risk safe haven for investors with a limited
            risk tolerance. <br />
            3. Facilitating portfolio diversification.
            <br />
            4. Offering a guaranteed return for short-term savings. <br />
            5. Providing a method to preserve retirement assets as investors
            approach retirement age.
          </p>
        </div>
      </div>
      <div className="multi-assets">
        <div className="multi-content-wrapper">
          <h1>Diversified Assets</h1>
          <p>
            The multi-asset approach offers the flexibility to capture returns
            in favorable market conditions while aiming to provide downside
            protection during market downturns. We consider this investment
            management strategy to present an appealing risk/return profile for
            asset allocation. <br />
            <br /> With proficiency across the spectrum of fixed income and
            diverse investment styles, we can leverage insights in investment
            grade, global high yield, structured credit, loans, cocos,
            convertible bonds, and emerging markets. The Tradewave Multi-Asset
            Decision Group, led by a team of experienced investment
            professionals, manages the overall funds.
          </p>
        </div>
        <div className="multi-image-wrapper">
          <img src={moneyImg} alt="" />
        </div>
      </div>
      <Entrepreneurs bckImg={mapImg} />
      <div className="assetsTypes">
        <div className="types-header">
          <h1>Categories of Multi-Asset Funds</h1>
          <p>
            At Tradewave, we provide an array of multi-asset funds designed to
            align with diverse investor objectives.
          </p>
        </div>
        <div className="typesCards">
          {typeCardsDetails.map((item) => {
            const { id, header, text, svg } = item;
            return (
              <div className="t-card" key={id}>
                <div className="t-card-header">
                  <h2>{header}</h2>
                  {svg ? (
                    <div className="t-card-imageWrapper">{svg}</div>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Assets;
