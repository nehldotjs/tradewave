import React from "react";
import "./subStyles/about.css";

import certificate_file from "../../assets/Docs/Trade-Wave-Certificate.pdf";

function AboutIntroduction(prop) {
  const { image } = prop;
  return (
    <div className="aboutWrapper">
      <h1>Introducing TradeWave</h1>
      <div className="aboutWriteUp">
        <p>
          Welcome to the forefront of global finance with TradeWave, where we
          proudly stand as a leading multi-asset alternative investment firm
          managing an impressive <span>$283 million+</span> in assets. Our
          unwavering commitment surpasses traditional success metrics; we are on
          a mission to create enduring impact for our esteemed investors,
          dynamic teams, flourishing businesses, and the communities we proudly
          call home. Since our inception in 2016, we've redefined asset
          management through an innovative consulting-based approach. Forming
          strategic alliances with management teams, we not only challenge the
          status quo but also spark transformative change. Our vision transcends
          the ordinary – we are creators of greatness, architects of success,
          and champions of operational excellence. This visionary approach has
          organically expanded across diverse asset classes, establishing us as
          the architects of one of the world's most formidable alternative asset
          platforms. Join us on a journey where conviction converges with
          innovation, and where lasting impact becomes the ultimate benchmark of
          success. Invest with TradeWave, and embark on a path where your
          financial aspirations align with a legacy of excellence.
        </p>
        <div className="aboutImage">
          <img src={image} alt="" />{" "}
        </div>
      </div>
      <div className="aboutCertBtn">
        <a
          href={certificate_file}
          download={"3F2D9_TW"}
          className="certificateBtn">
          <h3> View Certificate of Incorporation</h3>
        </a>
      </div>
    </div>
  );
}

export default AboutIntroduction;
