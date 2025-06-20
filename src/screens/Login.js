import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import Ent1 from "../assets/focalpoint-sponsor.png";
import Ent2 from "../assets/cloudwatch-sponsor.png";
import Ent3 from "../assets/epicurious-sponsor.png";
import Ent4 from "../assets/acmecorp-sponsor.png";
import stockExchangeBckgrndVideo from "../assets/videos/stock-video.mp4";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FIREBASE_AUTH, GOOGLE_PROVIDER } from "../Firebase";

import "../styles/login.css";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {
  const [isUserInfo, setIsUserInfo] = useState({ email: "", password: "" });
  const [isPass, setIsPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        isUserInfo.email,
        isUserInfo.password
      );
      navigate("/overview");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
 

  const handleForgotPass = () => {
    console.log("CLICKED FORGOT PASSWORD");
  };

  const EntList = [Ent1, Ent2, Ent3, Ent4];

  return (
    <>
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
              {EntList.map((item, index) => (
                <div key={index}>
                  <img src={item} alt="Trade wave sponsor" />
                </div>
              ))}
            </div>
          </div>

          <div className="l-formWrapper">
            <Link to="/" className="loginHeader">
              <h1>TRADEWAVE</h1>
            </Link>

            <div className="email">
              <label htmlFor="emailInput">Email Address</label>
              <input
                type="email"
                className="email-loginInput"
                value={isUserInfo.email}
                onChange={(e) =>
                  setIsUserInfo({ ...isUserInfo, email: e.target.value })
                }
              />
            </div>

            <div className="password">
              <label htmlFor="passwordInput">Password</label>
              <div className="l-password-input-wrapper">
                <input
                  type={isPass ? "text" : "password"}
                  className="loginInput"
                  value={isUserInfo.password}
                  onChange={(e) =>
                    setIsUserInfo({ ...isUserInfo, password: e.target.value })
                  }
                />
                <button onClick={() => setIsPass(!isPass)}>
                  {!isPass ? (
                    <HiEyeOff className="l-passwordIcon" />
                  ) : (
                    <HiEye className="l-passwordIcon" />
                  )}
                </button>
              </div>
            </div>

            <div className="loginBtnWrapper">
              <button onClick={handleLogin}>
                <h3>Login</h3>
              </button>
            </div>

            <div className="otherEntries">
              <div className="forgetPass">
                <button onClick={handleForgotPass}>
                  <p>Forgot password?</p>
                </button>
              </div>
              <div className="L-hr"></div>

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
