import React, { useState, useEffect } from "react";
import "./style/headerNav.css";
import { useNavigate } from "react-router-dom";

import { TickerTape } from "react-ts-tradingview-widgets";

import { FaUser } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { HiMiniBanknotes } from "react-icons/hi2";

import { FIREBASE_AUTH } from "../../Firebase";

import useUserData from "../../Context/UserDataHandler";
import { useBalance } from "../../Context/BalanceProvider";

function HeaderNav() {
  const [stateActive, setStateActive] = useState(false);
  const { userDocument } = useUserData();
  const {
    balanceData,
    fetchBalanceData,
    userProps, setUserProps,

    userPending, setUserPending,
    userBalance, setUserBalance,



    sumUserApprovedTransact,
    setSumUserApprovedTransac,

    getApprovedTransactionsTotal,
    getUserPendingTransactionTotal,
  } = useBalance();

  useEffect(() => {
    if (userDocument) {
      setUserProps({
        firstName: userDocument.firstName,
        userUID: userDocument.userUid
      });


    }
  }, [userDocument]);

  useEffect(() => {
    if (userProps.userUID) {
      fetchBalanceData(userProps.userUID);

      getApprovedTransactionsTotal(userProps.userUID).then((total) => {
        setSumUserApprovedTransac(total);
      });

      getUserPendingTransactionTotal(userProps.userUID).then((total) => {
        setUserPending(total);
      });
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
                $ <span className="mainBalance">{sumUserApprovedTransact} </span>
              </h5>
            </div>

            <div className="hn-b-wrapper">
              <FaChartLine />
              <h5>
                $
                <span className="roiContainer">
                  {balanceData.roi ? balanceData.roi.totalRoi : "0.00"}
                </span>
              </h5>
            </div>

            <div className="hn-b-wrapper">
              <GiProfit />
              <h5>
                $ <span className="userPending">{userPending}</span>
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
