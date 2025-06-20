import React, { useEffect } from "react";

import { CiTimer } from "react-icons/ci";
import { BsCreditCard2FrontFill, BsEyeglasses } from "react-icons/bs";

import "./styles/history.css";
import TableForm from "./SubComponent/TableForm";
import { TbBrandCashapp } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

import { useBalance } from "../Context/BalanceProvider";

function TransactionHistory() {

  const {
    userProps,
    userPending, setUserPending,
    userTransac, setUserTransac,

    sumUserApprovedTransact,
    setSumUserApprovedTransac,

    getUserPendingTransactionTotal,
    getApprovedTransactionsTotal,
    getUserAllTransactions

  } = useBalance()


  useEffect(() => {
    if (userProps.userUID) {
      getUserAllTransactions(userProps.userUID).then((transactions) => {
        setUserTransac(transactions)
      });

      getApprovedTransactionsTotal(userProps.userUID).then((total) => {
        setSumUserApprovedTransac(total);
      });

      getUserPendingTransactionTotal(userProps.userUID).then((total) => {
        setUserPending(total);
      });
      getApprovedTransactionsTotal(userProps.userUID);
    }
  }, [userProps.userUID]);

  const percentage = 35;
  const total = 4100;

  const calculatedValue = (percentage / 100) * total; // Gives 1435 exactly

  console.log(calculatedValue)

  return (
    <div className="th-main-wrapper">
      <div className="th-container">
        <p className="th-header">Transactions:</p>
        <div className="transaction-record-wrapper">

          <div className="transaction-record" style={{ backgroundColor: "orange" }} >
            <div className="record-icon"><CiTimer size={20} /> </div>
            <h1 className="transaction-figure">
              <span>
                <TbBrandCashapp /> 
              </span>
              {userPending}
              <span>.00</span>
            </h1>
            <p className="transaction-type">
              pending
            </p>
          </div>

          <div className="transaction-record" style={{ backgroundColor: "skyblue" }} >
            <div className="record-icon"><BsEyeglasses size={20} /></div>
            <h1 className="transaction-figure">
              <span> <TbBrandCashapp />
              </span>
              {
                userPending + sumUserApprovedTransact}
              <span>.00</span>
            </h1>
            <p className="transaction-type">
              review
            </p>
          </div>

          <div className="transaction-record" style={{ backgroundColor: "limegreen" }} >
            <div className="record-icon"><BsCreditCard2FrontFill size={20} /> </div>
            <h1 className="transaction-figure">
              <span> <TbBrandCashapp />
              </span>
              {sumUserApprovedTransact}
              <span>.00</span>
            </h1>
            <p className="transaction-type">
              Balance
            </p>
          </div>

          <div className="transaction-record" style={{ backgroundColor: "orangered" }} >
            <div className="record-icon"> <FaChartLine size={20} /> </div>
            <h1 className="transaction-figure">
              <span> <TbBrandCashapp />

              </span>
              500
              <span>.00</span>
            </h1>
            <p className="transaction-type">
              total earning
            </p>
          </div>

          <div className="transaction-record" style={{ backgroundColor: "black" }} >
            <div className="record-icon"> <FaMoneyCheckDollar size={20} /></div>
            <h1 className="transaction-figure">
              <span> <TbBrandCashapp />
              </span>

              {Math.round(calculatedValue * 100) / 100}

            </h1>
            <p className="transaction-type">
              next payout
            </p>
          </div>


        </div>

        <TableForm prop={userTransac} />
      </div>
    </div >
  );
}

export default TransactionHistory;
