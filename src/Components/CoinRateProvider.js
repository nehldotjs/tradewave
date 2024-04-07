import { useEffect, useState } from "react";
import axios from "axios";

function CoinRateProvider() {
  const [coinPrice, setCoinPrice] = useState(null);

  useEffect(() => {
    const fetchCoinPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoinPrice(response.data);
      } catch (error) {
        console.error("Error fetching coin prices:", error);
      }
    };
    fetchCoinPrice();

    const newLocal = setInterval(fetchCoinPrice, 43200000);
    const intervalId = newLocal;

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const bitcoin = coinPrice ? coinPrice.find((x) => x.id === "bitcoin") : null;

  const bitcoinCash = coinPrice
    ? coinPrice.find((x) => x.id === "bitcoin-cash")
    : null;

  const ethereum = coinPrice
    ? coinPrice.find((x) => x.id === "ethereum")
    : null;

  const cryptoValues = [].concat(bitcoin, ethereum, bitcoinCash);

  return { cryptoValues };
}

export default CoinRateProvider;
