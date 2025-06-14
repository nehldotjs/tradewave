import { useEffect, useState } from "react";
import axios from "axios";

function CoinRateProvider() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum-classic,bitcoin-cash,solana"
            }
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh every 60 sec
    return () => clearInterval(interval);
    
  }, []);

  return { cryptoData };
}

export default CoinRateProvider;
