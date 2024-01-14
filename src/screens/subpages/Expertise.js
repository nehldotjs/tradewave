import React from "react";
import "./subStyles/expert.css";
import ExpImg from "../../assets/mac1.png";
function Expertise() {
  const ExprtCrdDetails = [
    {
      id: 1,
      header: "Transparent Investment",
      text: "Our transparent investment processes provide a comprehensive overview of how each investment team identifies and executes investment opportunities, along with the anticipated risk/return profile. We firmly believe that unwavering adherence to these guidelines constitutes one of the most potent forms of risk management."
    },
    {
      id: 2,
      header: " ESG Principles",
      text: "As a participant in the United Nations-supported Principles for Responsible Investment (UN PRI) initiative, we are dedicated to responsible investing. Our global team of specialized ESG experts provides valuable recommendations that influence and shape our investment processes."
    },
    {
      id: 3,
      header: "Effective Supervision",
      text: "Our portfolio risk management is reinforced by an autonomous risk and quantitative analytics team. This team collaborates with investment teams to evaluate behavioral biases and various risks. While reporting to senior investment management, an operational risk management function conducts comprehensive risk assessments across the complexity of our operations."
    }
  ];
  return (
    <div className="expertWrapper">
      <div className="expertBackgroundImage">
        <img src={ExpImg} alt="trade-wave-background-image" />
      </div>

      <div className="expertWriteUp">
        <h1>All the Expertise You Anticipate from a Trading Professional</h1>

        <div className="experCardWrapper">
          {ExprtCrdDetails.map((item) => {
            const { id, header, text } = item;
            return (
              <div className="expertCardContainer" key={id}>
                <h3>{header}</h3>
                <div className="hr"></div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
