import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { HiMiniBanknotes } from "react-icons/hi2";

import "./style/headerNav.css";

import { TickerTape } from "react-ts-tradingview-widgets";
import HamBurgerBtn from "./HamBurgerBtn";
import { FIREBASE_AUTH } from "../../Firebase";
import useUserData from "../../Context/UserDataHandler";

function HeaderNav() {
  const [stateActive, setStateActive] = useState(false);
  const [userProps, setUserProps] = useState({
    firstName: ""
  });

  // Fetch user data from Firestore
  const { isUserDetail } = useUserData(); // correct custom hook now
  console.log("isUserDetail:", isUserDetail); // will be null until data loads

  useEffect(() => {
    if (isUserDetail && isUserDetail.firstName) {
      setUserProps({
        firstName: isUserDetail.firstName,
        lastName: isUserDetail.lastName
      });
    }
  }, [isUserDetail]);
  const currentUserName = userProps.firstName ? userProps.firstName : "User";

  const handleImageClick = () => {
    setStateActive((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="dash-headerNav-main">
      <div className="dash-headerNav-section-wrapper">
        <h2>TradeWave</h2>
        <div className="dash-headerNav-section-container">
          <div className="hn-balance-wrapper">
            <div className="hn-b-wrapper">
              <HiMiniBanknotes />
              <h5>
                $ <span>0.00</span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <FaChartLine />
              <h5>
                $ <span>0.00</span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <GiProfit />
              <h5>
                $ <span>0.00</span>
              </h5>
            </div>
          </div>

          <div className="hn-b-wrapper-name">
            <HamBurgerBtn />
            <div className="hn-b-p-name-container">
              <p className="hn-b-p-name">
                <span className="hn-b-p-welcome">Hi, </span>
                {isUserDetail ? currentUserName : "Loading..."}
              </p>
            </div>
            <div className="hn-b-image-wrarpper">
              <button onClick={handleImageClick}>
                <FaUser size={30} className="userIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashBoardSignOutWrapper">
        <button
          className={
            !stateActive ? "dash-logout-btn inactive" : "dash-logout-btn"
          }
          onClick={handleSignOut}>
          Logout
        </button>
      </div>

      <div className="header-tickertape-wrapper">
        <TickerTape />
      </div>
    </div>
  );
}

export default HeaderNav;
