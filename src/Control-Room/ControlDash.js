import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, FIREBASE_AUTH } from "../Firebase";

import "./control.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { PropData } from "../Context/PropDataHandler";

function ControlDash() {
  const [allUsers, setAllUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [isUserSeclected, setIsUserSelected] = useState([]);

  const { setIsLoading } = PropData();

  console.log(isUserSeclected);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setAllUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "usersTransaction"));
        const transactionList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setTransactions(transactionList);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
    fetchTransactions();
  }, [setIsLoading]);

  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="control-wrapper">
      <div className="control-section">
        <div className="stats-wrapper">
          <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Pending</h1>
            <div className="Transaction-Figure">
              <p>
                $ <span>2500</span>
              </p>
            </div>
          </div>
          <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Balance</h1>
            <div className="Transaction-Figure">
              <p>
                $ <span>2500</span>
              </p>
            </div>
          </div>
          <div className="stats-figure-wrapper">
            <h1 className="Transactions-header">Total</h1>
            <div className="Transaction-Figure">
              <p>
                $ <span>2500</span>
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
          <div className="ueserList-container">
            {allUsers.map((user) => {
              // Find transactions of this user
              const userTransactions = transactions
                .filter((tx) => tx.uid === user.userUid)
                .sort((a, b) => {
                  const timeA = a.timestamp ? a.timestamp.toDate() : 0;
                  const timeB = b.timestamp ? b.timestamp.toDate() : 0;
                  return timeB - timeA; // Latest first
                });

              const latestTransaction = userTransactions[0]; // Get the latest one

              return (
                <button
                  key={user.id}
                  className="u-List-wrapper"
                  onClick={() => setIsUserSelected(user)}>
                  <div className="u-list-container">
                    <div className="u-list-user-info-container">
                      <h3>
                        {user.firstName} {user.lastName}
                      </h3>
                      <p>
                        Email: <span>{user.email}</span>
                      </p>
                    </div>

                    {latestTransaction ? (
                      <div className="u-list-info-wrapper">
                        <div className="u-list-info">
                          <p>
                            Transaction Amount:
                            <span> $ {latestTransaction.amount}</span>
                          </p>
                          <p>
                            Wallet: <span>{latestTransaction.walletName}</span>
                          </p>

                          <p>
                            Pending:
                            <span>
                              {latestTransaction.isPending ? "Yes" : "No"}
                            </span>
                          </p>

                          <p>
                            Time :
                            <span>
                              {latestTransaction.timestamp
                                ? latestTransaction.timestamp
                                    .toDate()
                                    .toLocaleString()
                                : "N/A"}
                            </span>
                          </p>
                          <p>
                            ID: <span>{latestTransaction.uid}</span>
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

        
      </div>

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
