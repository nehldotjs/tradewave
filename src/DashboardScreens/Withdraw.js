import React, { useState } from "react";
import "./styles/withdraw.css";

import { FaBitcoin, FaEthereum, FaCoins, FaMoneyBillWave } from "react-icons/fa";

function Withdraw() {
  const [selectedCoin, setSelectedCoin] = useState("Bitcoin");
  const [withdrawData, setWithdrawData] = useState({
    address: "",
    amount: "",
  });

  const coins = [
    { name: "Bitcoin", icon: <FaBitcoin size={24} color="#f7931a" /> },
    { name: "Bitcash", icon: <FaMoneyBillWave size={24} color="#4cca47" /> },
    { name: "Solana", icon: <FaCoins size={24} color="#00ffa3" /> },
    { name: "Ethereum", icon: <FaEthereum size={24} color="#3c3c3d" /> },
  ];

  const handleInputChange = (e) => {
    setWithdrawData({ ...withdrawData, [e.target.name]: e.target.value });
  };

  const handleWithdraw = () => {
    console.log("Withdraw Request:", { selectedCoin, ...withdrawData });
    alert(`Withdrawal request submitted for ${selectedCoin}!`);
  };

  return (
    <div className="withdraw-wrapper">
      <div className="withdraw-container">
        <h2 className="withdraw-title">Crypto Withdrawal</h2>

        <div className="coin-selection">
          <label>Select Currency:</label>
          <div className="coin-grid">
            {coins.map((coin) => (
              <button
                key={coin.name}
                className={`coin-button ${selectedCoin === coin.name ? "selected" : ""
                  }`}
                onClick={() => setSelectedCoin(coin.name)}
              >
                {coin.icon}
                <span>{coin.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Wallet Address:</label>
          <input
            type="text"
            name="address"
            value={withdrawData.address}
            onChange={handleInputChange}
            placeholder="Enter your wallet address"
          />
        </div>

        <div className="input-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={withdrawData.amount}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>

        <button className="withdraw-btn" onClick={handleWithdraw}>
          Withdraw {selectedCoin}
        </button>
      </div>
    </div>
  );
}

export default Withdraw;
