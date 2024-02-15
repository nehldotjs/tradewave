import React, { createContext, useContext, useState } from "react";

const PropContext = createContext();

function PropDataHandler({ children }) {
  const propValues = PropValues();
  return (
    <PropContext.Provider value={propValues}>{children}</PropContext.Provider>
  );
}

const PropValues = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const x = { isNavActive, setIsNavActive };
  return x;
};

function PropData() {
  const context = useContext(PropContext);
  if (!context) {
    throw new Error("PropData must be used within a PropDataHandler");
  }
  return context;
}

export { PropDataHandler, PropData };
