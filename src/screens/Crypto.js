import React from "react";

import "../styles/crypto.css";

import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import Footer from "./subpages/Footer";

function Crypto() {
  return (
    <div className="crypto-main-page">
      <Nav />
      <SubHeaders />
      <div className="crypto-seection-wrapper">
        <h1> CRYPTO ASSETS here </h1>
      </div> 
      <Footer />
    </div>
  );
}

export default Crypto; 
