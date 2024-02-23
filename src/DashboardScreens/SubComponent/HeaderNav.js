import React, { useState } from "react";
import "./style/headerNav.css";

import { TickerTape } from "react-ts-tradingview-widgets";
import HamBurgerBtn from "./HamBurgerBtn";

import { FIREBASE_AUTH } from "../../Firebase";

function HeaderNav() {
  const [stateActive, setStateActive] = useState(false);

  const userPhotoUrl = FIREBASE_AUTH?.currentUser?.photoURL;

  const handleImageClick = () => {
    setStateActive(!stateActive);
  };

  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="dash-headerNav-main">
      <div className="header-tickertape-wrapper">
        <TickerTape />
      </div>
      <div className="dash-headerNav-section-wrapper">
        <h2>TradeWave </h2>
        <div className="dash-headerNav-section-container">
          <div className="hn-balance-wrapper">
            <div className="hn-b-wrapper">
              <p>balance</p>
              <h5>
                $ <span>0.00</span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <p>invested</p>
              <h5>
                $ <span>0.00</span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <p>roi</p>
              <h5>
                $ <span>0.00</span>
              </h5>
            </div>
          </div>
          <div className="hn-b-wrapper-name">
            <HamBurgerBtn />

            <p className="hn-b-p-name">John</p>
            <p className="hn-b-p-name">doe</p>
            <div className="hn-b-image-wrarpper">
              <button onClick={handleImageClick}>
                {
                  <img
                    src={
                      userPhotoUrl
                        ? userPhotoUrl
                        : "https://images.pexels.com/photos/6347705/pexels-photo-6347705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="profile"
                  />
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          stateActive
            ? "dashBoardSignOutWrapper inactive"
            : "dashBoardSignOutWrapper"
        }>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
}

export default HeaderNav;
