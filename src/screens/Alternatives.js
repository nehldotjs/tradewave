import React from "react";
import "../styles/alternative.css";

import cc from "../assets/infrastructure.jpg";
import c1 from "../assets/civil-1.jpg";
import c2 from "../assets/civil-2.jpg";
import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";
import SubHeaders from "./subpages/SubHeaders";
import Carousel from "./subpages/Carousel";
import { TickerTape } from "react-ts-tradingview-widgets";

function Alternatives() {
  const infConcepts = [
    {
      id: 1,
      header: "Commodities",
      text: "The Commodities Team at Tradewave aims to generate alpha by employing directional and relative value strategies in both physical and financial commodities markets. Our focus encompasses evaluating opportunities within natural gas, power, crude and refined products, and agriculture, primarily within the regions of North America and Europe.",
      mission:
        "At Tradewave, we employ a comprehensive approach that integrates fundamental research, proprietary analytical methodologies, and quantitative analysis to shape our perspectives. This methodology is complemented by a meticulous understanding of each market we engage in, exemplified by our proficiency in crafting supply and demand balances for every commodity or product. Central to this process is our advanced technology platform, empowering us to swiftly and comprehensively discern patterns within markets or products, conduct scenario analyses, and enhance the overall precision of our perspectives."
    },
    {
      id: 2,
      header: "Credit",
      text: "The credit team at Tradewave aims to generate alpha by emphasizing the interconnected relationships among corporate bonds, convertible bonds, bank debt, credit derivatives, credit indices, and equities.",
      mission:
        "Concentrating predominantly on the U.S. and European corporate landscape, the team's fundamental strategies seamlessly blend structural, statistical, and fundamental approaches to investment across the corporate capital structure."
    }
  ];
  return (
    <div className="alternative-section-wrapper">
      <Nav />
      <SubHeaders
        header={"Alternative Investments"}
        description={
          "Dive into financial possibilities with our investment options – explore alternatives that redefine your wealth journey!"
        }
      />
      <TickerTape />
      <div className="alt-wrapper">
        <div className="alt-header-p">
          <h4>
            As trailblazers in alternative investment, Tradewave boasts a rich
            history of adeptly navigating the intricacies of such strategies.
            Employing long and short positions while carefully managing exposure
            to factors and asset classes, our alternative strategies are crafted
            to pursue returns in diverse market conditions.
            <br />
            {/* <br /> */}
            Choose from our absolute return strategies, designed for zero
            exposure to traditional markets either consistently or on average,
            or explore our total return strategies, maintaining some exposure to
            traditional markets.
          </h4>
        </div>
        <div className="alt-infrastructural">
          <h1>Infrastructure</h1>
          <div className="alt-inf-writeup-wrapper">
            <div className="ins-header-img-wrapper">
              <img src={cc} alt="" />
            </div>
            <div className="ins-parag-container">
              <p>
                As one of the preeminent infrastructure investors globally, our
                prominence extends across the utilities, transport, energy, and
                data infrastructure sectors. With a robust portfolio built on 7
                years of invaluable investment expertise, we offer unparalleled
                exposure to scarce, high-quality businesses fortified by
                formidable barriers to entry. <br />
                <br /> Our strategic investments are directed towards
                infrastructure assets pivotal in delivering essential goods and
                services. From facilitating the movement of passengers and
                freight along toll roads and rail networks to the distribution
                of energy and various products through ports and pipelines, our
                diverse portfolio is a testament to our commitment to critical
                infrastructure development.
              </p>
              <div className="ins-mini-img-wrapper">
                <img src={c1} alt="" />
                <img src={c2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="alt-real-assets-wrapper-container">
          {infConcepts.map((item) => {
            const { id, header, text, mission } = item;
            return (
              <div className="alt-real-assets-wrapper" key={id}>
                <h1>{header}</h1>
                <h3>Our Identity :</h3>
                <p>{text}</p>
                <h3>Our Approach :</h3>
                <p>{mission}</p>
              </div>
            );
          })}
        </div>

        {/* <Carousel /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Alternatives;
