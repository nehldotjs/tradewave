import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./subStyles/carousel.css"; 

const Carousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carouselItems = carouselRef.current.children;
    const totalItems = carouselItems.length;

    gsap.to(carouselItems, {
      xPercent: -100 * currentIndex,
      ease: "power2.inOut",
      duration: 0.8
    });
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    const carouselItems = carouselRef.current.children;
    const totalItems = carouselItems.length;

    setCurrentIndex((prevIndex) => Math.min(totalItems - 1, prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {/* Your carousel items go here */}
        <div className="carousel-item">Item 1</div>
        <div className="carousel-item">Item 2</div>
        <div className="carousel-item">Item 3</div> 
        <div className="carousel-item">Item 4</div>
        <div className="carousel-item">Item 5</div>
        <div className="carousel-item">Item 6</div>
        {/* Add more items as needed */}
      </div>

      <div className="carousel-navigation">
        <button className="nav-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="nav-button" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="pagination">
        {Array.from({ length: carouselRef.current?.children.length || 0 }).map(
          (_, index) => (
            <div
              key={index}
              className={`pagination-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}></div>
          )
        )}
      </div>
    </div>
  );
};

export default Carousel;
