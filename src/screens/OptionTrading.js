import React from "react";
import "../styles/optiontradig.css";
import Footer from "./subpages/Footer";
import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";

function OptionTrading() {
  return (
    <div className="opt-sectionWrapper">
      <Nav />
      <SubHeaders
        header={"Option Trading"}
        description={"Options Unleashed: Trading Your Potential."}
      />
      <h1>OPTION TRADING hello world</h1>
      <Footer />
    </div>
  );
}

export default OptionTrading;
