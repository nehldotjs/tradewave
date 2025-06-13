import React from "react";
import "./style/table.css";

import { FaSadCry } from "react-icons/fa";

function TableForm() {
  const transactionData = [
    {
      id: 1,
      date: "2024-02-01",
      description: "pending",
      amount: "$20.00",
      deposit: "$200.00"
    },
    {
      id: 2,
      date: "2024-02-02",
      description: "paid out",
      amount: "$50.00",
      deposit: "$100.00"
    },
    {
      id: 3,
      date: "2024-02-03",
      description: "pending",
      amount: "$30.00",
      deposit: "$250.00"
    },
    {
      id: 4,
      date: "2024-02-04",
      description: "paid Out",
      amount: "$25.00",
      deposit: "$700.00"
    },
    {
      id: 5,
      date: "2024-02-04",
      description: "pending",
      amount: "$25.00",
      deposit: "$700.00"
    }
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
        <div className="ref-earning">
          <div className="ref-table">
            <table
              border="1"
              cellPadding="10"
              style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>date</th>
                  <th>status </th>
                  <th>deposit</th>
                  <th>Earnings</th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>
                      <p
                        style={{
                          padding: "5px 8px",
                          borderRadius: "5px",
                          fontWeight: "bold",
                          backgroundColor:
                            transaction.description.toLocaleLowerCase() ===
                            "paid out"
                              ? "#62fd62"
                              : "#ffa600a6",
                          color:
                            transaction.description.toLocaleLowerCase() ===
                            "paid out"
                              ? "limegreen"
                              : "orangered"
                        }}>
                        {transaction.description}
                      </p>
                    </td>
                    <td>{transaction.deposit}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableForm;
