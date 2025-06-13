import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FIREBASE_AUTH } from "./Firebase";
import DashBoard from "./DashBoard";

// Screens
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

const publicRoutes = [
  { path: "/tradewave.github.io/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/about", element: <About /> },
  { path: "/assets", element: <Assets /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/insights", element: <Insigth /> },
  { path: "/real-estate", element: <Estate /> },
  { path: "/fixed-income", element: <Fixed /> },
  { path: "/stock-market", element: <Stock /> },
  { path: "/user-policy", element: <Policy /> },
  { path: "/forex-trading", element: <Forex /> },
  { path: "/crypto-assets", element: <Crypto /> },
  { path: "/terms-and-condition", element: <Tc /> },
  { path: "/private-wealth", element: <Private /> },
  { path: "/retirements", element: <Retirements /> },
  { path: "/financial-planning", element: <Plan /> },
  { path: "/alternatives", element: <Alternatives /> },
  { path: "/option-trading", element: <OptionTrading /> },
  { path: "/infrastructure", element: <Infrastructure /> }
];

function ComponentScreensHandler() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return user ? (
    <DashBoard />
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default ComponentScreensHandler;
