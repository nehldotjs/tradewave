import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { HiMiniBanknotes } from "react-icons/hi2";

import "./style/headerNav.css";

import { TickerTape } from "react-ts-tradingview-widgets";
import HamBurgerBtn from "./HamBurgerBtn";

import UserDataHandler from "../../Components/UserDataHandler";
import { FIREBASE_AUTH } from "../../Firebase";

function HeaderNav() {
  const [stateActive, setStateActive] = useState(false);
  const [userProps, setUserProps] = useState({
    firstName: "",
    lastName: "",
    userImage: ""
  });

  const { isUserDetail } = UserDataHandler();
  const currentUser = FIREBASE_AUTH?.currentUser;

  useEffect(() => {
    if (currentUser) {
      const displayName = currentUser?.displayName;
      const google_firstName = displayName ? displayName.split(" ")[0] : "";

      const photoUrl = currentUser?.photoURL;

      console.log("Photo URL:", photoUrl); // 👈 This should show your image URL

      setUserProps({
        userImage: photoUrl,
        firstName: google_firstName
      });
    }
  }, [currentUser]);

  const currentUserName = () => {
    const google_name = isUserDetail.firstname;
    const customUserName = userProps.firstName;

    if (currentUser) {
      return google_name ? google_name : customUserName;
    } else {
      return "";
    }
  };

  const handleImageClick = () => {
    setStateActive(!stateActive);
  };

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut().then(() => navigate("/login"));
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
                {currentUserName()}
              </p>
            </div>
            <div className="hn-b-image-wrarpper">
              <button onClick={handleImageClick}>
                {userProps.userImage ? (
                  <img src={userProps.userImage} loading="lazy" alt="profile" />
                ) : (
                  <FaUser size={30} className="userIcon" />
                )}
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
