import React, { createContext, useContext, useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balanceData, setBalanceData] = useState({
    roi: null,
    investment: null,
    pendingTransactions: []
  });

  const fetchBalanceData = async (userId) => {
    try {
      const roiRef = doc(db, "userTransactions", userId, "balance", "roi");
      const investmentRef = doc(
        db,
        "userTransactions",
        userId,
        "balance",
        "investment"
      );
      const pendingRef = doc(
        db,
        "userTransactions",
        userId,
        "balance",
        "pendingTransactions"
      );

      const roiSnap = await getDoc(roiRef);
      const investmentSnap = await getDoc(investmentRef);
      const pendingSnap = await getDoc(pendingRef);

      setBalanceData({
        roi: roiSnap.exists() ? roiSnap.data() : null,
        investment: investmentSnap.exists() ? investmentSnap.data() : null,
        pendingTransactions: pendingSnap.exists()
          ? pendingSnap.data().transactions
          : []
      });
    } catch (error) {
      console.error("Error fetching balance data:", error);
    }
  };

  const updateBalanceData = async (
    userId,
    roiValue,
    investmentValue,
    pendingTxArray
  ) => {
    try {
      const roiRef = doc(db, "userTransactions", userId, "balance", "roi");
      const investmentRef = doc(
        db,
        "userTransactions",
        userId,
        "balance",
        "investment"
      );
      const pendingRef = doc(
        db,
        "userTransactions",
        userId,
        "balance",
        "pendingTransactions"
      );

      await setDoc(roiRef, { totalRoi: roiValue });
      await setDoc(investmentRef, { totalInvestment: investmentValue });
      await setDoc(pendingRef, { transactions: pendingTxArray });

      // Optionally refetch after update
      fetchBalanceData(userId);
    } catch (error) {
      console.error("Error updating balance data:", error);
    }
  };

  return (
    <BalanceContext.Provider
      value={{ balanceData, fetchBalanceData, updateBalanceData }}>
      {children}
    </BalanceContext.Provider>
  );
};

// Custom Hook
export const useBalance = () => useContext(BalanceContext);
