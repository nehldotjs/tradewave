import React from "react";
import "./styles/deposit.css";
import { FIREBASE_AUTH, db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Deposit() {
  const q = query(
    collection(db, "users"),
    where("userUid", "==", FIREBASE_AUTH?.currentUser?.uid)
  );

  const querySnapshot = getDocs(q);
  querySnapshot.map((doc) => doc.data());

  return (
    <div>
      <h1>Deposit</h1>
    </div>
  );
}

export default Deposit;
