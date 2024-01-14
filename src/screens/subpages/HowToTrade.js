import React from "react";
import { Link } from "react-router-dom";
import "./subStyles/howtotradde.css";
import conference from "../../assets/group.jpg";

import { GoDotFill } from "react-icons/go";

function HowToTrade() {
  const traddingCards = [
    {
      id: 1,
      header: "Objectives in Investing:",
      text: "Typically encompassing income, growth, capital preservation, or speculation."
    },
    {
      id: 2,
      header: "Experience in Trading: ",
      text: "The broker will inquire about your investment knowledge, the duration of your involvement in trading stocks or options, the frequency of your trades per year, and the scale of your trading activities."
    },
    {
      id: 3,
      header: "Financial Details:",
      text: "Prepare your personal financial information, including your liquid net worth (or investments readily convertible to cash), annual income, total net worth, and employment details."
    },
    {
      id: 4,
      header: "Preferred Options: ",
      text: " Specify the types of options you wish to trade, such as calls, puts, or spreads, and whether they are covered or naked. In options trading, the seller or writer has an obligation to deliver the underlying stock if the option is exercised. If the writer already owns the underlying stock, the position is considered covered. Conversely, if the option position is left unprotected, it is referred to as naked."
    }
  ];
  return (
    <>
      <div className="exWrapper">
        <h2>A Comprehensive Guide:</h2>
        <div className="examples">
          <div className="exHeader">
            <h1>How to Trade Options in Four Simple Steps </h1>
            <div className="exCards">
              <div className="exCard">
                <p>
                  {" "}
                  Options trading involves the buying or selling of an
                  underlying asset at a pre-negotiated price by a specified
                  future date. Unlike stock trading, where you decide on the
                  number of shares and your broker executes the order at the
                  prevailing market price, options trading is more intricate. It
                  demands a grasp of advanced strategies, and the process of
                  opening an options trading account entails additional steps
                  compared to a typical investment account. <br /> <br />{" "}
                  Navigating the stock options landscape can be more complex
                  than trading stocks, requiring a nuanced understanding of
                  various strategies. In 2022, the stock market has experienced
                  fluctuations influenced by concerns about inflation, Russia's
                  invasion of Ukraine, and escalating oil prices. During
                  volatile market conditions, options trading tends to
                  intensify, as highlighted by Randy Frederick, Managing
                  Director of Trading and Derivatives at the Schwab Center for
                  Financial Research. <br /> <br /> While options can be
                  utilized for speculation and gambling, their primary purpose
                  is often seen as a means to protect against downside risks.
                  According to Randy Frederick, "Options are one way to generate
                  income when the markets aren’t going up." <br /> <br /> The
                  Options Clearing Corporation reported a significant uptick in
                  options trading, with 939 million contracts traded in March
                  2022, marking a 4.5% increase compared to March 2021. This
                  surge made March 2022 the second-highest trading month on
                  record.
                </p>
              </div>
            </div>
            <Link className="gettingStarted" to={"sign-up"}>
              <h3>Get Startd</h3>
            </Link>
          </div>
          <div className="exImage">
            <img src={conference} alt="" />
          </div>
        </div>
        <div className="exminicards">
          {traddingCards.map((item) => {
            const { text, id, header } = item;
            return (
              <div className="miniCardWrapper" key={id}>
                <h2 className="header">{header}</h2>
                <p>
                  <span>
                    <GoDotFill size={"10px"} />
                  </span>
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HowToTrade;
