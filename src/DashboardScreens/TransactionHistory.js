import React from "react";

import { CiTimer } from "react-icons/ci";
import { BsCreditCard2FrontFill, BsEyeglasses } from "react-icons/bs";

import "./styles/history.css";
import TableForm from "./SubComponent/TableForm";
import { TbBrandCashapp } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

function TransactionHistory() {
  const handleTransaction = [
    {
      id: 1,
      transactionType: "pending",
      color: "orange",
      amount: 200,
      icon: <CiTimer size={20} />
    },
    {
      id: 2,
      transactionType: "review",
      color: "skyblue",
      amount: 200,
      icon: <BsEyeglasses size={20} />
    },
    {
      id: 3,
      transactionType: "Paid 0ut",
      color: "limegreen",
      amount: 200,
      icon: <BsCreditCard2FrontFill size={20} />
    },
    {
      id: 4,
      transactionType: "Total Earning",
      color: "orangered",
      amount: 200,
      icon: <FaChartLine size={20} />
    },
    {
      id: 5,
      transactionType: "Next Payout",
      color: "black",
      amount: 200,
      icon: <FaMoneyCheckDollar size={20} />
    }
  ];

  return (
    <div className="th-main-wrapper">
      <div className="th-container">
        <p className="th-header">Your earnings:</p>
        <div className="transaction-record-wrapper">
          {handleTransaction.map((x) => {
            const { id, transactionType, color, amount, icon } = x;

            return (
              <div
                className="transaction-record"
                key={id}
                style={{ backgroundColor: color }}>
                <div className="record-icon">{icon}</div>
                <h1 className="transaction-figure">
                  <span>
                    <TbBrandCashapp />
                  </span>
                  {amount}
                  <span>.00</span>
                </h1>
                <p className="transaction-type">{transactionType}</p>
              </div>
            );
          })}
        </div>
        <TableForm />
      </div>
    </div>
  );
}

export default TransactionHistory;
