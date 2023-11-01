import "../Styles/card.css";
import React, { useState } from "react";
import imagee from "../assets/image-4.webp";

const Card = (onCardSelect, index) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={`image-container ${isClicked ? "decrease-opacity" : ""}`}>
      <img
        src={imagee}
        alt="Your "
        className={`image ${isClicked ? "blue" : ""}`}
      />
      <div
        className={`checkmark ${isClicked ? "blue" : ""}`}
        onClick={() => {
          handleClick();
          onCardSelect();
        }}
      >
        ✔
      </div>
    </div>
  );
};

export default Card;
