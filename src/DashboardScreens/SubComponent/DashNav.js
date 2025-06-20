import React from "react";
import "./style/DashNav.css";
import { Link } from "react-router-dom";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbBrandCashapp } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { BiHistory } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
 
import { PropData } from "../../Context/PropDataHandler";
import HamBurgerBtn from "./HamBurgerBtn";

function DashNav() {
  const { isNavActive, setIsNavActive } = PropData();
  const navLinks = [
    {
      path: "/overview",
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
            <Link
              key={index}
              className="dn-link"
              to={path}
              onClick={() => setIsNavActive(!isNavActive)}>
              {icon} <h5>{label}</h5>
            </Link>
          ))}
        </div>
        <p> &copy; 2016 - TradeWave All rights Reserved</p>
      </div>

      <div className="handleBurgerBtn">
        <HamBurgerBtn />
      </div>
    </div>
  );
}

export default DashNav;
