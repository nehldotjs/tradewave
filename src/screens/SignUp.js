import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import Nav from "../Components/Nav";

import { Country, State } from "country-state-city";
import mainBckImg from "../assets/pamm_levels.jpg";

function SignUp() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [selectedState, setSelectedState] = useState("");

  console.log(isChecked);

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
    console.log("SIGN UP BTN");
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
                <input type="text" />
              </div>
              <div className="s-lastName">
                <label htmlFor="lastName">Last name</label>
                <input type="text" />
              </div>
            </div>
            <div className="s-Email">
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className="s-country">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="s-state">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}>
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
              <input type="text" />
            </div>
            <div className="s-confirmPassword">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="text" />
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
                  Login{" "}
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
