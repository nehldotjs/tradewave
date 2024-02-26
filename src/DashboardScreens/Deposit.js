import React from "react";
import "./styles/deposit.css";
import { PropData } from "../Context/PropDataHandler";
import { useAuth } from "../Context/AuthContext";
function Deposit() {
  const { name, userDocuments } = PropData();
  const { text } = useAuth();
  console.log(userDocuments);
  return (
    <div>
      <h1>Deposit</h1>
      <h1>{text}</h1>
      <h1>{name}</h1>
      {userDocuments.map((document, index) => (
        <div key={index}>
          <h2>{document.firstname}</h2>
          <h2>{document.lastname}</h2>
          <h2>{document.country}</h2>
          <h2>{document.state}</h2>
          <h2>{document.email}</h2>
          <h2>{document.userUid}</h2>
        </div>
      ))}
    </div>
  );
}

export default Deposit;
