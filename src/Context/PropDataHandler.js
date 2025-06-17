import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const PropContext = createContext();

// 2. Context Provider
const PropDataHandler = ({ children }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [active, setActive] = useState("Standard");
  const [isLoading, setIsLoading] = useState(false);
  const [isNotifyIcon, setIsNotifyIcon] = useState(false);

  const value = {
    isNavActive,
    setIsNavActive,
    active,
    setActive,
    isLoading,
    setIsLoading,
    isNotifyIcon,
    setIsNotifyIcon
  };

  return <PropContext.Provider value={value}>{children}</PropContext.Provider>;
};

// 3. Custom Hook for using Context
const PropData = () => {
  const context = useContext(PropContext);
  if (!context) {
    throw new Error("usePropData must be used within a PropDataHandler");
  }
  return context;
};

export { PropDataHandler, PropData };
