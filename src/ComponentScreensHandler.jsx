import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

import Tc from "./screens/Tc";
import Home from "./screens/Home";
import Plan from "./screens/Plan";
import About from "./screens/About";
import Stock from "./screens/Stock";
import Forex from "./screens/Forex";
import Fixed from "./screens/Fixed";
import Login from "./screens/Login";
import Crypto from "./screens/Crypto";
import Estate from "./screens/Estate";
import Assets from "./screens/Assets";
import SignUp from "./screens/SignUp";
import Policy from "./screens/Policy";
import Private from "./screens/Private";
import Insigth from "./screens/Insigth";
import Retirements from "./screens/Retirements";
import Alternatives from "./screens/Alternatives";
import OptionTrading from "./screens/OptionTrading";
import Infrastructure from "./screens/Infrastructure";
import DashBoard from "./DashBoard";

import { FIREBASE_AUTH } from "./Firebase";

function ComponentScreensHandler() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((x) => {
      setUser(x);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <DashBoard />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Assets" element={<Assets />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/insights" element={<Insigth />} />
          <Route path="/real-estate" element={<Estate />} />
          <Route path="/fixed-income" element={<Fixed />} />
          <Route path="/stock-market" element={<Stock />} />
          <Route path="/user-policy" element={<Policy />} />
          <Route path="/forex-trading" element={<Forex />} />
          <Route path="/crypto-assets" element={<Crypto />} />
          <Route path="/Terms-and-condition" element={<Tc />} />
          <Route path="/Private-wealth" element={<Private />} />
          <Route path="/Retirements" element={<Retirements />} />
          <Route path="/financial-planning" element={<Plan />} />
          <Route path="/Alternatives" element={<Alternatives />} />
          <Route path="/option-trading" element={<OptionTrading />} />
          <Route path="/Infrastructure" element={<Infrastructure />} />
        </Routes>
      )}
    </>
  );
}

export default ComponentScreensHandler;
