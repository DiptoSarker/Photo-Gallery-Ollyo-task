import "../Styles/container.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";

const Container = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
    { id: 6, title: "Card 6" },
    { id: 7, title: "Card 7" },
    { id: 8, title: "Card 8" },
    { id: 9, title: "Card 9" },
    { id: 10, title: "Card 10" },
    { id: 11, title: "Card 11" },
    { id: 12, title: "Card 12" },
  ]);
  const [selectedCards, setSelectedCards] = useState([]);

  // Function to handle card selection
  const handleCardSelect = (cardId) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  // Function to delete selected cards
  const handleDelete = () => {
    const updatedCards = cards.filter(
      (card) => !selectedCards.includes(card.id)
    );
    setCards(updatedCards);
    setSelectedCards([]); // Clear the selectedCards state
  };

  return (
    <div className="container">
      <Navbar counter={selectedCards.length} onDelete={handleDelete} />
      <div className="all">
        <Gallery
          cards={cards}
          selectedCards={selectedCards}
          onCardSelect={handleCardSelect}
        />
      </div>
    </div>
  );
};

export default Container;
