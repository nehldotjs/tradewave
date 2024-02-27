import React, { createContext, useContext, useState } from "react";

const PropContext = createContext();
function PropDataHandler({ children }) {
  return (
    <PropContext.Provider value={PropValues()}>{children}</PropContext.Provider>
  );
}

const PropValues = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const name = "Prop Data";

  const result = { name, isNavActive, setIsNavActive };
  return result;
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
