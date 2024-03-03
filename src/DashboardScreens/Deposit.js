import React, { useState } from "react";
import "./styles/deposit.css";

// ____________________________________________________

import bitcoinImg from "../assets/coin/BTC.svg";
import bitcoinCashImg from "../assets/cargo.jpg";
import EthImg from "../assets/coin/ETH.svg";
import usdtTr20 from "../assets/dollar.jpg";
import usdter20 from "../assets/coin/usdtEr20.svg";

// ______________________________________________________

import { useAuth } from "../Context/AuthContext";
import UserTransactionHandler from "../Components/UserTransactionHandler";
import UserDataHandler from "../Components/UserDataHandler";

// ____________________________________________________

function Deposit() {
  const [isWallet, setIsWallet] = useState({
    walletState: true,
    selectedWallet: null,

    // _________________________________________________

    isDeposit: false,
    isRate: 0,
    isAmount: 0
  });

  // const { isUserDetail } = UserDataHandler();
  // const { note } = UserTransactionHandler();
  // const { text } = useAuth();

  const cryptoType = [
    { id: 1, name: "Bitcoin", img: { bitcoinImg }, rate: 400 },
    { id: 2, name: "Bitcoin Cash", img: { bitcoinCashImg }, rate: 400 },
    { id: 3, name: "Ethereum", img: { EthImg }, rate: 400 },
    { id: 4, name: "USDT Tr20", img: { usdtTr20 }, rate: 400 },
    {
      id: 5,
      name: "USDT Er20",
      img: "https://drettcapitals.com/dash/images/widgets/usdtEr20.svg",
      rate: 400
    }
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

  const handleTransactionRate = async () => {
    console.log("HELLO WORLD");
  };

  const handleTransferInput = (item) => {
    return (
      <div className="transfer-input-wrapper">
        <div className="transact-wallet-button-wrapper">
          <div className="coin-type-wrapper">
            <div className="coin-type-image-wrapper">
              <img src={item.img} alt={item.name} />
            </div>
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

        {!isWallet.isDeposit ? (
          <div className="transact-wallet-input-wrapper">
            <h3>$</h3>
            <input type="number" placeholder="Enter Amount" />
            <button
              onClick={() =>
                setIsWallet((prevState) => ({ ...prevState, isDeposit: true }))
              }>
              Submit
            </button>
          </div>
        ) : (
          <div className="transaction-receipt-container">
            <div className="transaction-receipt-container-rate">
              <div className="transact-receipt-crypto-image-wrapper"></div>
              <h1>Hello World</h1>
            </div>
          </div>
        )}
      </div>
    );
  };

  function handleTransactionType() {
    const result = cryptoType.map((item) => {
      const { id, name, img, rate } = item;

      return (
        <button
          onClick={() => handleWallet(item)}
          key={id}
          className="transaction-cointype-wrapper">
          <img src={img} alt="" />
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
