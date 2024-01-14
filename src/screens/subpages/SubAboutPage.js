import React from "react";
import { Link } from "react-router-dom";
import "./subStyles/subaboutpage.css";

import bckimg from "../../assets/mac2.png";

function SubAboutPage() {
  return (
    <div className="subaboutwrapper">
      <div className="subwriteup">
        <h2>
          At TradeWave, we recognize the transformative h2otential of
          decentralized cryptocurrencies like Bitcoin and Ethereum, poised to
          redefine the global perception and utilization of currency. As
          pioneers in this dynamic landscape, we are at the forefront of
          constructing a new financial system in real-time. We firmly believe
          that this emergent global crypto financial system will propel humanity
          into a prosperous future. <br /> <br />
          TradeWave seamlessly integrates the strengths of cryptocurrency and
          the tangible economy, ushering in a qualitatively new level – a
          composite economy. This involves a seamless fusion of rules and
          practices from existing industries, both on a global and local scale.
          By harnessing the collective power of the global community and
          embracing the sharing economy, we aim to dismantle barriers and
          revolutionize outdated and inefficient financial systems. <br />
          <br /> Our overarching vision is to cultivate sustainable wealth and
          income for investors worldwide. Having successfully fulfilled this
          mission for over four years, we are committed to refining our platform
          continually. Each day, we strive to make TradeWave more accessible,
          secure, and lucrative, ensuring our investors benefit from a
          professional and profitable financial experience.
        </h2>
        <div className="getStarted">
          <Link to="/sign-up" className="getStartedBtn">
            <h3 > Get Started</h3>
          </Link>
        </div>
      </div>

      <div className="backgroundtradewallpaer">
        <img src={bckimg} alt="" />
      </div>
    </div>
  );
}

export default SubAboutPage;
