import React, { useEffect, useState } from "react";
import "./style/table.css";

import { FaSadCry } from "react-icons/fa";

function TableForm() {
  const transactionData = [
    // {
    //   id: 1,
    //   date: "2024-02-01",
    //   description: "Purchase Item A",
    //   amount: "$20.00"
    // },
    // {
    //   id: 2,
    //   date: "2024-02-02",
    //   description: "Payment Received",
    //   amount: "$50.00"
    // },
    // { id: 3, date: "2024-02-03", description: "Withdrawal", amount: "$30.00" },
    // { id: 4, date: "2024-02-04", description: "Deposit", amount: "$25.00" }
  ];

  return (
    <div className="transaction-container">
      {transactionData.length === 0 ? (
        <div className="transaction-report">
          <div className="transaction-report-image-wrapper">
            <FaSadCry className="transaction-report-error-icon" size={100} />
          </div>
          <h3>you do not have any transaction</h3>
        </div>
      ) : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount(s)</th>
            </tr>
          </thead>

          <tbody>
            {transactionData.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableForm;
