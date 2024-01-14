import React from "react";
import "../styles/plan.css";

import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import Footer from "./subpages/Footer";
import SubPlans from "./subpages/SubPlans";

function Plan() {
  return (
    <>
      <Nav />
      <SubHeaders
        header={"Wealth Mangement"}
        description={"Planning Service"}
      />
      <SubPlans />
      <Footer />
    </>
  );
}
export default Plan;
