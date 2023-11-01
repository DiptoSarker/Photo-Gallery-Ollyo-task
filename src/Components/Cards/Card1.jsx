import "../../Styles/card.css";
import React, { useState } from "react";
import imagee from "../../assets/image-1.webp";

const Card = ({ onCardSelect, index }) => {
  // Use an object to receive props
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`image-container ${isClicked ? "decrease-opacity" : ""}`}>
      <img
        src={imagee}
        alt="Your"
        className={`image ${isClicked ? "blue" : ""}`}
      />
      <div
        className={`checkmark ${isClicked ? "blue" : ""}`}
        onClick={() => {
          handleClick();
          onCardSelect(index);
        }}
      >
        ✔
      </div>
    </div>
  );
};

export default Card;
