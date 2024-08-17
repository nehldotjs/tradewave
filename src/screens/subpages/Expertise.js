import React, { useEffect } from "react";
import "./subStyles/expert.css";
import ExpImg from "../../assets/mac1.png";
import ExpImg1 from "../../assets/rmac1.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Expertise() {
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
        <img
          src={ExpImg}
          className="exprt web"
          alt="trade wave background image"
        />
        <img
          src={ExpImg1}
          className="exprt mobile"
          alt="mobile trade wave background image"
        />
      </div>

      <div className="expertWriteUp">
        <h1 data-aos="zoom-in-up">
          All the Expertise You Anticipate from a Trading Professional
        </h1>

        <div className="experCardWrapper" data-aos="zoom-in-up">
          {ExprtCrdDetails.map((item) => {
            const { id, header, text } = item;
            return (
              <div
                className="expertCardContainer"
                key={id}
                data-aos="zoom-in-up">
                <h2>{header}</h2>
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
