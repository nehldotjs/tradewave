import React from "react";
import { AuthData } from "../Context/AuthContext";
function ContextTester() {
  const { name } = AuthData();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default ContextTester;
