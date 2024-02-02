import React, { useEffect, useState } from "react";
import "./style/table.css";

function TableForm() {
  const [dataArray, setDataArray] = useState([
    { column1: "Value 1-1", column2: "Value 1-2" },
    { column1: "Value 2-1", column2: "Value 2-2" }
    // Add more objects as needed
  ]);

  useEffect(() => {
    // You can fetch data here or perform any other asynchronous operation
    // For simplicity, using static data in this example
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          {/* Add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {dataArray.map((data, index) => (
          <tr key={index}>
            <td>{data.column1}</td>
            <td>{data.column2}</td>
            {/* Add more cells if needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableForm;
