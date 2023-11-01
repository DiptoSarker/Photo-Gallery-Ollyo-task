import "../../Styles/card.css";
import React, { useState } from "react";
import imagee from "../../assets/image-1.webp";

const Card1 = ({ onCardSelect, index }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onCardSelect(index);
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

export default Card1;
