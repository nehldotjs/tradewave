import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FIREBASE_AUTH } from "./Firebase";
import DashBoard from "./DashBoard";
import ControlDash from "./Control-Room/ControlDash";

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
import LoaderScreen from "./PropAssets/LoaderScreen";

// Replace with your actual admin UID
const ADMIN_UID = process.env.REACT_APP_ADMIN_API_KEY;

const publicRoutes = [
  { path: "/", element: <Home /> },
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
  const [user, setUser] = useState(undefined); // Start undefined to detect loading state

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser); // firebaseUser is either object or null
    });

    return unsubscribe; // Clean up
  }, []);

  // Still checking auth state
  if (user === undefined) {
    return (
      <div className="loaderWrapper">
        <LoaderScreen />
      </div>
    );
  }

  // If user is logged in and is the admin, go to Admin Dashboard

  if (user && user.uid === ADMIN_UID) {
    return <ControlDash />;
  }
  // Otherwise show public routes (not logged in)
  if (!user) {
    return (
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    );
  }

  // If user is logged in (but not admin), go to normal Dashboard
  return <DashBoard />;
}

export default ComponentScreensHandler;
