import React from "react";
import "./subStyles/subplans.css";
import MobileImg from "../../assets/rightlmg.png";

function SubPlans() {
  const planTypes = [
    {
      id: 1,
      header: "A strategy that empowers you with optimal financial decisions.",
      text: "Your aspirations, our planning expertise. Envisioning a significant future, TRADEWAVE  offers a comprehensive range of financial planning services to turn your big ideas into reality."
    },
    {
      id: 2,
      header: "Financial planning.",
      text: "In the current landscape, having a strategic plan is crucial. Our approach to financial planning not only instills the confidence that you are well-prepared for any situation but is also crafted to guide you toward achieving all your future objectives. Our advisors will craft a customized financial plan encompassing appropriate insurance and investment strategies, enabling you to safeguard what matters most to you. With the top financial strength ratings among all US life insurers1, you can rely on TRADEWAVE to stand by you whenever the need arises. After all, we've maintained our steadfast presence for over 7 years."
    },
    {
      id: 3,
      header: "Our approach to financial planning",
      text: "While some companies specialize solely in insurance or investments, our advisors take a holistic approach, examining your overall financial landscape. They then suggest the most suitable insurance and investment strategies as part of a unified financial plan, tailored to assist you in achieving the lifestyle you've envisioned."
    }
  ];
  return (
    <div className="p-plan-wrapper">
      <div className="sp-mainHeader">
        <h1>Empower Your Wealth Journey with Precision Planning.</h1>
      </div>

      <div className="sp-content-section">
        <div className="sp-writeUp-wrapper">
          {planTypes.map((item) => {
            const { id, text, header } = item;
            return (
              <div className="sp-card" key={id}>
                <h2>{header} </h2>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className="sp-image-wrapper">
          <img src={MobileImg} alt="" />{" "}
        </div>
      </div>
    </div>
  );
}

export default SubPlans;
