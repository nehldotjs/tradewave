import React, { useEffect } from "react";
import "./subStyles/expert.css";

import sampleVideo from "../../assets/videos/stock-video.mp4";

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

  const ExpertCrdDetails = [
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
      <div className="expertWriteUp">
        <h1 data-aos="zoom-in-up" className="expert-header">
          Trusted Expertise in Trading{" "}
        </h1>

        <div className="expertCardWrapper" data-aos="zoom-in-up">
          {ExpertCrdDetails.map((item) => {
            const { id, header, text } = item;
            return (
              <div
                className="expertCardContainer"
                key={id}
                data-aos="zoom-in-up">
                <h1>{header}</h1>
                <div className="hr"></div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="video-wrapper">
        <video
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Expertise;
