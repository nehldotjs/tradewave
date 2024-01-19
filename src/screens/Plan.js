import React from "react";
import "../styles/plan.css";
import promoImg from "../assets/fastexXalchemy.png"
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import Footer from "./subpages/Footer";
import SubPlans from "./subpages/SubPlans";

function Plan() {
  return (
    <div className="plan-main-wrapper">
      <Nav />
      <SubHeaders
        header={"Wealth Mangement"}
        description={"Planning Service"}
      />
      <SubPlans />
      <div className="promoImageWrapper">
        <img src={promoImg} alt="" />
      </div>
      <Footer />
    </div>
  );
}
export default Plan;
