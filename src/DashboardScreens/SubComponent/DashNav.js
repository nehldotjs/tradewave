import React from "react";
import "./style/DashNav.css";
import { Link } from "react-router-dom";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbBrandCashapp } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { BiHistory } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
// import { FiShield } from "react-icons/fi";

import { PropData } from "../../Context/PropDataHandler";

function DashNav() {
  const { isNavActive } = PropData();
  const navLinks = [
    {
      path: "/tradewave.github.io/",
      icon: <SlGraph />,
      label: "Chart"
    },
    { path: "/deposit", icon: <TbBrandCashapp />, label: "Deposit" },
    { path: "/withdraw", icon: <BiMoneyWithdraw />, label: "Withdraw" },
    { path: "/referal", icon: <FaUsers />, label: "Referrals" },
    { path: "/history", icon: <BiHistory />, label: "Transactions" },
    { path: "/settings", icon: <VscSettings />, label: "Settings" }
  ];

  return (
    <div
      className={
        !isNavActive
          ? "dashnav-main-wrapper isDashActive"
          : "dashnav-main-wrapper"
      }>
      <div className="dashNav-section-wrapper">
        <h2>TradeWave</h2>
        <div className="dashNavLink-Section-Wrapper">
          {navLinks.map(({ path, icon, label }, index) => (
            <Link key={index} className="dn-link" to={path}>
              {icon} <h5>{label}</h5>
            </Link>
          ))}
        </div>
        <p> &copy; 2006 - TradeWave All rights Reserved</p>
      </div>
    </div>
  );
}

export default DashNav;
