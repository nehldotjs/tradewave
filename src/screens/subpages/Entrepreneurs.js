import React, { useEffect } from "react";
import "./subStyles/entrepreneurs.css";

import sponsor1 from "../../assets/cloudwatch-sponsor.png";
import sponsor2 from "../../assets/focalpoint-sponsor.png";
import sponsor3 from "../../assets/epicurious-sponsor.png";
import sponsor4 from "../../assets/acmecorp-sponsor.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Entrepreneurs(prop) {
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

  const { bckImg } = prop;
  const sposorImage = [sponsor1, sponsor2, sponsor3, sponsor4];
  return (
    <div className="entrWrapper">
      <div className="entImageWrapper" data-aos="zoom-in-up">
        <img src={bckImg} alt="" />
      </div>
      <div className="entWriteUp">
        <div className="writeupWrapper">
          <h1 data-aos="zoom-in-up">
            Assisting Business Visionaries <span>Worldwide</span>
          </h1>
          <p data-aos="zoom-in-up">
            We actively identify business teams that exhibit cohesion and
            expertise, capable of spearheading projects with the potential for
            sustained financial gains. This approach has solidified our
            reputation as a firm with dependable investment acumen and
            consistent profitability.
          </p>
        </div>
        <div className="sponsors">
          {sposorImage.map((item, index) => {
            return (
              <div className="sponsorWrapper" key={index} data-aos="zoom-in-up">
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Entrepreneurs;
