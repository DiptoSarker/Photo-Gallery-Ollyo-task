import "../Styles/container.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";

const Container = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isGalleryShown, setGalleryShown] = useState(true);

  // Function to handle card selection
  const handleCardSelect = (index) => {
    if (!selectedCards.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    } else {
      const updatedSelectedCards = selectedCards.filter(
        (item) => item !== index
      );
      setSelectedCards(updatedSelectedCards);
    }

    // Update the isGalleryShown state based on whether any cards are selected
    setGalleryShown(selectedCards.length === 0);
  };

  return (
    <div className="container">
      <Navbar
        isGalleryShown={isGalleryShown}
        onGalleryToggle={() => setGalleryShown(!isGalleryShown)}
        counter={selectedCards.length}
      />
      <div className="all">
        <Gallery
          onCardSelect={handleCardSelect}
          isGalleryShown={isGalleryShown}
        />
      </div>
    </div>
  );
};

export default Container;
