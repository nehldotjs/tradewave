import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./control.css";

import { db, FIREBASE_AUTH } from "../Firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc
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

function ControlDash() {
  const allUsers = useFetchCollection("users");
  const transactions = useFetchCollection("userTransactions");
  const [isUserSelected, setIsUserSelected] = useState(null);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [uniqueUserBalance, setUniqueUserBalance] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
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


  const userHandler = (user) => {
    setIsUserSelected(user);
    setUniqueUserBalance(true);
  };

  const getLatestTransaction = (userUid) => {
    const userTransactions = transactions
      .filter((tx) => tx.uid === userUid)
      .sort((a, b) => {
        const timeA = a.timestamp ? a.timestamp.toDate() : 0;
        const timeB = b.timestamp ? b.timestamp.toDate() : 0;
        return timeB - timeA;
      });
    return userTransactions[0];
  };

  const pendingAmount = transactions
    .filter((tx) => tx.isPending)
    .reduce((sum, tx) => sum + Number(tx.amount || 0), 0);

  const totalAmount = transactions.reduce(
    (sum, tx) => sum + Number(tx.amount || 0),
    0
  );

  const balance = totalAmount - pendingAmount;

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
          <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Balance</h1>
            <div className="Transaction-Figure">
              <p>
                $ <span>{balance}</span>
              </p>
            </div>
          </div>
          <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Total</h1>
            <div className="Transaction-Figure">
              <p>
                $ <span>{totalAmount}</span>
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
                  ...transactions.filter(
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
                      <p>Transaction Amount: ${x.amount}</p>
                      <p>Wallet Name: {x.walletName}</p>
                      <p>Pending: {x.isPending ? "Yes" : "No"}</p>
                      <p>
                        Time:
                        {x.timestamp
                          ? x.timestamp.toDate().toLocaleString()
                          : "No Date Available"}
                      </p>
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

      {/* Side Navigation */}
      <div className={isBtnActive ? "controlNav" : "controlNav isActive"}>
        <div className="control-navBtn">
          <button onClick={() => setIsBtnActive(!isBtnActive)}>
            <div
              className={
                isBtnActive ? "lines-wrapper" : "lines-wrapper isLinesHeight"
              }>
              <div className={!isBtnActive ? "line1" : "line1 isline1"}></div>
              <div className={!isBtnActive ? "line2" : "line2 isline2"}></div>
              <div className={!isBtnActive ? "line3" : "line3 isline3"}></div>
            </div>
          </button>
        </div>

        <div
          className={isBtnActive ? "control-links" : "control-links isActive"}>
          <div className="control-links-button">
            <div className="chat-control-wrapper">Chats</div>
            <div className="transaction-control-wrapper">Transactions</div>
            <div className="users-control-wrapper">Users</div>
          </div>
          <div className="control-auth-btn-wrapper">
            <button onClick={handleSignOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlDash;
