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

  const [userProps, setUserProps] = useState({
    firstName: "",
    userUID: ""
  });

  const [userPending, setUserPending] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const [userTransac, setUserTransac] = useState([]);

  const [sumUserApprovedTransact, setSumUserApprovedTransac] = useState(0);

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

  // Get ALL transactions for user
  const getUserAllTransactions = async (userId) => {
    try {
      const transactionsRef = collection(db, "userTransactions", userId, "transactions");
      const querySnapshot = await getDocs(transactionsRef);

      const allTransactions = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));

      return allTransactions;
    } catch (error) {
      console.error("Error fetching user transactions:", error);
      return []; // Return empty array on failure
    }
  };

  // Get TOTAL pending amount
  const getUserPendingTransactionTotal = async (userId) => {
    try {
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

      return totalPendingAmount;
    } catch (error) {
      console.error("Error fetching pending transactions:", error);
      return 0;
    }
  };

  // ✅ Fixed: Get TOTAL approved (not pending) amount
  const getApprovedTransactionsTotal = async (userId) => {
    try {
      const q = query(
        collection(db, "userTransactions", userId, "transactions"), // Fixed: Proper subcollection path
        where("isPending", "==", false) // Only approved transactions
      );

      const querySnapshot = await getDocs(q);
      let totalAmount = 0;

      querySnapshot.forEach((doc) => {
        totalAmount += Number(doc.data().amount || 0);
      });

      return totalAmount;
    } catch (error) {
      console.error("Error fetching approved transactions:", error);
      return 0;
    }
  };

  // Update balance data
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

      // Refresh local state

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

        getUserAllTransactions,
        getApprovedTransactionsTotal, // Accepts userId now
        getUserPendingTransactionTotal,

        sumUserApprovedTransact,
        setSumUserApprovedTransac,

        userProps, setUserProps,

        userPending, setUserPending,
        userBalance, setUserBalance,
        userTransac, setUserTransac,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

// Custom Hook
export const useBalance = () => useContext(BalanceContext);
