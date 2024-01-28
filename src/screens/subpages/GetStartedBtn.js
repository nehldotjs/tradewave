import React from "react";
import { Link } from "react-router-dom";
import "../subpages/subStyles/getStartedPropBtn.css";
function GetStartedBtn() {
  return (
    <div className="getstarted-propBtn">
      <Link to={"/login"} className="gs-prop-link">
        <h3>Get Started</h3>
      </Link>
    </div>
  );
}

export default GetStartedBtn;
