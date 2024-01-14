// Carousel.js

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselItems = carouselRef.current.children;
    const totalItems = carouselItems.length;

    gsap.to(carouselItems, {
      xPercent: -100 * (totalItems - 1),
      ease: "power2.inOut",
      repeat: -1,
      duration: 10 // Adjust the duration as needed
    });
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {/* Your carousel items go here */}
      <div className="carousel-item">Item 1</div>
      <div className="carousel-item">Item 2</div>
      <div className="carousel-item">Item 3</div>
      {/* Add more items as needed */}
    </div>
  );
};

export default Carousel;
