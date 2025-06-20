import React, { createContext, useContext, useState } from "react";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../Firebase";

// Create Context
const BalanceContext = createContext();

// Provider to wrap around your App or part of App
export const BalanceProvider = ({ children }) => {
  const [balanceData, setBalanceData] = useState({
    roi: { totalRoi: 0 },
    investment: { totalInvestment: 0 },
    pendingTransactions: []
  });

  // Fetch 'balance' subcollection data for the user
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

      const [roiSnap, investmentSnap, pendingSnap] = await Promise.all([
        getDoc(roiRef),
        getDoc(investmentRef),
        getDoc(pendingRef)
      ]);

      setBalanceData({
        roi: roiSnap.exists() ? roiSnap.data() : { totalRoi: 0 },
        investment: investmentSnap.exists()
          ? investmentSnap.data()
          : { totalInvestment: 0 },
        pendingTransactions: pendingSnap.exists()
          ? pendingSnap.data().transactions
          : []
      });
    } catch (error) {
      console.error("Error fetching balance data:", error);
    }
  };

  const getUserPendingTransactionTotal = async (userId) => {
    try {
      // Query all transactions under userTransactions/{userId}/transactions where isPending == true
      const pendingQuery = query(
        collection(db, "userTransactions", userId, "transactions"),
        where("isPending", "==", true)
      );

      const querySnapshot = await getDocs(pendingQuery);
      let totalPendingAmount = 0;

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        totalPendingAmount += Number(data.amount || 0);
      });

      console.log(
        `Total Pending Amount for user ${userId}: $${totalPendingAmount}`
      );
      return totalPendingAmount;
    } catch (error) {
      console.error("Error fetching pending transactions:", error);
      return 0;
    }
  };
  const getBalanceTransactionTotal = async (userId) => {
    try {
      // Query all transactions under userTransactions/{userId}/transactions where isPending == true
      const pendingQuery = query(
        collection(db, "userTransactions", userId, "transactions"),
        where("isPending", "==", false)
      );

      const querySnapshot = await getDocs(pendingQuery);
      let totalPendingAmount = 0;

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        totalPendingAmount += Number(data.amount || 0);
      });

      console.log(
        `Total Pending Amount for user ${userId}: $${totalPendingAmount}`
      );
      return totalPendingAmount;
    } catch (error) {
      console.error("Error fetching pending transactions:", error);
      return 0;
    }
  };

  // Update 'balance' subcollection data for the user
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

      // Refresh the local state
      fetchBalanceData(userId);
    } catch (error) {
      console.error("Error updating balance data:", error);
    }
  };

  return (
    <BalanceContext.Provider
      value={{
        balanceData,
        fetchBalanceData,
        updateBalanceData,

        getUserPendingTransactionTotal,
        getBalanceTransactionTotal
      }}>
      {children}
    </BalanceContext.Provider>
  );
};

// Custom Hook
export const useBalance = () => useContext(BalanceContext);
