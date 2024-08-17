import React, { useEffect, useState } from "react";
import "./subStyles/subplan.css";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function SubscriptionPlan() {
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

  const [active, setActive] = useState("Standard");
  const paymentTypes = [
    {
      id: 1,
      tag: "Standard",
      details: [
        {
          header: "CORPORATE PLAN",
          pips: "40% - 45% PIPS",
          planPrice: [
            "minimum:$50,000",
            "maximum:UNLIMITED",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "ULTIMATE PLAN",
          pips: "40% - 45% PIPS",
          planPrice: [
            "minimum:$20,000",
            "maximum:$49,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "PREMIUM PLAN",
          pips: "30% - 35% PIPS",
          planPrice: [
            "minimum:$10,000",
            "maximum:$19,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "MASTER PLAN",
          pips: "25% - 30% PIPS",
          planPrice: [
            "minimum:$5,000",
            "maximum:$9,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "STANDARD PLAN",
          pips: "20% - 25% PIPS",
          planPrice: [
            "minimum:$3,000",
            "maximum:$4,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        }
      ]
    },
    {
      id: 2,
      tag: "Advance",
      details: [
        {
          header: "CORPORATE PLAN",
          pips: "70% - 80% PIPS",
          planPrice: [
            "minimum:$100,000",
            "maximum:UNLIMITED",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "ULTIMATE PLAN",
          pips: "60% - 70% PIPS",
          planPrice: [
            "minimum:$50,000",
            "maximum:$99,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "PREMIUM PLAN",
          pips: "50% - 60% PIPS",
          planPrice: [
            "minimum:$20,000",
            "maximum:$49,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "MASTER PLUS PLAN",
          pips: "40% - 45% PIPS",
          planPrice: [
            "minimum:$10,000",
            "maximum:$19,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "STANDARD PLAN",
          pips: "30% - 40% PIPS",
          planPrice: [
            "minimum:$1,000",
            "maximum:$9,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        }
      ]
    },
    {
      id: 3,
      tag: "nfp",
      details: [
        {
          header: "ULTIMATE PLAN",
          pips: "200% PIPS",
          planPrice: [
            "minimum:$150,000",
            "maximum:UNLIMITED",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "STARTER PLAN",
          pips: "100% - 124% PIPS",
          planPrice: [
            "minimum:$50,000",
            "maximum:$99,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "PREMIUM PLAN",
          pips: "150% PIPS",
          planPrice: [
            "minimum:$100,000",
            "maximum:$149,999",
            "10% Trade Commission",
            "24/7 active support"
          ]
        }
      ]
    },
    {
      id: 4,
      tag: "Btc",
      details: [
        {
          header: "PRO CRYPTO",
          pips: "90% - 95% PIPS",
          planPrice: ["30+ BTC", "10% Trade Commission", "24/7 active support"]
        },
        {
          header: "STANDARD CRYPTO",
          pips: "70% - 75% PIPS",
          planPrice: [
            "5 - 14.9 BTC",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "PREMIUM CRYPTO",
          pips: "80% - 85% PIPS",
          planPrice: [
            "15 - 29.9 BTC",
            "10% Trade Commission",
            "24/7 active support"
          ]
        },
        {
          header: "BASIC CRYPTO",
          pips: "65% - 70% PIPS",
          planPrice: [
            "1 - 1.5 BTC",
            "10% Trade Commission",
            "24/7 active support"
          ]
        }
      ]
    }
  ];

  const handleClick = (tag) => {
    setActive(tag);
  };
  const getDetailsByTag = () => {
    const selectedType = paymentTypes.find((type) => type.tag === active);
    return selectedType ? selectedType.details : [];
  };

  return (
    <div className="suplanWrapper">
      <div className="planTypeBtn">
        {paymentTypes.map(({ id, tag }) => (
          <button
            data-aos="zoom-in-up"
            type="button"
            className={`planBtn ${active === tag ? "active" : ""}`}
            key={id}
            onClick={() => handleClick(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <div className="paymentCards">
        {getDetailsByTag().map((detail, index) => (
          <div className="paymentCard" key={index}>
            <h1 data-aos="zoom-in-up">{detail.header}</h1>
            <div className="pips">
              <h2 data-aos="zoom-in-up">{detail.pips}</h2>
            </div>
            <div className="pricing">
              {detail.planPrice.map((price, i) => (
                <p key={i} data-aos="zoom-in-up">
                  {" "}
                  <GoDotFill
                    color={"black"}
                    size={"12px"}
                    style={{ paddingRight: "5px" }}
                  />
                  {price}
                </p>
              ))}
            </div>
            <Link data-aos="zoom-in-up" className="gh3" to={"/sign-up"}>
              <h3 className="p-gh3">Get Started</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionPlan;
