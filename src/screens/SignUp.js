import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Country, State } from "country-state-city";

import mainBckImg from "../assets/pamm_levels.jpg";
import Nav from "../Components/Nav";
import "../styles/signup.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { FIREBASE_AUTH, GOOGLE_PROVIDER, db } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

import AuthButton from "../PropAssets/AuthBtn1";

import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";

function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [stateList, setStateList] = useState([]);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [isPass, setIsPass] = useState({
    password: false,
    confirmPassword: false
  });

  const [isUserInfo, setIsUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    gender: ""
  });

  const [isInput, setIsInput] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    firstName: false,
    lastName: false,
    gender: false
  });

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    const countryStates = State.getStatesOfCountry(selectedCountry);
    setStateList(countryStates);
  }, [selectedCountry]);

  const updateDimensions = () => {
    setScreenHeight(window.innerHeight);
  };

  const countries = Country.getAllCountries();

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    setSelectedState("");
  };

  const handleStateChange = (event) => {
    const stateCode = event.target.value;
    setSelectedState(stateCode);
  };

  const navigate = useNavigate();

  const handleUserData = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        isUserInfo.email,
        isUserInfo.password
      );

      const user = userCredential.user;

      // Create user doc with UID as doc ID
      await setDoc(doc(db, "users", user.uid), {
        firstName: isUserInfo.firstName,
        lastName: isUserInfo.lastName,
        email: isUserInfo.email,
        country: selectedCountry,
        state: selectedState,
        userUid: user.uid
      });

      // Create user portfolio doc with UID as doc ID
      await setDoc(doc(db, "userPortfolio", user.uid), {
        roi: 0,
        balance: 0,
        investment: 0,
        userUid: user.uid
      });

      navigate("/overview");
    } catch (err) {
      console.error("Error occurred:", err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (isUserInfo.firstName.length > 0) {
      setIsInput((prevState) => ({ ...prevState, firstName: false }));

      if (isUserInfo.lastName.length > 0) {
        setIsInput((prevState) => ({ ...prevState, lastName: false }));

        if (isUserInfo.email.length > 0) {
          setIsInput((prevState) => ({ ...prevState, email: false }));

          if (isUserInfo.password.length >= 6) {
            if (isUserInfo.confirmPassword === isUserInfo.password) {
              if (isChecked) {
                if (selectedCountry !== "") {
                  handleUserData();
                } else {
                  alert("Please choose your country");
                }
              } else {
                alert("Must accept our terms and conditions");
              }
            } else {
              alert("Passwords do not match");
            }
          } else {
            alert("Password should be at least six (6) characters");
          }
        } else {
          setIsInput((prevState) => ({ ...prevState, email: true }));
        }
      } else {
        setIsInput((prevState) => ({ ...prevState, lastName: true }));
      }
    } else {
      setIsInput((prevState) => ({ ...prevState, firstName: true }));
    }
  };

  return (
    <>
      <Nav />
      <div className="signupWrapper" style={{ height: screenHeight }}>
        <div className="s-backgrounmainimage">
          <img src={mainBckImg} alt="" />
        </div>

        <div className="s-formWrapper">
          <div className="s-formContainer">
            <div className="userNames">
              <div className="s-firstName">
                <label htmlFor="firstname">First name</label>
                <input
                  style={{
                    outline: isInput.firstName ? "1px solid red" : "none"
                  }}
                  type="text"
                  onChange={(e) =>
                    setIsUserInfo({ ...isUserInfo, firstName: e.target.value })
                  }
                />
              </div>
              <div className="s-lastName">
                <label htmlFor="lastName">Last name</label>
                <input
                  style={{
                    outline: isInput.lastName ? "1px solid red" : "none"
                  }}
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
                style={{
                  outline: isInput.email ? "1px solid red" : "none"
                }}
                type="email"
                onChange={(e) =>
                  setIsUserInfo({ ...isUserInfo, email: e.target.value })
                }
                id="email"
              />
            </div>
            <div className="s-location">
              <div className="s-country">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  onChange={handleCountryChange}>
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="s-state">
                <label htmlFor="state">State</label>
                <select name="state" id="state" onChange={handleStateChange}>
                  <option value="" disabled>
                    Select a state
                  </option>
                  {stateList.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="s-password-wrapper">
              <div className="s-password">
                <label htmlFor="password">Password</label>
                <div className="passwordWrapper">
                  {" "}
                  <input
                    style={{
                      outline: isInput.password ? "1px solid red" : "none"
                    }}
                    type={isPass.password ? "text" : "password"}
                    onChange={(e) =>
                      setIsUserInfo({ ...isUserInfo, password: e.target.value })
                    }
                  />{" "}
                  <div
                    className="passwordView"
                    onClick={() =>
                      setIsPass((prevState) => ({
                        ...prevState,
                        password: !prevState.password
                      }))
                    }>
                    {!isPass.password ? (
                      <HiEyeOff className="passwordIcon" />
                    ) : (
                      <HiEye className="passwordIcon" />
                    )}
                  </div>
                </div>
              </div>
              <div className="s-confirmPassword">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="passwordWrapper">
                  <input
                    style={{
                      outline: isInput.confirmPassword
                        ? "1px solid red"
                        : "none"
                    }}
                    type={isPass.confirmPassword ? "text" : "password"}
                    onChange={(e) =>
                      setIsUserInfo({
                        ...isUserInfo,
                        confirmPassword: e.target.value
                      })
                    }
                  />
                  <div
                    className="passwordView"
                    onClick={() =>
                      setIsPass((prevState) => ({
                        ...prevState,
                        confirmPassword: !prevState.confirmPassword
                      }))
                    }>
                    {!isPass.confirmPassword ? (
                      <HiEyeOff color="black" className="passwordIcon" />
                    ) : (
                      <HiEye color="black" className="passwordIcon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="s-TcWrapper">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p>
                You agree to <span>Tradewave</span>
                <Link className="s-tcLinkBtn" to={"/Terms-and-condition"}>
                  Terms of use
                </Link>
              </p>
            </div>
            <AuthButton name="Sign Up" handleClick={handleSignUp} />
            <div className="s-LoginWrapper">
              <Link className="s-tcLoginBtn" to={"/login"}>
                Already have an account? <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="s-dashWriteUp">
          <h1>
            Experience <span>Increased Flexibility</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default SignUp;
