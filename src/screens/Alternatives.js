import React from "react";
import "../styles/alternative.css";

import cryptoManagement from "../assets/crypto-managemeent.jpg";
import foreignExchange from "../assets/foreign-exchange.jpg";

import cc from "../assets/infrastructure.jpg";
import c1 from "../assets/civil-1.jpg";
import c2 from "../assets/civil-2.jpg";
import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";
import SubHeaders from "./subpages/SubHeaders";
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

        <div className="alt-youtubeAdWrapper">
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/AyAjB88kGnQ?si=z1ZEbzX9haacIxVR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
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
        <div className="altBaseSection-wrapper">
          <div className="alt-institute-wrapper">
            <div className="inst-management alt-mf-custom">
              <h1>Institutional Management</h1>
              <div className="inst-management-writeup-wrapper">
                <p>
                  When you select TRADEWAVE to manage institutional assets, you
                  will discover why we've earned the reputation for solid
                  performance and equally solid relationships. Our stable
                  ownership and strong balance sheet allow us to think
                  long-term, while our dynamic culture inspires long tenures and
                  deep institutional knowledge. And, above all, our high rate of
                  client retention demonstrates that we not only say what we do,
                  we do what we say.
                </p>
                <div className="inst-management-img-wrapper alt-subImages-container">
                  <img src={cryptoManagement} alt="" />
                </div>
              </div>
            </div>
            <div className="int-foreign-wrapper  alt-mf-custom">
              <h1>Foreign Exchange</h1>
              <div className="inst-foreign-writeup-wrapper">
                <p>
                  TRADEWAVE finance offers a broad array of professional
                  services and access to the global foreign exchange markets for
                  commercial and institutional clients. execution and clearing
                  services in virtually all tradable currency pairs and
                  derivative instruments. Currency pair trading, also known as
                  FX or forex (foreign exchange), enables traders to take
                  advantage of increases and decreases in a currency's value.
                  The foreign exchange market is the most liquid in the world,
                  with a daily trading volume of over $5 trillion. We are
                  specialists in leveraged trading, giving you the potential to
                  generate financial returns on both rising and falling prices
                  across FX, market. Whether you're an experienced trader or
                  completely new to it, we're here to help you find freedom in
                  the financial markets.
                </p>
                <div className="inst-foreign-img-wrapper alt-subImages-container">
                  <img src={foreignExchange} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="alt-crypto-assets-wrapper">
          <h2>Crypto Assets</h2>
          <p>
            TRADEWAVE presents a diverse array of cryptocurrencies available for
            trading, each paired with a wide range of currencies. Our platform
            features pairings with prominent cryptocurrencies such as Bitcoin,
            Litecoin, Ripple, TRON, Ethereum, and others. Explore cryptocurrency
            price charts on TRADEWAVE Investing for comprehensive market
            analysis. When engaging in the cryptocurrency market, investors face
            a crucial decision between two primary options. The first involves
            purchasing actual cryptocurrency on exchanges, granting ownership of
            the underlying asset. This approach is deemed a long-term investment
            strategy, as it entails patiently awaiting substantial price
            increases before considering a sale. In alignment with the global
            transition towards sustainable energy sources, TRADEWAVE is at the
            forefront, expanding its coverage to monitor this pivotal evolution.
            We are dedicated to delivering cutting-edge insights and leveraging
            superior capital markets and advisory expertise. Choose TRADEWAVE
            for a professional and insightful approach to navigating the dynamic
            cryptocurrency landscape.
          </p>
          <h3>Committed to fostering sustainable expansion.</h3>
          <p>
            Sustainability and the Energy Transition are pivotal focal points
            within the investment community, influencing virtually every sector.
            At TRADEWAVE, our comprehensive research and thought leadership
            across the firm are key resources as we delve into the realm of
            Sustainability and its profound impact on the business and social
            landscape. We possess specialized expertise in alternative energy,
            mobility technology, biotechnology, synthetic biology, Internet of
            Things, edge computing and 5G, as well as robotics and automation.
            Our leadership in next-generation energy coverage uniquely positions
            us in the domain of Energy Transition. This seamlessly complements
            our well-established proficiency in traditional energy, further
            solidifying our commitment to staying at the forefront of
            transformative developments in the global economic and technological
            landscape.
          </p>
        </div>
        {/* <Carousel /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Alternatives;
