import "../Styles/gallery.css";

import React, { useState } from "react";
import pic1 from "../assets/image-1.webp";
import pic2 from "../assets/image-2.webp";
import pic3 from "../assets/image-3.webp";
import pic4 from "../assets/image-4.webp";
import pic5 from "../assets/image-5.webp";
import pic6 from "../assets/image-6.webp";
import pic7 from "../assets/image-7.webp";
import pic8 from "../assets/image-8.webp";
import pic9 from "../assets/image-9.webp";
import pic10 from "../assets/image-10.jpeg";
import pic11 from "../assets/image-11.jpeg";
import dnd from "../assets/dnd.jpeg";
import Card1 from "./Cards/Card1";
import { useDrop } from "react-dnd";

const Gallery = ({ onCardSelect, selectedCards, cards }) => {
  const [images, setImages] = useState([
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
  ]);

  const [feature, setFeature] = useState([dnd]);

  const [{ isOver }, addToFeatureRef] = useDrop({
    accept: "card",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isCardOver }, removeFromFeatureRef] = useDrop({
    accept: "feature",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const moveCardToFeature = (image) => {
    setImages((prev) => prev.filter((_, index) => index !== image.index));
    setFeature((prev) => [image, ...prev]);
  };

  const reMoveCardToFeature = (image, index) => {
    setFeature((prev) => prev.filter((_, i) => i !== index));
    setImages((prev) => [...prev, image]);
  };

  return (
    <div className="all">
      <div className="featured">
        <div className="ftdImg" ref={addToFeatureRef}>
          {feature.map((image, index) => (
            <div className="card">
              <Card1
                key={index}
                item={image}
                index={index}
                type="feature"
                onDropPlayer={() => reMoveCardToFeature(image, index)}
              />
            </div>
          ))}
        </div>
        <span className="txt1">Featured Image</span>
      </div>

      <div className="gallery" ref={removeFromFeatureRef}>
        {images.map((image, index) => (
          <div className="card">
            <Card1
              key={index}
              item={image}
              index={index}
              type="card"
              onDropPlayer={() => moveCardToFeature(image, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
