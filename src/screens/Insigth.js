import React, { useEffect, useState } from "react";
import "../styles/insight.css";

import Footer from "./subpages/Footer";
import Nav from "../Components/Nav";

const Insight = () => {
  const [newsUpdate, setNewsUpdate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3194468809c4edcbbf57382baa6d200`
        );
        const data = await response.json();
        setNewsUpdate(data.articles);
        setLoading(false);

        console.log(data.articles);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [newsUpdate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Nav />
      <div className="padding-top"></div>
      <div className="Insight-sectionWrapper">
        <div className="insight-cardWrapper">
          {newsUpdate
            .filter((x) => x.urlToImage)
            .map(
              (
                {
                  title,
                  urlToImage,
                  publishedAt,
                  description,
                  author,
                  content,
                  source,
                  url
                },
                index
              ) => (
                <div className="insight-card" key={index}>
                  <div className="in-cardImgWrapper">
                    <img src={urlToImage} alt="News_Update" />
                  </div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="insight-newsAuthor">
                    {author ? <h5 className="author-name">{author}</h5> : ""}
                    {publishedAt ? (
                      <p className="author-name">{publishedAt}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h6>Read More</h6>
                  </a>
                </div>
              )
            )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Insight;
