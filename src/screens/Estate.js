import React from "react";
import "../styles/estate.css";

import Nav from "../Components/Nav";
import SubHeader from "../screens/subpages/SubHeaders";
import Footer from "../screens/subpages/Footer";

function Estate() {
  return (
    <div className="estate-main-wrapper">
      <Nav />
      <SubHeader
        description="Building Wealth, One Property at a Time – Invest in Your Future with Real Estate."
        header="Real Estate"
      />
      <h1>REAL ESTATE here</h1>
      <Footer />
    </div>
  );
}

export default Estate;
