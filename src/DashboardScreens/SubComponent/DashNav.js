import React from "react";
import "./style/DashNav.css";
import { Link } from "react-router-dom";
import { TbBrandCashapp } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FiShield } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

import { GoHome } from "react-icons/go";

function DashNav() {
  return (
    <div className="dashnav-main-wrapper">
      <div className="dashNav-section-wrapper">
        <h2>TradeWave</h2>
        <div className="dashNavLink-Section-Wrapper">
          <Link className="dn-link" to={"/overview"}>
            <GoHome />
            <h5> Dashboard</h5>
          </Link>

          <div className="hr"></div>

          <Link className="dn-link" to={"/interface"}>
            <SlGraph /> <h5> Trading Interface</h5>
          </Link>
          <Link className="dn-link" to={"/history"}>
            <BiHistory /> <h5> Transaction history</h5>
          </Link>

          <div className="hr"></div>

          <Link className="dn-link" to={"/deposit"}>
            <TbBrandCashapp /> <h5> Deposit</h5>
          </Link>
          <Link className="dn-link" to={"/withdraw"}>
            <BiMoneyWithdraw /> <h5> Withdraw</h5>
          </Link>

          <div className="hr"></div>

          <Link className="dn-link" to={"/2fa"}>
            <FiShield /> <h5> 2FA</h5>
          </Link>
          <Link className="dn-link" to={"/referal"}>
            <FaUsers /> <h5> Referrals</h5>
          </Link>
          <Link className="dn-link" to={"/settings"}>
            <VscSettings /> <h5> Settings</h5>
          </Link>
        </div>
        <p> &copy; 2024 -TradeWave All rights Reserved</p>
      </div>
    </div>
  );
}

export default DashNav;
