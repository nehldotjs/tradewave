import React, { useState, useEffect } from "react";
import "./style/headerNav.css";

import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { HiMiniBanknotes } from "react-icons/hi2";

  import { db, FIREBASE_AUTH } from "../../Firebase";
import useUserData from "../../Context/UserDataHandler";
import { collection, getDocs, query, where } from "firebase/firestore";

import { TickerTape } from "react-ts-tradingview-widgets";

function HeaderNav() {
  const [stateActive, setStateActive] = useState(false);
  const [userProps, setUserProps] = useState({
    firstName: ""
  });

  const [useCredit, setUserCredit] = useState([]);
  // Fetch user data from Firestore
  const { isUserDetail } = useUserData();

  useEffect(() => {
    if (isUserDetail && isUserDetail.firstName) {
      setUserProps({
        firstName: isUserDetail.firstName,
        lastName: isUserDetail.lastName,
        userUID: isUserDetail.userMainUid
      });
    }
  }, [isUserDetail]);
  const fetchUsers = async () => {
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
      console.error("Error getting documents with condition: ", error);
    }
  };

  useEffect(() => {
    if (userProps.userUID) {
      fetchUsers();
    }
  }, [userProps.userUID]);

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
                ${" "}
                <span>
                  {useCredit.length > 0 ? useCredit[0].balance + 0.0 : "0.00"}
                </span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <FaChartLine />
              <h5>
                ${" "}
                <span>
                  {useCredit.length > 0
                    ? useCredit[0].investment + 0.0
                    : "0.00"}
                </span>
              </h5>
            </div>
            <div className="hn-b-wrapper">
              <GiProfit />
              <h5>
                ${" "}
                <span>
                  {useCredit.length > 0 ? useCredit[0].roi + 0.0 : "0.00"}
                </span>
              </h5>
            </div>
          </div>

          <div className="hn-b-wrapper-name">
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
