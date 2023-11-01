import "../Styles/gallery.css";
import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from "./Cards/Card8";
import Card9 from "./Cards/Card9";
import Card10 from "./Cards/Card10";
import Card11 from "./Cards/Card11";
import Card12 from "./Cards/CArd12";

const cardComponents = [
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
];

const Gallery = ({ onCardSelect, selectedCards, cards }) => {
  console.log("Selected cards IDs:", selectedCards);
  return (
    <div className="gallery">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card card${card.id} ${
            selectedCards.includes(card.id) ? "selected" : ""
          }`}
          onClick={() => onCardSelect(card.id)}
        >
          {React.createElement(cardComponents[card.id - 1], {
            key: card.id,
            onCardSelect,
          })}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
