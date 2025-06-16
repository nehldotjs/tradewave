import React, { createContext, useContext, useState } from "react";

const PropContext = createContext();
function PropDataHandler({ children }) {
  return (
    <PropContext.Provider value={PropValues()}>{children}</PropContext.Provider>
  );
}

const PropValues = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [active, setActive] = useState("Standard");
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
    isNavActive,
    setIsNavActive,
    active,
    setActive
  };
};

function PropData() {
  try {
    const x = useContext(PropContext);
    return x;
  } catch (err) {
    console.error(err);
  }
}

export { PropDataHandler, PropData };
