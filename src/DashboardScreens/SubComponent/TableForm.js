import React from "react";
import "./style/table.css";
import { FaSadCry } from "react-icons/fa";

function TableForm({ prop }) {  // destructuring 'prop' correctly here


  return (
    <div className="transaction-container">
      {prop.length === 0 ? (
        <div className="transaction-report">
          <div className="transaction-report-image-wrapper">
            <FaSadCry className="transaction-report-error-icon" size={100} />
          </div>
          <h3>You do not have any transaction</h3>
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
                  <th>Date</th>
                  <th>Status</th>
                  <th>Wallet</th>
                  <th>Deposit</th>
                </tr>
              </thead>
              <tbody>
                {prop.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>
                      {transaction.timestamp
                        ? new Date(transaction.timestamp.seconds * 1000).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>

                      <p
                        style={{
                          padding: "5px 8px",
                          borderRadius: "5px",
                          fontWeight: "bold",
                          backgroundColor:
                            !transaction.isPending
                              ? "#62fd62"
                              : "#ffa600a6",
                          color:
                            !transaction.isPending
                              ? "limegreen"
                              : "orangered"
                        }}>
                        {!transaction.isPending ? "Credited" : "Pending"}
                      </p>
                    </td>
                    <td>{transaction.walletName || "N/A"}</td>
                    <td>{transaction.amount || "0.00"}</td>
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
