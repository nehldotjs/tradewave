import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
import "../styles/nav.css";

// ASSET IMPORTS

import logo from "../assets/favicon.png";
import AuthButton from "../PropAssets/AuthBtn1";

function Nav() {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [planHover, setPlanHover] = useState(false);
  const [investSubLinks, setInvestSubLinks] = useState(false);

  const handleEnterPlanLinks = () => {
    setPlanHover(true);
  };
  const handleLeavePlanLinks = () => {
    setPlanHover(false);
  };

  const handleInvestSubLinkEnter = () => {
    setInvestSubLinks(true);
  };
  const handleInvestSubLinkLeave = () => {
    setInvestSubLinks(false);
  };

  const planSubLink = [
    { id: 1, name: "PLANNING SERVICES", link: "/financial-planning" },
    { id: 2, name: "ASSETS MANAGEMENT", link: "/Assets" },
    { id: 3, name: "ALTERNATIVE INVESTING", link: "/Alternatives" },
    { id: 4, name: "RETIREMENT PLANNING", link: "/Retirements" },
    { id: 5, name: " PRIVATE WEALTH", link: "/Private-wealth" }
  ];

  const investmentSubLinks = [
    { id: 1, name: "OPTION TRADING", link: "/option-trading" },
    { id: 2, name: " REAL ESTATE", link: "/real-estate" },
    { id: 3, name: "  STOCK MARKET", link: "/stock-market" },
    { id: 4, name: "INFRASTRUCTURE", link: "/Infrastructure" },
    { id: 5, name: "FOREX TRADING", link: "/forex-trading" },
    { id: 6, name: " CRYPTO ASSETS", link: "/crypto-assets" },
    { id: 7, name: " FIXED INCOME", link: "/fixed-income" }
  ];
  const handleNav = () => {
    setIsBurgerMenu(() => (isBurgerMenu ? false : true));
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* MOBILE NAV VERSION  */}

      <div className="nav-burgerBtn">
        <>
          <Link
            onClick={handleClick}
            to="/tradewave.github.io/"
            className="Mobile-logoWrapper">
            <img src={logo} alt="trade wave logo" className="logo" />
            <h2 className="logoHeader">TradeWave</h2>
          </Link>
          <button
            className={!isBurgerMenu ? "burgerBtn" : "burgerBtnAni"}
            onClick={handleNav}></button>
        </>
      </div>
      <div
        style={{
          transform: isBurgerMenu ? "translateX(0px)" : "translateX(100%)"
        }}
        className="nav-mobile-Wrapper">
        <div className="nav-mobile-links-container">
          <div className="mobileLinkWrapper">
            <Link
              onClick={handleClick}
              className="mobile-aboutLink"
              to="/About">
              About
            </Link>

            {planSubLink.map((x) => {
              const { id, name, link } = x;
              return (
                <Link
                  onClick={handleClick}
                  className="nav-sub-Link"
                  to={link}
                  key={id}>
                  {name}
                </Link>
              );
            })}

            {investmentSubLinks.map((x) => {
              const { id, name, link } = x;
              return (
                <Link
                  onClick={handleClick}
                  className="nav-sub-Link"
                  to={link}
                  key={id}>
                  {name}
                </Link>
              );
            })}

            <Link
              onClick={handleClick}
              to="/insights"
              className="mobile-insightLink">
              INSIGHTS
            </Link>
          </div>
        </div>
      </div>

      {/* WEB NAV VERSION  */}
      <div className="navWrapper">
        <Link
          onClick={handleClick}
          to="/tradewave.github.io/"
          className="logoWrapper">
          <img src={logo} alt="trade wave logo" className="logo" />
          <h2 className="logoHeader">TradeWave</h2>
        </Link>

        <div className="linksWrapper">
          <div className="parentSubLinks">
            <button
              className="sublinksHeader"
              onMouseEnter={handleEnterPlanLinks}
              onMouseLeave={handleLeavePlanLinks}>
              PLANNING SERVICES
              <div className="greaterThan">
                <RxDropdownMenu size="20" />
              </div>
            </button>
            {planHover && (
              <div
                className="sublinks"
                onMouseEnter={handleEnterPlanLinks}
                onMouseLeave={handleLeavePlanLinks}>
                {planSubLink.map((x) => {
                  const { id, name, link } = x;
                  return (
                    <>
                      <Link
                        onClick={handleClick}
                        className="sublink"
                        to={link}
                        key={id}>
                        {name}
                      </Link>
                    </>
                  );
                })}
              </div>
            )}
          </div>
          <div className="parentSubLinks">
            <button
              className="sublinksHeader"
              onMouseEnter={handleInvestSubLinkEnter}
              onMouseLeave={handleInvestSubLinkLeave}>
              INVESTMENT PRODUCTS
              <div className="greaterThan">
                <RxDropdownMenu size="20" />
              </div>
            </button>
            {investSubLinks && (
              <div
                className="sublinks"
                onMouseEnter={handleInvestSubLinkEnter}
                onMouseLeave={handleInvestSubLinkLeave}>
                {investmentSubLinks.map((x) => {
                  const { id, name, link } = x;
                  return (
                    <>
                      <Link
                        onClick={handleClick}
                        className="sublink"
                        to={link}
                        key={id}>
                        {name}
                      </Link>
                    </>
                  );
                })}
              </div>
            )}
          </div>
          <Link onClick={handleClick} className="aboutLink" to="/About">
            About
          </Link>
          <Link onClick={handleClick} to="/insights" className="insightLink">
            INSIGHTS
          </Link>
        </div>

        <div className="authBtns">
          <Link to="/login" className="heroAuthBtn">
            <AuthButton name="Login" />
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Nav;
