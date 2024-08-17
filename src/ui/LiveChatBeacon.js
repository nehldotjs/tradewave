import React, { useState, useEffect } from "react";
import "./LiveChatBeacon.css";

function LiveChatBeacon() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Simulate a live trade beacon toggle
    const interval = setInterval(() => {
      setIsLive((prevState) => !prevState);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="beacon-container">
      <div className={`beacon ${isLive ? "live" : ""}`}>
        <div className="beacon-light"></div>
      </div>
      <span className="beacon-text">{isLive ? "Live Trade" : "No Trade"}</span>
    </div>
  );
}

export default LiveChatBeacon;
