import React, { useState } from "react";

import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import ContextTester from "./screens/ContextTester";

import DashBoard from "./DashBoard";

const App = () => {
  const [isUser, setIsUser] = useState(true);

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <AuthContext>
        <Router>
          {isUser ? (
            <Routes>
              <Route path="/" element={<DashBoard />} />
            </Routes>
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
        </Router>
      </AuthContext>
    </div>
  );
};
export default App;
