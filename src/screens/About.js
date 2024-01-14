import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

import "../styles/about.css";
import classConference from "../assets/board.jpg";
import mapImg from "../assets//map.png";

import Footer from "./subpages/Footer";
import Nav from "../Components/Nav";
import Entrepreneurs from "./subpages/Entrepreneurs";
import AboutIntroduction from "./subpages/Introducing";
import MoreAbout from "./subpages/MoreAbout";

function About() {
  return (
    <div className="a-aboutWrapper">
      <Nav />
      <div className="paddingContaine"></div>
      <AboutIntroduction image={classConference} />
      <MoreAbout />
      <Entrepreneurs bckImg={mapImg} />
      <TickerTape />

      <Footer />
    </div>
  );
}

export default About;
