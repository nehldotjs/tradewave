
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/control.css";

import { db,  } from "../Firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  query,
  where
} from "firebase/firestore";

import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";

import { PropData } from "../Context/PropDataHandler";

const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const { setIsLoading } = PropData();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const snapshot = await getDocs(collection(db, collectionName));
        const collectionData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(collectionData);
      } catch (err) {
        console.error(`Error fetching ${collectionName}:`, err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [collectionName, setIsLoading]);

  return data;
};

const fetchAllTransactions = async () => {
  try {
    // Step 1: Get all users
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    const allTransactions = [];

    // Step 2: For each user, get their subcollection transactions
    for (const user of users) {
      const transactionsRef = collection(
        db,
        "userTransactions",
        user.id,
        "transactions"
      );
      const transactionsSnapshot = await getDocs(transactionsRef);

      const userTransactions = transactionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        uid: user.id, // attach user ID to each transaction
        ...doc.data()
      }));

      allTransactions.push(...userTransactions); // add to final result
    }

    return allTransactions;
  } catch (error) {
    console.error("Error fetching all transactions:", error);
    return [];
  }
};

function ControlDash() {
  const allUsers = useFetchCollection("users");
  const [allTransactions, setAllTransactions] = useState([]);
  const [totalCompleted, setTotalCompleted] = useState(0);

  const [isUserSelected, setIsUserSelected] = useState(null);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [uniqueUserBalance, setUniqueUserBalance] = useState(false);
  const navigate = useNavigate();

 

  useEffect(() => {
    const fetchData = async () => {
      const transactions = await fetchAllTransactions();
      setAllTransactions(transactions);
    };

    fetchData();
  }, []);
  const userHandler = (user) => {
    setIsUserSelected(user);
    setUniqueUserBalance(true);
  };

  const updatePendingTransaction = async (transaction) => {
    try {
      const userDocRef = doc(db, "users", transaction.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const currentBalance = Number(userData.balance || 0);
        const updatedBalance = transaction.isPending
          ? currentBalance + Number(transaction.amount || 0)
          : currentBalance;

        if (transaction.isPending) {
          await updateDoc(userDocRef, {
            balance: updatedBalance
          });
        }

        const transactionRef = doc(
          db,
          "userTransactions",
          transaction.uid,
          "transactions",
          transaction.id
        );

        await updateDoc(transactionRef, {
          isPending: !transaction.isPending
        });

        alert(
          "Transaction status toggled and user balance updated successfully!"
        );
      } else {
        console.error("User document not found!");
      }
    } catch (error) {
      console.error("Error updating transaction or balance:", error);
    }
  };

  const getLatestTransaction = (userUid) => {
    const userTransactions = allTransactions
      .filter((tx) => tx.uid === userUid)
      .sort((a, b) => {
        const timeA = a.timestamp ? a.timestamp.toDate() : 0;
        const timeB = b.timestamp ? b.timestamp.toDate() : 0;
        return timeB - timeA;
      });
    return userTransactions[0];
  };

  const pendingAmount = allTransactions
    .filter((tx) => tx.isPending)
    .reduce((sum, tx) => sum + Number(tx.amount || 0), 0);

  const getTotalCompletedTransactions = async () => {
    try {
      let total = 0;

      // Step 1: Get all user IDs
      const usersSnapshot = await getDocs(collection(db, "users"));
      const userDocs = usersSnapshot.docs;

      // Step 2: Loop through each user to access their transactions subcollection

      for (const userDoc of userDocs) {
        const userId = userDoc.id;

        // Query: Only transactions where isPending is false
        const transactionsRef = collection(
          db,
          "userTransactions",
          userId,
          "transactions"
        );
        const completedTransactionsQuery = query(
          transactionsRef,
          where("isPending", "==", false)
        );
        const transactionsSnapshot = await getDocs(completedTransactionsQuery);

        // Step 3: Sum the amounts
        transactionsSnapshot.forEach((doc) => {
          const data = doc.data();
          total += Number(data.amount || 0);
        });
      }

      return total;
    } catch (error) {
      console.error("Error fetching completed transactions total:", error);
      return 0;
    }
  };

  useEffect(() => {
    const fetchTotal = async () => {
      const total = await getTotalCompletedTransactions();
      setTotalCompleted(total);
    };

    fetchTotal();
  }, []);

  // const balance = totalAmount - pendingAmount;

  const sortedUsers = [...allUsers].sort((a, b) => {
    const latestA = getLatestTransaction(a.userUid);
    const latestB = getLatestTransaction(b.userUid);
    if (!latestA && !latestB) return 0;
    if (!latestA) return 1;
    if (!latestB) return -1;
    if (latestA.isPending && !latestB.isPending) return -1;
    if (!latestA.isPending && latestB.isPending) return 1;
    return (
      (latestB.timestamp?.toDate() || 0) - (latestA.timestamp?.toDate() || 0)
    );
  });

  return (
    <div className="control-wrapper">
      <div className="control-section">
        <div className="stats-wrapper">
          <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Pending</h1>
            <div className="Transaction-Figure">
              <p>
                $ <span>{pendingAmount}</span>
              </p>
            </div>
          </div>
          {/* <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Balance</h1>
            <div className="Transaction-Figure">
              <p>$ <span>{balance}</span></p>
            </div>
          </div> */}
          <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Total</h1>
            <div className="Transaction-Figure">
              <p>
                $ <span>{totalCompleted}</span>
              </p>
            </div>
          </div>
          <div className="stats-user-list">
            <h1 className="stats-users-header">Users</h1>
            <div className="stats-users-wrapper">
              <p>{allUsers.length}</p>
            </div>
          </div>
        </div>

        <div className="userList-wrapper">
          <div
            className={
              !uniqueUserBalance
                ? "userList-container"
                : "userList-container listAnimation1"
            }>
            <div className="userList-section-wrapper">
              {sortedUsers.map((user) => {
                const latestTransaction = getLatestTransaction(user.userUid);

                return (
                  <button
                    key={user.id}
                    className="u-List-wrapper"
                    onClick={() => userHandler(user)}>
                    <div className="u-list-container">
                      <div className="u-list-user-info-container">
                        <h3>
                          {user.firstName} {user.lastName}
                        </h3>
                        <p>
                          Email: <span>{user.email}</span>
                        </p>
                      </div>
                      {latestTransaction &&
                        latestTransaction.amount !== undefined ? (
                        <div className="u-list-info-wrapper">
                          <div className="u-list-info">
                            <p>
                              Transaction Amount: ${latestTransaction.amount}
                            </p>
                            <p>Wallet: {latestTransaction.walletName}</p>
                            <p>
                              Pending:
                              {latestTransaction.isPending ? "Yes" : "No"}
                            </p>
                            <p>
                              Time:
                              {latestTransaction.timestamp
                                ? latestTransaction.timestamp
                                  .toDate()
                                  .toLocaleString()
                                : "N/A"}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p>No transactions found.</p>
                      )}
                    </div>
                    <div className="u-info-btn-wrapper">
                      <div className="u-info-btn-container">
                        <MdOutlineDoubleArrow className="u-list-arrow" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={
              uniqueUserBalance
                ? "uniqueUserBalanceWrapper"
                : "uniqueUserBalanceWrapper listAnimation2"
            }>
            {uniqueUserBalance && (
              <div className="toggleUserInfo-wrapper">
                <div className="cancel-buttonWrapper">
                  <button onClick={() => setUniqueUserBalance(false)}>
                    <IoReturnDownBack />
                  </button>
                </div>
                <div className="u-u-name-wrapper">
                  <p>User Transaction Info: </p>
                  <h1>
                    {isUserSelected.firstName} {isUserSelected.lastName}
                  </h1>
                </div>
              </div>
            )}

            {isUserSelected && isUserSelected.userUid ? (
              <div className="u-u-transactions">
                {[
                  ...allTransactions.filter(
                    (tx) => tx.uid === isUserSelected.userUid
                  )
                ]
                  .sort((a, b) => {
                    if (a.isPending === b.isPending) {
                      return (
                        (b.timestamp?.toDate() || 0) -
                        (a.timestamp?.toDate() || 0)
                      );
                    }
                    return b.isPending - a.isPending;
                  })
                  .map((x) => (
                    <div key={x.id} className="transaction-item">
                      <div className="transaction-item-container">
                        <p>Transaction Amount: ${x.amount}</p>
                        <p>Wallet Name: {x.walletName}</p>
                        <p>Pending: {x.isPending ? "Yes" : "No"}</p>
                        <p>
                          Time:
                          {x.timestamp
                            ? x.timestamp.toDate().toLocaleString()
                            : "No Date Available"}
                        </p>
                      </div>
                      <button
                        className={
                          x.isPending ? "pendingBtn" : "pendingBtn isPending"
                        }
                        onClick={() => updatePendingTransaction(x)}>
                        <GiCheckMark />
                      </button>
                    </div>
                  ))}
              </div>
            ) : (
              <p>No user selected.</p>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default ControlDash;
