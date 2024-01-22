import React from "react";
import { Link } from "react-router-dom";
import "../styles/optiontradig.css";

import sideImmg from "../assets/meeting.jpg";

import Footer from "./subpages/Footer";
import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import { Screener, TickerTape } from "react-ts-tradingview-widgets";

function OptionTrading() {
  return (
    <div className="opt-sectionWrapper">
      <Nav />
      <SubHeaders
        header={"Option Trading"}
        description={"Options Unleashed: Trading Your Potential."}
      />
      <div className="opt-section-wrapper">
        <div className="opt-section-1">
          <h1>OPTION TRADING </h1>
          <br />
          <p>
            Options Are A Form Of Derivative Contract That Gives Buyers Of The
            Contracts (The Option Holders) The Right (But Not The Obligation) To
            Buy Or Sell A Security At A Chosen Price At Some Point In The
            Future. Option Buyers Are Charged An Amount Called A Premium By The
            Sellers For Such A Right. Should Market Prices Be Unfavorable For
            Option Holders, They Will Let The Option Expire Worthless And Not
            Exercise This Right, Ensuring That Potential Losses Are Not Higher
            Than The Premium. On The Other Hand, If The Market Moves In The
            Direction That Makes This Right More Valuable, It Makes Use Of It.
            <br />
            <br />
            Options are generally divided into "call" and "put" contracts. With
            a call option, the buyer of the contract purchases the right to buy
            the underlying asset in the future at a predetermined price, called
            exercise price or strike price. With a put option, the buyer
            acquires the right to sell the underlying asset in the future at the
            predetermined price. <br />
            <br /> Let's take a look at some basic strategies that a beginner
            investor can use with calls or puts to limit their risk. The first
            two involve using options to place a direction bet with a limited
            downside if the bet goes wrong. The others involve hedging
            strategies laid on top of existing positions.
          </p>
        </div>
        <div className="opt-section-2">
          <img src={sideImmg} alt="" />
        </div>
      </div>{" "}
      <div className="optt-tradeWave-widget">
        <Screener />
      </div>
      <div className="opt-section-wrapper-2">
        <h1
          style={{
            color: "#1b664d"
          }}>
          Buying Calls - Long Calls
        </h1>
        <p>
          There are some advantages to trading options for those looking to make
          a directional bet in the market. If you think the price of an asset
          will rise, you can buy a call option using less capital than the asset
          itself. At the same time, if the price instead falls, your losses are
          limited to the premium paid for the options and no more. This could be
          a preferred strategy for traders who: Are "bullish" or confident about
          a particular stock, exchange-traded fund (ETF), or index fund and want
          to limit risk Want to utilize leverage to take advantage of rising
          prices Options are essentially leveraged instruments in that they
          allow traders to amplify the potential upside benefit by using smaller
          amounts than would otherwise be required if trading the underlying
          asset itself. So, instead of laying out $10,000 to buy 100 shares of a
          $100 stock, you could hypothetically spend, say, $2,000 on a call
          contract with a strike price 10% higher than the current market price.
        </p>
      </div>
      <div className="opt-section-wrapper-3">
        <div className="opt-card">
          <h2>Buying Puts - Long Puts</h2>
          <p>
            If a call option gives the holder the right to purchase the
            underlying at a set price before the contract expires, a put option
            gives the holder the right to sell the underlying at a set price.
            This is a preferred strategy for traders who:
          </p>
          <div>
            <li>
              Are bearish on a particular stock, ETF, or index, but want to take
              on less risk than with a short-selling strategy
            </li>
            <li>
              Want to utilize leverage to take advantage of falling prices
            </li>
          </div>
          <p>
            A put option works effectively in the exact opposite direction from
            the way a call option does, with the put option gaining value as the
            price of the underlying decreases. Though short-selling also allows
            a trader to profit from falling prices, the risk with a short
            position is unlimited because there is theoretically no limit to how
            high a price can rise. With a put option, if the underlying ends up
            higher than the option's strike price, the option will simply expire
            worthless.
          </p>
        </div>
        <div className="opt-card">
          <h2>Risk/Reward</h2>
          <p>
            The trader's potential loss from a long call is limited to the
            premium paid. Potential profit is unlimited because the option
            payoff will increase along with the underlying asset price until
            expiration, and there is theoretically no limit to how high it can
            go.
          </p>
        </div>
        <div className="opt-card">
          <h2>Covered Calls</h2>
          <p>
            Unlike the long call or long put, a covered call is a strategy that
            is overlaid onto an existing long position in the underlying asset.
            It is essentially an upside call that is sold in an amount that
            would cover that existing position size. In this way, the covered
            call writer collects the option premium as income, but also limits
            the upside potential of the underlying position. This is a preferred
            position for traders who:
          </p>
          <div>
            <li>
              Expect no change or a slight increase in the underlying's price,
              collecting the full option premium
            </li>
            <li>
              Are willing to limit upside potential in exchange for some
              downside protection
            </li>
          </div>
          <p>
            A covered call strategy involves buying 100 shares of the underlying
            asset and selling a call option against those shares. When the
            trader sells the call, the option's premium is collected, thus
            lowering the cost basis on the shares and providing some downside
            protection. In return, by selling the option, the trader is agreeing
            to sell shares of the underlying at the option's strike price,
            thereby capping the trader's upside potential.
          </p>
        </div>
        <div className="opt-card">
          <h2>Protective Puts</h2>
          <p>
            A protective put involves buying a downside put in an amount to
            cover an existing position in the underlying asset. In effect, this
            strategy puts a lower floor below which you cannot lose more. Of
            course, you will have to pay for the option's premium. In this way,
            it acts as a sort of insurance policy against losses. This is a
            preferred strategy for traders who own the underlying asset and want
            downside protection <br />
            <br />
            Thus, a protective put is a long put, like the strategy we discussed
            above; however, the goal, as the name implies, is downside
            protection versus attempting to profit from a downside move. If a
            trader owns shares with a bullish sentiment in the long run but
            wants to protect against a decline in the short run, they may
            purchase a protective put. <br />
            <br />
            If the price of the underlying increases and is above the put's
            strike price at maturity, the option expires worthless and the
            trader loses the premium but still has the benefit of the increased
            underlying price. On the other hand, if the underlying price
            decreases, the trader’s portfolio position loses value, but this
            loss is largely covered by the gain from the put option position.
            Hence, the position can effectively be thought of as an insurance
            strategy. <br />
            <br />
            Buying a straddle lets you capitalize on future volatility but
            without having to take a bet whether the move will be to the upside
            or downside either direction will profit. Here, an investor buys
            both a call option and a put option at the same strike price and
            expiration on the same underlying. Because it involves purchasing
            two at-the-money options, it is more expensive than some other
            strategies.
          </p>
        </div>
      </div>
      <div className="opt-getStarted-Btn">
        <Link className="opt-LinkBtn" to={"/login"}>
          <h3>Get Started</h3>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default OptionTrading;
