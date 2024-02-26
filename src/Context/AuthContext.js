import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value={AuthDataProp()}>{children}</AuthContext.Provider>
  );
}

const AuthDataProp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const text = "AUTH PROPERTY";
  return { isAuthenticated, setIsAuthenticated, text };
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}

export { AuthContextProvider, useAuth };
