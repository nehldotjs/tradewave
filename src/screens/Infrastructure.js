import React from "react";
import "../styles/infrastructure.css";
import infImg from "../assets/infrastructure.jpg";
import mapImg from "../assets/sv.png";

import { TickerTape } from "react-ts-tradingview-widgets";

import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import Footer from "./subpages/Footer";
import GetStartedBtn from "./subpages/GetStartedBtn";

function Infrastructure() {
  return (
    <div className="inf-main-wrapper">
      <Nav />
      <SubHeaders
        description={"INVESTMENT PRODUCTS"}
        header={"INFRASTRUCTURE"}
      />
      <div className="inf-Widget-wrapper">
        <TickerTape />
      </div>

      <div className="inf-section-wrapper">
        <h1>Wealth Through Infrastructure</h1>
        <div className="inf-imgAndParag">
          <p>
            Our goal is to emerge as the preferred infrastructure partner,
            guiding and overseeing investments with a proven history of
            consistently delivering appealing results to clients. This
            achievement is driven by the dedication of our team, the depth of
            our experience, and the robustness of our global relationships. Our
            specialization lies in specific sectors as we actively pursue and
            secure suitable deals. With a reliable track record spanning market
            cycles, we adhere to a disciplined investment process, prioritizing
            the delivery of long-term value and the preservation of capital
            within resilient capital structures. Our sole objective is to ensure
            predictable outcomes for our clients.
          </p>
          <div className="inf-iAndP-ImageWrapper">
            <img src={infImg} alt="" />
          </div>
        </div>
        <h2>What Makes Infrastructure Essential</h2>
        <p>
          Infrastructure assets play a crucial role by delivering essential
          services that foster economic growth, enhance productivity, and form
          the foundation of societal operations. These include critical
          components such as airports, schools, energy facilities,
          transportation networks, and communication systems.
        </p>
        <div className="mapWrapper">
          <img src={mapImg} alt="" />
        </div>
        <p>
          Additionally, infrastructure exhibits investor-friendly
          characteristics, offering consistent returns across market cycles with
          reduced volatility. It provides stable, long-term yields and serves as
          a valuable element for portfolio diversification.
        </p>
        <h3>A steadfast and seasoned team with a focus on specific sectors.</h3>
        <p>
          Over 55 experienced infrastructure professionals located in USA ,
          Canada and UK. Our stable team is led by founding partners.
        </p>
        <h3>Proactive Core Strategy</h3>
        <p>
          We pinpoint relative value within core assets, leveraging our profound
          sector focus to drive substantial value.
        </p>
        <h3>Dynamic Asset Management</h3>
        <p>
          We derive value through active management, engaging stakeholders, and
          carefully selecting internal management teams. Our approach focuses on
          establishing leadership positions with either control or strong
          influence to create enduring value.
        </p>
        <h3>Quality Pipeline Driven by Targeted Origination</h3>
        <p>
          With our targeted approach, we aspire to present over 210
          opportunities annually. We actively seek opportunities where we can
          distinguish ourselves.
        </p>
        <GetStartedBtn />
      </div>
      <Footer />
    </div>
  );
}

export default Infrastructure;
