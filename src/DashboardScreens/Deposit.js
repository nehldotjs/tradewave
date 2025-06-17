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
  const { setIsNotifyIcon } = PropData();

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

      Navigate("/overview"); // useNavigate from 'react-router-dom'
    } catch (err) {
      console.error("Error occurred:", err);
    } finally {
      setIsLoading(false);
      setIsNotifyIcon(true);
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
              <li>
                <strong>Send the Exact or Higher Amount:</strong>
                <br />
                Please ensure that you send the exact cryptocurrency amount
                displayed on the payment screen, or a slightly higher amount.
                Underpayments may lead to processing delays or payment failure.
              </li>

              <li>
                <strong>Use a Standard Wallet Address Only:</strong>
                <br />
                Do <strong>not</strong> send funds to an ETH contract address.
                Always use a{" "}
                <strong>regular Ethereum (ETH) wallet address</strong> to
                complete your payment successfully.
              </li>

              <li>
                <strong>Minimum Deposit Requirement:</strong>
                <br />
                The <strong>minimum transaction amount is $50 USD</strong>.
                Transactions below this threshold cannot be processed.
              </li>

              <li>
                <strong>Maximum Deposit Limit:</strong>
                <br />
                You can deposit up to <strong>$1,000,000 USD</strong> per
                transaction. For larger deposits, please contact customer
                support in advance.
              </li>

              <li>
                <strong>Private Key Security:</strong>
                <br />
                Your private keys remain fully encrypted and under your control.{" "}
                <strong>We do not store your private keys</strong> on our
                servers, ensuring maximum wallet security. Multi-factor
                authentication (MFA) is required to protect your account and
                transaction activity.
              </li>

              <li>
                <strong>Protection of Sensitive Payment Information:</strong>
                <br />
                Your financial and payment details are handled with the highest
                level of security and are used solely for transaction
                verification.{" "}
                <strong>
                  We do not share or sell your data to any third parties
                </strong>
                .
              </li>

              <li>
                <strong>For Any Assistance, Contact Support:</strong>
                <br />
                If you experience issues or have questions during the payment
                process, please contact our{" "}
                <strong>dedicated customer support team</strong> for immediate
                assistance. Avoid using multiple wallets or addresses for a
                single transaction, as this may cause processing errors.
              </li>

              <li>
                <strong>Zero Transaction Fees:</strong>
                <br />
                Depositing funds on our platform is{" "}
                <strong>completely free of charge</strong>. No additional
                transaction fees will be applied, allowing you to transact
                confidently.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
