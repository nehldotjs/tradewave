import React, { useEffect } from "react";
import rimge1 from "../../assets/research.jpg";
import rimge2 from "../../assets/cargo.jpg";
import rbckImg from "../../assets/80493.jpg";
import "./subStyles/research.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Research() {
  const card1 = [
    {
      id: 1,
      Headers:
        "Emphasis on Returns Over the Long Term, Considering Risk Adjustments",
      text: "Our teams recognize the significance of pursuing results with superior risk/return characteristics. This emphasis is ingrained in every stage of the investment process."
    },
    {
      id: 2,
      Headers:
        "Portfolios with Strong Conviction and a Focus on Risk Awareness",
      text: "Our emphasis on in-house, security-specific research enables the creation of portfolios with strong conviction and differentiation. Supported by our risk management processes, these procedures offer valuable insights to guide our teams in understanding potential outcomes."
    },
    {
      id: 3,
      Headers: "Expertise in a Specialized Field",
      text: "Our equity teams are spearheaded by seasoned industry veterans, many of whom boast decades of experience overseeing their respective strategies. They tirelessly craft and implement investment processes designed to withstand the challenges presented by dynamic markets."
    }
  ];
  const card2 = [
    {
      id: 1,
      Headers: "Proprietary Research",
      text: "Conducting original research serves as the foundation for effective investment processes. We take pride in undertaking independent, bottom-up research to derive unique insights into companies."
    },
    {
      id: 2,
      Headers: "International Connectivity",
      text: "We take pride in fostering a collaborative culture that transcends our organization. This is manifested in how we openly share our work among investment teams and across various asset classes. Whether through formal collaborations or informal engagements, our research endeavors span the globe. We leverage our collective intellectual capital to deliver maximum benefits to our clients."
    },
    {
      id: 3,
      Headers: "Active Discourse",
      text: "Our culture actively encourages diverse perspectives. Through open exchanges of ideas, our teams refine their investment theses, bringing us closer to identifying the most promising investment ideas."
    }
  ];

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

  return (
    <div className="researchWrapper" data-aos="zoom-in-up">
      <div className="r-section-1" data-aos="zoom-in-up">
        <div className="r-writeup">
          <div className="r-writeupBckImageWrapper">
            <img src={rbckImg} alt="" />
          </div>
          <div className="r-writeUpWrapper">
            <h1>Driven by Research</h1>
            <p>
              In an uncertain environment, the significance of independent,
              bottom-up research and analysis in the investment process becomes
              increasingly crucial. Our organizational structure cultivates a
              research environment marked by dedicated investment teams and
              integrated analysts, empowered to leverage our global reach.
            </p>
          </div>
          <div className="r-writeupImageWrapper">
            <img src={rimge1} alt="" />
          </div>
        </div>
        <div className="r-cards">
          {card1.map((item) => {
            const { id, Headers, text } = item;
            return (
              <div className="cards" key={id} data-aos="zoom-in-up">
                <h3>{Headers}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="r-section-2" data-aos="zoom-in-up">
        <div className="r-writeup" data-aos="zoom-in-up">
          <div className="r-writeupBckImageWrapper">
            <img src={rbckImg} alt="" />
          </div>
          <div className="r-writeUpWrapper">
            <h1>Comprehensive Risk Management</h1>
            <p>
              <span>TRADEWAVE</span> risk management is at the heart of
              everything we do. It starts with clearly defined and transparently
              communicated investment processes, includes formal ESG analysis
              with the support of dedicated specialists, and continues with
              ongoing multiple levels of portfolio and operational oversight.
              The goal is for our portfolio teams to take risk in alignment with
              client expectations.
            </p>
          </div>
          <div className="r-writeupImageWrapper">
            <img src={rimge2} alt="" />
          </div>
        </div>
        <div className="r-cards">
          {card2.map((item) => {
            const { id, Headers, text } = item;
            return (
              <div className="cards" key={id} data-aos="zoom-in-up">
                <h3>{Headers}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Research;
