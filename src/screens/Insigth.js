import React, { useEffect, useState } from "react";
import "../styles/insight.css";
import Footer from "./subpages/Footer";
import Nav from "../Components/Nav";
import styled from "styled-components";

const Insight = () => {
  const [newsUpdate, setNewsUpdate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
        );
        const { articles } = await res.json();
        setNewsUpdate(articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiKey]);

  const Loader = () => {
    return (
      <div className="loaderWrapper">
        <StyledWrapper>
          <div className="wrapper">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="shadow" />
            <div className="shadow" />
            <div className="shadow" />
          </div>
        </StyledWrapper>
      </div>
    );
  };

  return (
    <div>
      <Nav />
      {loading ? (
        <Loader />
      ) : error ? (
        <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
          <h2>Error loading news: {error}</h2>
        </div>
      ) : (
        <div className="news-container">
          {newsUpdate
            .filter((x) => x.urlToImage)
            .map(
              (
                { title, urlToImage, publishedAt, description, author, url },
                i
              ) => (
                <div className="insight-card" key={i}>
                  <div className="in-cardImgWrapper">
                    <img src={urlToImage} alt="News" />
                  </div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="insight-newsAuthor">
                    {author && <h5 className="author-name">{author}</h5>}
                    {publishedAt && (
                      <p className="author-name">{publishedAt}</p>
                    )}
                  </div>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h6>Read More</h6>
                  </a>
                </div>
              )
            )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Insight;

const StyledWrapper = styled.div`
  .wrapper {
    width: 200px;
    height: 60px;
    position: relative;
    z-index: 1;
  }

  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    left: 15%;
    transform-origin: 50%;
    animation: circle7124 0.5s alternate infinite ease;
  }

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }
  }

  .circle:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: shadow046 0.5s alternate infinite ease;
  }

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }

    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }

  .shadow:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .shadow:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;
