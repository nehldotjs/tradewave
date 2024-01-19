import React from "react";
import Nav from "../Components/Nav";
import SubHeaders from "./subpages/SubHeaders";
import retirementImage from "../assets/retirement.jpg";
import mapImg from "../assets/map.png";

import "../styles/retirement.css";

import Footer from "./subpages/Footer";
import Entrepreneurs from "./subpages/Entrepreneurs";

function Retirements() {
  return (
    <div style={{ gap: "20px", display: "flex", flexDirection: "column" }}>
      <Nav />
      <SubHeaders
        header={"RETIREMENT PLANNING"}
        description={
          "Secure Tomorrow, Enjoy Today: Mastering Retirement Planning"
        }
      />
      <div className="retirementHeaderContainer">
        <div className="retirementHeader-Image-Wrapper">
          <img src={retirementImage} alt="" />
        </div>
        <h1>Commence strategizing.</h1>
        <p>
          Envision the activities, places, and companions that define your
          post-9–5 life. As employer pensions wane and Social Security faces
          uncertainty, meticulous retirement planning is crucial. At Drett
          Capitals, we empower you to conceptualize your ideal retirement,
          determining the precise financial needs and crafting a strategic
          income plan. By analyzing your expenses, priorities, and aspirations,
          we guide you in optimizing your finances, ensuring you can enjoy a
          well-deserved break when the time comes.
        </p>
        <h1>Sources of Retirement Income: Unraveling the Possibilities</h1>
        <h3>
          Expanding Horizons: Beyond conventional investments, explore
          additional avenues to bolster your retirement funds:
        </h3>
        <ul
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "auto",
            color: "gray"
          }}>
          <li>
            Secure Future Income: Invest today in annuities for a guaranteed
            income later.
          </li>
          <li>
            Beyond securing your loved ones' financial future, leverage living
            benefits from your whole life insurance policy in retirement. Learn
            more about the advantages of Life Insurance.
          </li>
          <li>
            Secure Your Tomorrow: Explore the effectiveness of IRAs and your
            employer's 401(k) plan for today's retirement savings. Discover more
            about the benefits of IRAs and 401(k)s.
          </li>
        </ul>
        <h1>When is the Right Time to Begin Saving for Retirement?</h1>
        <p>
          Beyond 401(k) or IRA: A robust financial plan delves into your
          incoming and required income. Starting early provides ample time to
          build savings, but even with retirement on the horizon, there's still
          time to prepare and take action.
        </p>
        <h1>The Social Security Administration in 2017</h1>
        <p>
          Alarming Reality: 31% of American workers lack dedicated retirement
          savings. Explore alternative avenues beyond traditional investments to
          secure your financial future in retirement.
        </p>
        <h1>Embrace Time as Your Ally</h1>
        <p>
          Unlocking the Power of Time: The impact of starting early on
          retirement savings is profound. Regardless of the rate of return,
          those saving from ages 25–35 will consistently have more by age 60
          than those who start later from ages 35–60. Compounding interest works
          wonders, showing that beginning early leads to greater wealth, even
          with fewer years of saving.
        </p>
      </div>
      <Entrepreneurs bckImg={mapImg} />
      <Footer />
    </div>
  );
}

export default Retirements;
