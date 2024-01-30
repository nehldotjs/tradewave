import React from "react";
import "./styles/DashNav.css";
import { Link } from "react-router-dom";

function DashNav() {
  return (
    <div className="dashnav-main-wrapper">
      <h1>nav links</h1>
      <div className="dashNavLink-Section-Wrapper">
        <Link to={"/overview"} />
      </div>
    </div>
  );
}

export default DashNav;
