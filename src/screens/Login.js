import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import stockExchangeBckgrndVideo from "../assets/videos/stock-video.mp4";

import { AuthData } from "../Context/AuthContext";

import "../styles/login.css";

import Nav from "../Components/Nav";
import Ent1 from "../assets/focalpoint-sponsor.png";
import Ent2 from "../assets/cloudwatch-sponsor.png";
import Ent3 from "../assets/epicurious-sponsor.png";
import Ent4 from "../assets/acmecorp-sponsor.png";

function Login() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { name } = AuthData();
  const EntList = [Ent1, Ent2, Ent3, Ent4];
  const updateDimensions = () => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Update dimensions on mount
    updateDimensions();
    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", updateDimensions);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const handleLogin = () => {
    console.log("LOGIN");
  };
  const handleForgotPass = () => {
    console.log("FORGET PASSWORD");
  };
  const handleSignUpWithGoogle = () => {
    console.log("CONTINUE WITH GOOGLE");
  };

  return (
    <>
      {/* <Nav /> */}
      <div className="loginWrapper">
        <div className="l-backgroundImage">
          <div className="l-videoOvalay"></div>
          <video loop autoPlay className="l-video">
            <source src={stockExchangeBckgrndVideo} type="video/mp4" />
          </video>
        </div>
        <div className="l-loginForm">
          <div className="l-siteWriteUp">
            <div className="l-text">
              <h1>TRADEWAVE</h1>
              <p>
                Navigating the Market Seas with a Strategy Anchored in Risk
                Management and Profit Potential.
              </p>
            </div>
            <div className="l-sponsors">
              {EntList.map((item, index) => {
                return (
                  <>
                    <img src={item} alt="Trade wave sponsor" />
                  </>
                );
              })}
            </div>
          </div>

          <div className="l-formWrapper">
            <Link to={"/"} className="loginHeader">
              <h1>TRADEWAVE</h1>
            </Link>

            <div className="email">
              <label htmlFor="emailInput">Email Address</label>
              <input type="text" className="loginInput" />
            </div>
            <div className="password">
              <label htmlFor="passwordInput">Password</label>
              <input type="text" className="loginInput" />
            </div>
            <div className="loginBtnWrapper">
              <button onClick={handleLogin}>
                <h3>Login</h3>
              </button>
            </div>

            <div className="otherEntries">
              <div className="forgetPass">
                <button onClick={handleForgotPass}>
                  <p>Forgot password ?</p>
                </button>
              </div>
              <div className="L-hr"></div>
              <div className="googleAuth">
                <button onClick={handleSignUpWithGoogle}>
                  <FcGoogle size={20} color={"orangered"} /> Continue with
                  Google
                </button>
              </div>

              <div className="createAcct">
                <Link className="createAcctBtn" to={"/sign-up"}>
                  <p>Don't have an account? Sign Up</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
