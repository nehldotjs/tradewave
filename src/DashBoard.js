import React from "react";
import { Routes, Route } from "react-router-dom";

import "./DashboardScreens/styles/dashboard.css";

import DashNav from "./DashboardScreens/DashNav";
import Deposit from "./DashboardScreens/Deposit";
import Profile from "./DashboardScreens/Profile";
import Referals from "./DashboardScreens/Referals";
import Overview from "./DashboardScreens/Overview";
import Withdraw from "./DashboardScreens/Withdraw";
import Interface from "./DashboardScreens/Interface";
import HeaderNav from "./DashboardScreens/SubComponent/HeaderNav";
import TransactionHistory from "./DashboardScreens/TransactionHistory";

function DashBoard() {
  return (
    <div className="dashboard-main-wrapper">
      <DashNav />

      <div className="dashboard-page">
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/referal" element={<Referals />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/interface" element={<Interface />} />
          <Route path="/history" element={<TransactionHistory />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashBoard;
