import React, { useState } from "react";
import "./styles/deposit.css";
import { useAuth } from "../Context/AuthContext";
import UserTransactionHandler from "../Components/UserTransactionHandler";
import UserDataHandler from "../Components/UserDataHandler";

function Deposit() {
  const [isWallet, setIsWallet] = useState({
    walletState: true,
    selectedWallet: null
  });

  // const { note } = UserTransactionHandler();
  // const { isUserDetail } = UserDataHandler();
  // const { text } = useAuth();

  const cryptoType = [
    { id: 1, name: "Bitcoin", rate: 400 },
    { id: 2, name: "Ethereum", rate: 400 },
    { id: 3, name: "Solana", rate: 400 },
    { id: 4, name: "Binance", rate: 400 }
  ];

  const handleTransacPage = () => {
    setIsWallet((prevState) => ({
      ...prevState,
      walletState: !prevState.walletState
    }));

    console.log("back btn clicked");
  };

  const handleWallet = (item) => {
    setIsWallet((prevState) => ({
      ...prevState,
      walletState: !prevState.walletState,
      selectedWallet: item
    }));
  };

  const handleTransferInput = (item) => {
    return (
      <div className="transfer-input-wrapper">
        <div className="transact-wallet-button-wrapper">
          <div className="coin-type-wrapper">
            <h4> {item.name}</h4>
          </div>

          <button
            className="transact-page-button-navigator"
            onClick={() => {
              handleTransacPage();
            }}>
            <p>Cancel</p>
          </button>
        </div>

        <div className="transact-wallet-input-wrapper">
          <h3>$</h3>
          <input type="number" placeholder="Enter Amount" />
          <button>submit</button>
        </div>
      </div>
    );
  };

  function handleTransactionType() {
    const result = cryptoType.map((item) => {
      const { id, name, rate } = item;

      return (
        <button
          onClick={() => handleWallet(item)}
          key={id}
          className="transaction-cointype-wrapper">
          <p>{name}</p>
          <p>{rate}</p>
        </button>
      );
    });
    return result;
  }

  return (
    <div className="deposit-main-wrapper">
      <div className="deposit-section-container">
        <p>Choose your wallet :</p>
        <div className="deposit-section-crypto-types">
          {isWallet.walletState
            ? handleTransactionType()
            : handleTransferInput(isWallet.selectedWallet)}
        </div>

        <hr />

        <div className="deposit-instruction-wrapper">
          <h4>Note:</h4>
          <div className="deposiit-rule-list-wrapper">
            <ol>
              <li>
                Minimum Transaction Amount: The minimum transaction amount is
                $50. You can initiate a transaction with at least $50 in one
                transaction.
              </li>
              <li>
                Maximum Transaction Limit: The maximum transaction limit is
                $300. You can transact up to $300 in one transaction.
              </li>
              <li>
                Secure Storage of Private Keys: Your private keys, which grant
                access to your cryptocurrency holdings, are securely encrypted.
                We do not store your private keys on our servers to ensure
                maximum security. Additionally, we employ multi-factor
                authentication methods to enhance the security of your account.
              </li>
              <li>
                Protection of Payment Information: We prioritize the protection
                of your payment information. Your sensitive financial details
                are used solely for transaction verification purposes and are
                not shared with third parties.
              </li>
              <li>
                Contact Customer Support for Assistance: If you encounter any
                issues or have questions regarding your transaction, please
                reach out to our customer support team for prompt assistance.
                Attempting to use multiple wallets or cryptocurrency addresses
                for deposits may result in transaction complications.
              </li>
              <li>
                Fee-Free Transactions: Deposits and transactions on our platform
                are free of charge. We do not impose any transaction fees,
                allowing you to transact with peace of mind.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
