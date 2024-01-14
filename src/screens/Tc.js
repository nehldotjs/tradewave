import React from "react";
import "../styles/tc.css";
import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";

import certSvg from "../assets/svg/accounts-award.svg";

function Tc() {
  return (
    <div style={{ width: "100%", height: "auto", backgroundColor: "black" }}>
      <Nav />
      <div className="tc-wracpper">
        <h1>
          <span>TRADEWAVE</span> Terms and Condition
        </h1>

        <p>
          <div className="tc-certWrapper">
            <img src={certSvg} alt="" />
          </div>
          Welcome to <span>TradeWave</span> Asset Management's official website,
          representing a global community of individuals united under the
          umbrella of <span>TradeWave</span>. <br />
          <br /> Your use of this platform signifies your acknowledgment and
          acceptance of the terms outlined herein. It is imperative to
          thoroughly review and comprehend these terms before proceeding. If you
          dissent from these terms, refrain from using the website or accessing
          any associated information.
          <br />
          <br /> <span>TradeWave</span>, comprised of international experts in
          project management and financial markets, collaborates with a highly
          skilled educational team. Our collective mission is to empower
          individuals worldwide, fostering success through cutting-edge
          technology and a professional commitment to realizing their
          objectives.
          <br />
          <br /> User engagement on this platform, effective from the active
          date onward, necessitates adherence to these Policies and Procedures.
          This amalgamation, along with the <span>TradeWave</span> Reward Plan,
          constitutes a legally binding contract between each User and{" "}
          <span>TradeWave</span>, governing their respective obligations.
          <br />
          <br /> Upon acceptance of these Terms, Policies, and Conditions during
          the online enrollment process, a User affirms their age of 18 or
          older, demonstrating the competence to enter into a contractual
          agreement. Users willingly forge this Contract with{" "}
          <span>TradeWave</span>, trusting in our ethical standards, integrity,
          and commitment to fair dealings.
          <br />
          <br /> <span>TradeWave</span> undertakes this Contract with the
          understanding that our collective prosperity hinges on the
          responsible, dynamic, and prosperous endeavors of Users.
          <br />
          <br /> We anticipate that Users will conduct their activities with
          utmost honesty, steering clear of false, slanderous, deceptive, or
          misleading practices in advertising, marketing, pricing, and service
          delivery.
          <br />
          <br /> In joining this Contract, <span>TradeWave</span> expresses
          confidence in the integrity, capabilities, duties, obligations, and
          responsibilities of our esteemed Users. Together, let us embark on a
          journey marked by trust, professionalism, and shared success.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Tc;
