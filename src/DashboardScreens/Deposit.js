import React, { useEffect, useState } from "react";
import "./styles/deposit.css";

// ____________________________________________________

import axios from "axios";

import qrCode from "./../assets/qr-code-barcode-scanners-image-scanner-q-41bdbfbd944b13bdd9028b69fed03730.png";
import CoinRateProvider from "../Components/CoinRateProvider";

// ____________________________________________________

// import bitcoinImg from "../assets/coin/BTC.svg";
// import bitcoinCashImg from "../assets/cargo.jpg";
// import EthImg from "../assets/coin/ETH.svg";
// import usdtTr20 from "../assets/dollar.jpg";
// import usdter20 from "../assets/coin/usdtEr20.svg";

// ______________________________________________________

// import { useAuth } from "../Context/AuthContext";
// import UserTransactionHandler from "../Components/UserTransactionHandler";
// import UserDataHandler from "../Components/UserDataHandler";

// ____________________________________________________

function Deposit() {
  const [address, setAdress] = useState({
    walletAdress: "bsbbubsjyujbshu748hiukhdsugdufbidsfbi",
    isCopy: false
  });
  const [isWallet, setIsWallet] = useState({
    walletState: true,
    selectedWallet: null,

    // _________________________________________________

    isDeposit: false,
    isRate: 0,
    isAmount: 0
  });

  // _________________________________________________

  const { cryptoValues, coinPrice } = CoinRateProvider();

  console.log(cryptoValues, coinPrice);

  // _________________________________________________

  // const { isUserDetail } = UserDataHandler();
  // const { note } = UserTransactionHandler();
  // const { text } = useAuth();

  const handleCopy = (e) => {
    if (!address.isCopy) {
      navigator.clipboard.writeText(address.walletAdress);
      setAdress((prev) => ({ ...prev, isCopy: true }));
      setTimeout(() => {
        setAdress((prev) => ({ ...prev, isCopy: false }));
      }, 1500);
    }
  };

  const handleTransacPage = () => {
    setIsWallet((prevState) => ({
      ...prevState,
      walletState: !prevState.walletState
    }));
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
            <div className="coin-type-image-wrapper">
              <img src={item.image} alt={item.name} />
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
              <div className="transact-wallet-address-barcode">
                <img src={qrCode} alt="" />
              </div>

              <div className="transac-address-wrapper">
                <h4 className="transac-address-wrapper-link">
                  {address.walletAdress}
                </h4>
                <button onClick={handleCopy}>
                  {address.isCopy ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <p className="transact-note">
              Add funds using your generated wallet address. After your wallet
              address have been generated, copy the wallet and fund your account
              through our secure payment vendor prompt
            </p>

            <div className="transact-receipt-crypto-destails-wrapper">
              <h4>Deposit Confirmation</h4>
              <hr />
              <div className="cancel-deposit  reciept-info-section">
                <p></p>
                <p>Available with 10% fee - After min 24 hours </p>
              </div>
              <hr />
              <div className="debit-amount reciept-info-section">
                <p>Debit Amount </p>
                <p>${" " + 200}</p>{" "}
              </div>
              <hr />
              <div className="btc-value reciept-info-section">
                <p>BTC Value</p>
                <p>{1 / item.current_price}</p>
              </div>
            </div>

            {/* <div className="tansac-reciept-footer">
              <p>Please send exact amount in cryptocurrencies or more.</p>
              <p>
                Please do not use ETH Contact addresses as payment. Only regular
                ETH wallets.
              </p>
              <p>
                DEPOSIT BTC AMOUNT <span>0.00202555644585</span>
              </p>
            </div> */}
          </div>
        )}
      </div>
    );
  };

  function handleTransactionType() {
    const result = cryptoValues.map((item) => {
      const {
        market_cap_rank,
        image,
        name,
        atl_change_percentage,
        current_price,
        symbol
      } = item;

      return (
        <button
          onClick={() => handleWallet(item)}
          className="transaction-cointype-wrapper"
          key={market_cap_rank}>
          <img src={image} alt={name} />
        </button>
      );
    });
    return result;
  }

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
              <p>Select wallet :</p>
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

        <hr
          style={{
            border: "none",
            height: "1px",
            backgroundColor: "gray",
            opacity: ".4"
          }}
        />

        <div className="deposit-instruction-wrapper">
          <h4>Note:</h4>
          <div className="deposiit-rule-list-wrapper">
            <ol>
              <li>Send exact amount in cryptocurrencies or more.</li>
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
