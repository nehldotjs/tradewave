import React, { useEffect, useState } from "react";
import "./styles/history.css";

import TableForm from "./SubComponent/TableForm";

function TransactionHistory() {
  return (
    <div className="th-main-wrapper">
      <TableForm />
    </div>
  );
}

export default TransactionHistory;
