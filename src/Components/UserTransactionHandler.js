import { useState, useEffect } from "react";

import { FIREBASE_AUTH, db } from "../Firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

function UserTransactionHandler() {
  const [isAmount, setIsAmount] = useState({
    roi: 100,
    inv: 200,
    balance: 300 
  });

  const note = "texting 123";

  const investmentStat = [
    {
      id: 1,
      roi: isAmount.roi
    },
    {
      id: 3,
      balance: isAmount.balance
    },
    {
      id: 2,
      inv: isAmount.inv
    },
    {
      id: 4,
      text: note
    }
  ];
  return { investmentStat, setIsAmount, note };
}

export default UserTransactionHandler;
