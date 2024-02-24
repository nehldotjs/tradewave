import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { FaUser } from "react-icons/fa";

import "./style/headerNav.css";

import { TickerTape } from "react-ts-tradingview-widgets";
import HamBurgerBtn from "./HamBurgerBtn";

import { FIREBASE_AUTH } from "../../Firebase";

function HeaderNav() {
  const [stateActive, setStateActive] = useState(false);

  const [userProps, setUserProps] = useState({
    firstName: "",
    lastName: "",
    userPhotoUrl: ""
  });

  useEffect(() => {
    const currentUser = FIREBASE_AUTH.currentUser;

    if (currentUser) {
      const displayName = currentUser.displayName;
      const firstName = displayName ? displayName.split(" ")[0] : "";
      // const lastName = displayName ? displayName.split(" ")[1] : "";

      const photoUrl = currentUser.photoURL;
      setUserProps({
        userPhotoUrl: photoUrl,
        firstName: firstName
        // lastName: lastName
      });
    }
  }, []);

  const handleImageClick = () => {
    setStateActive(!stateActive);
  };

  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut().then(navigate("/login"));
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
            <div className="hn-b-p-name-container">
              <p className="hn-b-p-name">
                <span
                  className="hn-b-p-welcome"
                  style={{ display: "flex", gap: "5px" }}>
                  Welcome
                </span>
                {userProps.firstName}
              </p>
            </div>
            <div className="hn-b-image-wrarpper">
              <button onClick={handleImageClick}>
                {userProps.userPhotoUrl ? (
                  <img src={userProps.userPhotoUrl} alt="profile" />
                ) : (
                  <FaUser className="faUser-icon" />
                )}
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
