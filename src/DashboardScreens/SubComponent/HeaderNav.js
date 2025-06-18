import React, { useState, useEffect } from "react";
import "./style/headerNav.css";
import { useNavigate } from "react-router-dom";

import { TickerTape } from "react-ts-tradingview-widgets";

import { FaUser } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { HiMiniBanknotes } from "react-icons/hi2";

import { db, FIREBASE_AUTH } from "../../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import useUserData from "../../Context/UserDataHandler";

function HeaderNav() {
  const [stateActive, setStateActive] = useState(false);
  const [userProps, setUserProps] = useState({
    firstName: "",
    userUID: ""
  });

  const [useCredit, setUserCredit] = useState([]);

  // Get user document directly
  const { userDocument } = useUserData();

  // Set user props when document is available
  useEffect(() => {
    if (userDocument) {
      setUserProps({
        firstName: userDocument.firstName,
        userUID: userDocument.userUid
      });
    }
  }, [userDocument]);

  // Fetch portfolio data when userUID is set
  const fetchUserPortfolio = async () => {
    try {
      const q = query(
        collection(db, "userPortfolio"),
        where("userUid", "==", userProps.userUID)
      );

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setUserCredit(data);
    } catch (error) {
      console.error("Error getting user portfolio: ", error);
    }
  };

  useEffect(() => {
    if (userProps.userUID) {
      fetchUserPortfolio();
    }
  }, [userProps.userUID]);

  const currentUserName = userProps.firstName || "User";
  const navigate = useNavigate();

  const handleImageClick = () => {
    setStateActive((prev) => !prev);
  };

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
                ${" "}
                <span>
                  {useCredit.length > 0
                    ? (useCredit[0].balance || 0).toFixed(2)
                    : "0.00"}
                </span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <FaChartLine />
              <h5>
                ${" "}
                <span>
                  {useCredit.length > 0
                    ? (useCredit[0].investment || 0).toFixed(2)
                    : "0.00"}
                </span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <GiProfit />
              <h5>
                ${" "}
                <span>
                  {useCredit.length > 0
                    ? (useCredit[0].roi || 0).toFixed(2)
                    : "0.00"}
                </span>
              </h5>
            </div>
          </div>

          <div className="hn-b-wrapper-name">
            <div className="hn-b-p-name-container">
              <p className="hn-b-p-name">
                <span className="hn-b-p-welcome">Hi, </span>
                {userDocument ? currentUserName : "Loading..."}
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

      <div className="header-tickertape-wrapper">
        <TickerTape />
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
    </div>
  );
}

export default HeaderNav;
