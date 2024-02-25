import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";

import { Link, useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import "../styles/signup.css";
import mainBckImg from "../assets/pamm_levels.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, db } from "../Firebase";

// import { addDoc, collection, getDoc } from "firebase/firestore";

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
  const [isInput, setIsInput] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    firstName: false,
    lastName: false,
    gender: false
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [stateList, setStateList] = useState([]);

  const navigate = useNavigate();

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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleUserData = async () => {
    try {
      await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        isUserInfo.email,
        isUserInfo.password
      ).then(
        // (cred) => {
        // const result = db.collection("users").doc(cred.user.uid).set({
        //   firstname: isUserInfo.firstName,
        //   lastname: isUserInfo.lastName,
        //   email: isUserInfo.email,
        //   country: selectedCountry,
        //   state: selectedState
        // }

        console.log(
          isUserInfo.firstName,
          isUserInfo.lastName,
          isUserInfo.email,
          selectedCountry,
          selectedState
        )
      );

      navigate("/overview");
    } catch (err) {
      console.error("Error occurred:", err);
    }
  };

  const handleSignUp = () => {
    if (isUserInfo.firstName.length > 0) {
      setIsInput((prevState) => {
        return { ...prevState, firstname: false };
      });
      if (isUserInfo.lastName.length > 0) {
        setIsInput((prevState) => {
          return { ...prevState, lastName: false };
        });
        if (isUserInfo.email.length > 0) {
          setIsInput((prevState) => {
            return { ...prevState, email: false };
          });
          if (isUserInfo.password.length >= 5) {
            if (isUserInfo.confirmPassword === isUserInfo.password) {
              if (isChecked) {
                handleUserData();
              } else {
                alert("MUST ACCEPT OUR TERMS & CONDITION");
              }
            } else {
              alert("PASSWORD DO NOT MATCH");
            }
          } else {
            alert("PASSWORD SHOULD BE ATLEAST 6 CHARACTERS");
          }
        } else {
          setIsInput((prevState) => {
            return { ...prevState, email: true };
          });
        }
      } else {
        setIsInput((prevState) => {
          return { ...prevState, lastName: true };
        });
      }
    } else {
      setIsInput((prevState) => {
        return { ...prevState, firstName: true };
      });
    }
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

            <div className="s-country">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                onChange={handleCountryChange}>
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

            <div className="s-password">
              <label htmlFor="password">Password</label>
              <input
                style={{
                  outline: isInput.password ? "1px solid red" : "none"
                }}
                type="password"
                onChange={(e) =>
                  setIsUserInfo({ ...isUserInfo, password: e.target.value })
                }
              />
            </div>
            <div className="s-confirmPassword">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                style={{
                  outline: isInput.confirmPassword ? "1px solid red" : "none"
                }}
                type="password"
                onChange={(e) =>
                  setIsUserInfo({
                    ...isUserInfo,
                    confirmPassword: e.target.value
                  })
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
