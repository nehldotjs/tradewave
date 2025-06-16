import React, { useEffect, useState } from "react";
import "../styles/insight.css";
import Footer from "./subpages/Footer";
import Nav from "../Components/Nav";
import axios from "axios";
import LoaderScreen from "../PropAssets/LoaderScreen";

const Insight = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY || "demo"; // fallback to 'demo' key for testing

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://financialmodelingprep.com/api/v4/general_news",
          {
            params: {
              limit: 5, // Number of articles
              apikey: apiKey
            }
          }
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching stock market news:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiKey]);

  return (
    <div>
      <Nav />
      {loading ? (
        <LoaderScreen />
      ) : error ? (
        <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
          <h2>Error loading news: {error}</h2>
        </div>
      ) : (
        <div className="news-container">
          {news.map(({ title, image, publishedDate, text, site, url }, i) => (
            <div className="insight-card" key={i}>
              <div className="in-cardImgWrapper">
                <img src={image} alt="News" />
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
              <div className="insight-newsAuthor">
                {site && <h5 className="author-name">{site}</h5>}
                {publishedDate && (
                  <p className="author-name">{publishedDate}</p>
                )}
              </div>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <h6>Read More</h6>
              </a>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Insight;
