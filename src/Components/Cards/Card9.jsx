import "../../Styles/card.css";
import React, { useState } from "react";
import imagee from "../../assets/image-9.webp";

const Card9 = ({ onCardSelect, index }) => {
  // Use an object to receive props
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`image-container ${isClicked ? "decrease-opacity,blue" : ""}`}
      onClick={handleClick}
    >
      <img
        src={imagee}
        alt="Your"
        className={`image ${isClicked ? "blue" : ""}`}
      />
      <div className={`checkmark ${isClicked ? "blue" : ""}`}>✔</div>
    </div>
  );
};

export default Card9;
