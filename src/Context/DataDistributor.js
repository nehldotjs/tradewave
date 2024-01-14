import React, { createContext, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

const contextValue = () => {
  let text = "hello world";

  
  const result = { text };
  return result;
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
