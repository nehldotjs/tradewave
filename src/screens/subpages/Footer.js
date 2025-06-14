import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaMapPin,
  FaPhoneAlt,
  FaTelegramPlane,
  FaDiscord
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import "./subStyles/footer.css";
import logo from "../../assets/favicon.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footerWrapper">
      <div className="footer-container">
        <div className="footerlogoWrapper" data-aos="slide-up">
          <img src={logo} className="footerLogo" alt="company logo" />
          <h3 className="foterLogoHeader">TradeWave</h3>
        </div>
        <div className="footerSection" data-aos="slide-up">
          <div className="address section">
            <h4 className="footerHeader">HQ</h4>

            <div className="linkWrapper">
              <FaMapPin className="dot" color="#fff" size={"10px"} />
              <Link
                onClick={handleClick}
                to="/"
                className="footerLink">
                23 Valley Lane, Austin
              </Link>
            </div>
            <div className="linkWrapper">
              <FaPhoneAlt className="dot" color="#fff" size={"10px"} />
              <Link
                onClick={handleClick}
                to="/"
                className="footerLink">
                +1 354 443 8447
              </Link>
            </div>
          </div>
          <div className="support section">
            <h4 className="footerHeader">Customer Support</h4>

            <div className="linkWrapper">
              <GoDotFill className="dot" color="#fff" size={"5px"} />
              <Link
                onClick={handleClick}
                to="/user-policy"
                className="footerLink">
                Privacy Policy
              </Link>
            </div>
            <div className="linkWrapper">
              <GoDotFill className="dot" color="#fff" size={"5px"} />
              <Link
                onClick={handleClick}
                to="/Terms-and-condition"
                className="footerLink">
                Terms & Condition
              </Link>
            </div>
          </div>

          <div className="planning section">
            <h4 className="footerHeader">Planning Service</h4>

            {planSubLink.map((item, index) => {
              const { id, name, link } = item;
              return (
                <div className="linkWrapper" key={index}>
                  <GoDotFill className="dot" color="#fff" size={"5px"} />
                  <Link
                    onClick={handleClick}
                    to={link}
                    id={id}
                    className="footerLink">
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="investment section">
            <h4 className="footerHeader">Inverstment Service</h4>

            {investmentSubLinks.map((item, index) => {
              const { id, name, link } = item;
              return (
                <div className="linkWrapper" key={index}>
                  <GoDotFill className="dot" color="#fff" size={"5px"} />
                  <Link
                    onClick={handleClick}
                    to={link}
                    id={id}
                    className="footerLink">
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="hr" data-aos="fade-up"></div>
      <div className="footerDisclaimer" data-aos="slide-up">
        <p>
          IMPORTANT NOTICE: Engaging in the trading of stocks, stock options,
          cryptocurrencies, and their derivatives carries a significant level of
          risk and may not be suitable for all investors. It's important to note
          that cryptocurrencies are presently not explicitly regulated by any
          U.S. government agency. Past performance does not guarantee future
          results. Tradewave offers support and trading information. Your
          agreement to the terms and conditions is implied by visiting the
          website and accessing our content. The testimonials included in this
          communication were unsolicited and may not be representative of the
          typical experience. Tradewave has not independently verified the
          accuracy of the statements within any testimonial.
        </p>
      </div>

      <div className="subFooter" data-aos="slide-up">
        <div className="footerSocials">
          <Link onClick={handleClick} to="/">
            <FaXTwitter
              color={"white"}
              className="footerSocialLinks"
              size={"15"}
            />
          </Link>
          <Link onClick={handleClick} to="/ ">
            <FaTelegramPlane
              color={"white"}
              className="footerSocialLinks"
              size={"15"}
            />
          </Link>
          <Link onClick={handleClick} to="/">
            <FaFacebookF
              color={"white"}
              className="footerSocialLinks"
              size={"15"}
            />
          </Link>
          <Link onClick={handleClick} to="/">
            <FaDiscord
              color={"white"}
              className="footerSocialLinks"
              size={"15"}
            />
          </Link>
        </div>
        <div className="footerrights">
          <h3> &copy; 2024 - All Rights Reserved</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
