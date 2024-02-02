import React from "react";
import "./style/headerNav.css";

import { TickerTape } from "react-ts-tradingview-widgets";

function HeaderNav() {
  return (
    <>
      <div className="dash-headerNav-section-wrapper">
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
            <p className="hn-b-p-name">John</p>
            <p className="hn-b-p-name">doe</p>
            <div className="hn-b-image-wrarpper">
              <img
                src={
                  "https://images.pexels.com/photos/6347705/pexels-photo-6347705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
      <TickerTape />
    </>
  );
}

export default HeaderNav;
