import React, { useEffect, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./DashboardScreens/styles/dashboard.css";

import Deposit from "./DashboardScreens/Deposit";
import Profile from "./DashboardScreens/Profile";
import Referals from "./DashboardScreens/Referals";
import Overview from "./DashboardScreens/Overview";
import Withdraw from "./DashboardScreens/Withdraw";
import Interface from "./DashboardScreens/Interface";
import DashNav from "./DashboardScreens/SubComponent/DashNav";
import HeaderNav from "./DashboardScreens/SubComponent/HeaderNav";
import TransactionHistory from "./DashboardScreens/TransactionHistory";
import Settings from "./DashboardScreens/Settings";
import LoaderScreen from "./PropAssets/LoaderScreen";
import { PropData } from "./Context/PropDataHandler";
import { MdCancel } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

function DashBoard() {
  const { isLoading, isNotifyIcon, setIsNotifyIcon } = PropData();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("redirect")) {
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  const dashboardRoutes = useMemo(
    () => [
      { path: "/overview", element: <Overview /> },
      { path: "/deposit", element: <Deposit /> },
      { path: "/profile", element: <Profile /> },
      { path: "/referal", element: <Referals /> },
      { path: "/withdraw", element: <Withdraw /> },
      { path: "/settings", element: <Settings /> },
      { path: "/interface", element: <Interface /> },
      { path: "/history", element: <TransactionHistory /> }
    ],
    []
  );

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <div className="dashboard-main-wrapper">
      <div className="dashboard-page">
        <HeaderNav />
        <div className="dash-main-content-wrapper">
          <Routes>
            {dashboardRoutes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
      <DashNav />

      <div className={isNotifyIcon ? "dash-notification-wrapper" : "inactive"}>
        <div className="notification-container">
          <div className="notify-cancel-b">
            <button onClick={() => setIsNotifyIcon(false)}>
              <MdCancel className="notify-cancel-btn-icon" />
            </button>
          </div>
          <div className="notify-icon-wrapper">
            <GiCheckMark
              className="confirmed-icon"
              style={{ color: "#7c5dc9", fontSize: "200px" }}
            />
          </div>

          <p>
            Hang tight! We're reviewing your payment and will credit your
            account shortly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
