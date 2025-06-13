import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./subStyles/howtotradde.css";
import conference from "../../assets/group.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import { GoDotFill } from "react-icons/go";

function HowToTrade() {
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
  const tradingCards = [
    {
      id: 1,
      header: "Investment Goals",
      text: "These typically include income generation, capital appreciation, wealth preservation, or speculative growth."
    },
    {
      id: 2,
      header: "Trading Experience",
      text: "Brokers will assess your familiarity with investments, how long you've been trading stocks or options, how frequently you trade annually, and the size of your trades."
    },
    {
      id: 3,
      header: "Financial Background",
      text: "Be prepared to share your financial profile, including annual income, total and liquid net worth, and current employment status."
    },
    {
      id: 4,
      header: "Options Preferences",
      text: "Indicate the types of options you intend to trade—calls, puts, or spreads—and specify if they are covered or uncovered. A covered position means you own the underlying stock, while a naked position leaves it unprotected."
    }
  ];

  return (
    <>
      <div className="exWrapper">
        <div className="examples">
          <div className="exHeader">
            <h4 data-aos="zoom-in-up">A Comprehensive Guide:</h4>
            <h1 data-aos="zoom-in-up">Mastering the Art of Options Trading</h1>
            <div className="exCards" data-aos="zoom-in-up">
              <div className="exCard" data-aos="zoom-in-up">
                <p>
                  Options trading offers sophisticated investors the opportunity
                  to buy or sell assets at a predetermined price by a specific
                  date. Unlike traditional stock trading, it involves advanced
                  strategies and a more complex account setup. Market
                  volatility—driven by events like inflation, geopolitical
                  conflict, and oil price surges—has fueled growing interest in
                  options as both a protective hedge and an income-generating
                  tool. In March 2022 alone, 939 million contracts were traded,
                  marking one of the most active months in history. While
                  options can be speculative, they are often employed to manage
                  risk when markets stagnate or decline.
                </p>
              </div>
              <Link className="gettingStarted" to={"/sign-up"}>
                <h3>Get Startd</h3>
              </Link>
            </div>
          </div>
          <div className="exImage" data-aos="zoom-in-up">
            <img src={conference} alt="" />
          </div>
        </div>
        <div className="exminicards">
          {tradingCards.map((item) => {
            const { text, id, header } = item;
            return (
              <div className="miniCardWrapper" key={id} data-aos="fade-right">
                <h1 className="header">{header}</h1>
                <p className="miniCardWrapper-pTag"> {text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HowToTrade;
