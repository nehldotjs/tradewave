import React from "react";
import "./styles/deposit.css";
import { useAuth } from "../Context/AuthContext";

import UserDataHandler from "../Components/UserDataHandler";

function Deposit() {
  const { isUserDetail } = UserDataHandler();
  const { text } = useAuth();

  return (
    <div>
      <h1>Deposit</h1>
      <h1>{isUserDetail.firstname}</h1>
      <h1>{isUserDetail.lastname}</h1>
    </div>
  );
}

export default Deposit;
