import React, { createContext, useContext } from "react";


const AuthContextProvider = createContext();

const AuthValues = () => {
  const x = { name: "pixu" };
  return x;
};
function AuthContext({ children }) {
  return (
    <>
      <AuthContextProvider.Provider value={AuthValues()}>
        {children}
      </AuthContextProvider.Provider>
    </>
  );
}

function AuthData() {
  const context = useContext(AuthContextProvider);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthContext, AuthData };
