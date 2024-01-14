import React from "react";
import "./subStyles/moreabout.css";

import { MdOutlineSettingsAccessibility } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { FaPeopleRobbery } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";

function MoreAbout() {
  const moreFeeds = [
    {
      id: 1,
      header: "Customer Support",
      text: "We prioritize a service-oriented approach, allowing us to foresee and adjust to the requirements of our clients and customers by providing considerate, inventive solutions.",
      icon: <MdOutlineSettingsAccessibility size={25} color="inherit" />
    },
    {
      id: 2,
      header: "Outstanding Quality",
      text: "Our aim is to reach beyond, always pursuing excellence, maintaining exceptional performance, and delivering outstanding results for our clients, shareholders, and our company.",
      icon: <RiHandCoinFill size={25} color="inherit" />
    },
    {
      id: 3,
      header: "Honesty and Ethics",
      text: "We commit ourselves to the utmost ethical principles, demanding transparency and attentiveness from our team. We learn from our experiences and make decisions that cultivate a sense of purpose and pride within our organization.",
      icon: <FaPeopleRobbery size={25} color="inherit" />
    },
    {
      id: 4,
      header: "Collaboration and Alliance",
      text: "We place importance on working together and cherishing diversity, nurturing a culture that promotes inclusivity, teamwork, and an entrepreneurial spirit, aiming for excellence both professionally and personally.",
      icon: <RiTeamFill size={25} color="inherit" />
    }
  ];

  return (
    <>
      <div className="m-moreaboutWrapper">
        <div className="m-headerSection">
          <h1>Tradewave</h1>
        </div>
        <div className="m-contentWrapper">
          {moreFeeds.map((item) => {
            const { id, icon, header, text } = item;
            return (
              <div className="m-card" key={id}>
                <div className="m-headerWrapper">
                  <h3>{header}</h3>
                  <div className="iconWrapper">{icon}</div>
                </div>
                <div className="m-writeup">
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
          <div className="m-learnMoreBtn">
            <button>
              <h3>Learn More</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreAbout;
