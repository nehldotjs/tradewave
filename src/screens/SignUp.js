import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Country, State } from "country-state-city";

import Nav from "../Components/Nav";
import "../styles/signup.css";

import mainBckImg from "../assets/pamm_levels.jpg";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, db } from "../Firebase";

function SignUp() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [isUserInfo, setIsUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    gender: ""
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [selectedState, setSelectedState] = useState("");

  const updateDimensions = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = () => {
    
    // if (isUserInfo.password === isUserInfo.confirmPassword) {
    //   try {
    //     createUserWithEmailAndPassword(
    //       FIREBASE_AUTH,
    //       isUserInfo.email,
    //       isUserInfo.password
    //     );
    //   } catch (error) {
    //     console.error("Error signineg up:", error);
    //   }
    // } else {
    //   alert("PASSWORD DO NOT MATCH");
    // }

    console.log(
      isUserInfo.email,
      isUserInfo.password,
      isUserInfo.firstName,
      isUserInfo.lastName,
      selectedCountry,
      isUserInfo.state,
      isUserInfo.gender
    );
  };

  return (
    <>
      <Nav />
      <div className="signupWrapper" style={{ height: screenHeight }}>
        <div className="s-backgrounmainimage">
          <img src={mainBckImg} alt="" />
        </div>
        <div className="formWrapper">
          <div className="formContainer">
            <div className="userNames">
              <div className="s-firstName">
                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setIsUserInfo({ ...isUserInfo, firstName: e.target.value })
                  }
                />
              </div>
              <div className="s-lastName">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setIsUserInfo({ ...isUserInfo, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="s-Email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={(e) =>
                  setIsUserInfo({ ...isUserInfo, email: e.target.value })
                }
                id="email"
              />
            </div>

            <div className="s-country">
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="s-state">
              <label htmlFor="state">State</label>
              <select name="state" id="state">
                <option value="" disabled>
                  Select a state
                </option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="s-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={(e) =>
                  setIsUserInfo({ ...isUserInfo, password: e.target.value })
                }
              />
            </div>
            <div className="s-confirmPassword">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                onChange={(e) =>
                  setIsUserInfo({ ...isUserInfo, country: e.target.value })
                }
              />
            </div>
            <div className="s-TcWrapper">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p>
                You agree to <span>Tradewave</span>
                <Link className="s-tcLinkBtn" to={"/Terms-and-condition"}>
                  Terms of use
                </Link>
              </p>
            </div>
            <div className="s-SignUpBtn">
              <button onClick={handleSignUp}>
                <h3>Create Account</h3>
              </button>
            </div>
            <div className="s-LoginWrapper">
              <p>
                Already have an account?
                <Link className="s-tcLoginBtn" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="s-dashWriteUp">
          <h1>
            Experience <span>Increased Flexibility</span>.
          </h1>
        </div>
      </div>
    </>
  );
}

export default SignUp;
