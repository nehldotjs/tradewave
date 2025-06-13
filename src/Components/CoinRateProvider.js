import { useEffect, useState } from "react";
import axios from "axios";

function CoinRateProvider() {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true); // Tracks loading state

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
              sparkline: false
            }
          }
        );
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    return () => fetchCoinData();
  }, []);

  if (loading) {
    return { cryptoValues: [] };
  }
  const cryptoValues = ["bitcoin", "bitcoin-cash", "ethereum", "solana"].map(
    (id) => coinData.find((coin) => coin.id === id) || null
  );
  return { cryptoValues };
}

export default CoinRateProvider;
