import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./subStyles/financeControl.css";

// IMPORT SVG
import svg1 from "../../assets/svg/undraw_crypto_portfolio_2jy5.svg";
import svg2 from "../../assets/svg/undraw_goals_re_lu76.svg";
import svg3 from "../../assets/svg/undraw_investing_re_bov7.svg";
import svg4 from "../../assets/svg/undraw_investment_data_re_sh9x.svg";
import svg5 from "../../assets/svg/undraw_all_the_data_re_hh4w.svg";
import svg6 from "../../assets/svg/undraw_statistic_chart_re_w0pk.svg";

import AOS from "aos";
import "aos/dist/aos.css";

import SlickCarousel from "../../DashboardScreens/SubComponent/SlickCarousel";

function FinanceControl() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []);

  const financeCard = [
    {
      id: 1,
      svgImage: svg1,
      header: "International Currency Trading",
      Text: "TradeWave Finance provides a comprehensive range of professional services and facilitates access to the worldwide foreign exchange markets for both commercial and institutional clients."
    },
    {
      id: 2,
      svgImage: svg2,
      header: "Property Investments",
      Text: "As a major global player in real estate investment, we possess and manage iconic properties situated in the most dynamic markets worldwide."
    },
    {
      id: 3,
      svgImage: svg3,
      header: "Public Works and Development",
      Text: "As one of the largest infrastructure investment firms globally, we own and manage assets in utilities, transportation, and energy sectors."
    },
    {
      id: 4,
      svgImage: svg4,
      header: "Stable Yield Investments",
      Text: "Addressing our investors' requirements involves providing a diverse array of fixed income solutions paired with precise global market insights."
    },
    {
      id: 5,
      svgImage: svg5,
      header: "Stock market ",
      Text: "Engaging in stock trading entails the acquisition and disposition of company shares with the aim of capitalizing on daily price fluctuations. Traders meticulously monitor the short-term changes in stock prices, strategically aiming to purchase at low points and sell at higher values."
    },
    {
      id: 6,
      svgImage: svg6,
      header: "Replicated Options Trading",
      Text: "Options represent a type of derivative contract affording contract buyers (option holders) the right, though not the obligation, to buy or sell a security at a predetermined price at a future date. Option purchasers pay a fee known as a premium to the sellers for this granted right."
    }
  ];

  const FinancialCard = ({ id, svgImage, header, Text }) => {
    return (
      <div className="financeCard" key={id}>
        <div className="svgWrapper">
          <img src={svgImage} alt="finance visual" />
        </div>
        <h2>{header}</h2>
        <p>{Text}</p>
      </div>
    );
  };

  return (
    <div className="financePageWrapper">
      <div className="financeHeaderSection" data-aos="zoom-in-up">
        <div className="financeHeaderWriteUp">
          <h1>
            Gain Total <span>Financial Control</span>
          </h1>
          <p>
            Driven by Excellence, Guided by Expertise: Delivering Financial
            Solutions with Precision and Integrity
          </p>
        </div>
        <div className="finceLearnMoreButton">
          <Link className="financeBtn" to="/About">
            <h3>Learn More</h3>
          </Link>
        </div>
      </div>

      <div className="financeCardSection" data-aos="zoom-in-up">
        <SlickCarousel
          data={financeCard}
          render={(item, index) => <FinancialCard key={index} {...item} />}
        />
      </div>
    </div>
  );
}

export default FinanceControl;
