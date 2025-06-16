import React, { useState } from "react";
import "./styles/deposit.css";

import CoinRateProvider from "../Components/CoinRateProvider";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, FIREBASE_AUTH } from "../Firebase";
import { Navigate } from "react-router-dom";
import { PropData } from "../Context/PropDataHandler";

function Deposit() {
  const [address, setAddress] = useState({
    walletAddress: "bsbbubsjyujbshu748hiukhdsugdufbidsfbi"
  });

  const [isWallet, setIsWallet] = useState({
    walletState: true,
    selectedWallet: null,
    isDeposit: false,
    isRate: 0,
    isAmount: false
  });
  const [isDebitAmount, setIsDebitAmount] = useState(0);
  const { cryptoData } = CoinRateProvider();
  const { setIsLoading } = PropData();

  const handleCopy = (item) => {
    if (!address.isCopy) {
      if (document.hasFocus()) {
        navigator.clipboard
          .writeText(item)
          .then(() => {
            setAddress((prev) => ({ ...prev, isCopy: true }));
            setTimeout(() => {
              setAddress((prev) => ({ ...prev, isCopy: false }));
            }, 1500);
          })
          .catch((error) => {
            console.error("Clipboard write failed:", error);
            // Optionally, show a fallback or error message to the user
          });
      } else {
        console.warn("Document is not focused. Unable to copy.");
      }
    }
  };

  const handleTransactPage = () => {
    setIsWallet((prevState) => ({
      ...prevState,
      walletState: true,
      isDeposit: false,
      isAmount: !prevState.isAmount
    }));

    setIsDebitAmount(0);
  };

  const handleWallet = (item) => {
    setIsWallet((prevState) => ({
      ...prevState,
      walletState: false,
      selectedWallet: item
    }));
  };

  function handleTransactionType() {
    const result = cryptoData?.map((prop, index) => (
      <div className="transaction__type" key={prop.id || index}>
        <button
          onClick={() => handleWallet(prop)}
          className="transaction-cointype-wrapper">
          <img src={prop.image} alt={"Coin Image"} />
        </button>
      </div>
    ));
    return result;
  }

  const handleTransferInput = (item) => {
    const btcValue = 1 / item.current_price;

    return (
      <div className="transfer-input-wrapper">
        <div className="transact-wallet-button-wrapper">
          <div className="coin-type-wrapper">
            <div className="coin-type-image-wrapper">
              <img src={item.image} alt="crypto" />
            </div>
            <h4> {item.name}</h4>
          </div>

          <button
            className="transact-page-button-navigator"
            onClick={handleTransactPage}>
            <p>Cancel</p>
          </button>
        </div>

        {!isWallet.isDeposit ? (
          <div
            className={
              !isWallet.isAmount
                ? "transact-wallet-input-wrapper"
                : "transact-wallet-input-wrapper border"
            }>
            <h3>$</h3>
            <input
              type="number"
              placeholder="Enter Amount"
              onMouseEnter={() => {
                setIsWallet((prevState) => ({
                  ...prevState,
                  isAmount: false
                }));
              }}
              onChange={(e) => {
                setIsDebitAmount(e.target.value);
              }}
            />
            <button
              onClick={() => {
                if (isDebitAmount <= 0) {
                  setIsWallet((prevState) => ({
                    ...prevState,
                    isAmount: true
                  }));
                } else {
                  setIsWallet((prevState) => ({
                    ...prevState,
                    isDeposit: true
                  }));
                }
              }}>
              Submit
            </button>
          </div>
        ) : (
          <div className="transaction-receipt-container">
            <div className="transaction-receipt-container-rate">
              <div className="transac-address-wrapper">
                <h4
                  className="transac-address-wrapper-link"
                  onClick={async () => {
                    await handleCopy(address.walletAddress);
                    alert("Copied!");
                  }}>
                  {address.walletAddress}
                </h4>
              </div>
            </div>

            <p className="transact-note">
              Fund your account by sending funds to your generated wallet
              address. Once your wallet address is created, simply copy it and
              complete the payment using our secure vendor prompt.
            </p>

            <div className="transact-receipt-crypto-destails-wrapper">
              <h4>Deposit Confirmation</h4>
              <hr />
              <div className="cancel-deposit  reciept-info-section">
                <p></p>
                <p>
                  Please note that your payment is being processed and will
                  reflect in your account within a few minutes.{" "}
                </p>
              </div>
              <hr />
              <div className="debit-amount reciept-info-section">
                <p> Amount </p>
                <p>$ {isDebitAmount}</p>
              </div>
              <hr />
              <div className="btc-value reciept-info-section">
                <p>{`"${item.symbol} "`} to USD Conversion Rate</p>
                <p>{btcValue} </p>
              </div>
            </div>

            <div className="tansact-reciept-footer">
              <p onClick={() => handleCopy(isDebitAmount * btcValue)}>
                DEPOSIT <span className="coin-symbol">{item.symbol + " "}</span>
                AMOUNT:
              </p>
              <p className="depositValue">{" " + isDebitAmount * btcValue}</p>
            </div>
            <div className="completPaymentBtn">
              <button onClick={handleNewTransactionPayment}>
                Payment Completed
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleNewTransactionPayment = async () => {
    setIsLoading(true);
    try {
      const user = FIREBASE_AUTH.currentUser;

      if (!user) {
        console.error("User not authenticated");
        return;
      }

      await addDoc(collection(db, "usersTransaction"), {
        uid: user.uid,
        amount: isDebitAmount,
        walletName: isWallet.selectedWallet?.name || "",
        isPending: true,
        timestamp: new Date()
      });

      Navigate("/"); // useNavigate from 'react-router-dom'
    } catch (err) {
      console.error("Error occurred:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="deposit-main-wrapper">
      <div className="deposit-section-container">
        <div className="deposit-section-crypto-types">
          {isWallet.walletState ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                market_cap_rankth: "100%",
                flex: "1",
                gap: "20px"
              }}>
              <p>Choose wallet :</p>
              <div
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "wrap"
                }}>
                {handleTransactionType()}
              </div>
            </div>
          ) : (
            handleTransferInput(isWallet.selectedWallet)
          )}
        </div>

        <div className="deposit-instruction-wrapper">
          <h4>Note:</h4>
          <div className="deposit-rule-list-wrapper">
            <ol>
              <li>Send the exact amount in cryptocurrencies or more.</li>
              <li>
                Do not use ETH Contract address as payment. Only regular ETH
                Wallet
              </li>
              <li>
                Minimum Transaction Amount: The minimum transaction amount is
                $50. You can initiate a transaction with at least $50 in one
                transaction.
              </li>
              <li>
                Maximum Transaction Limit: You can deposit up to $1 million in a
                single transaction.
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
