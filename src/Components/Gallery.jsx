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
import Card12 from "./Cards/Card12";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="card card1">
        <Card1 />
      </div>
      <div className="card">
        <Card2 />
      </div>
      <div className="card">
        <Card3 />
      </div>
      <div className="card">
        <Card4 />
      </div>
      <div className="card">
        <Card5 />
      </div>
      <div className="card">
        <Card6 />
      </div>
      <div className="card">
        <Card7 />
      </div>
      <div className="card">
        <Card8 />
      </div>
      <div className="card">
        <Card9 />
      </div>
      <div className="card">
        <Card10 />
      </div>
      <div className="card">
        <Card11 />
      </div>
      <div className="card">
        <Card12 />
      </div>
    </div>
  );
};

export default Gallery;
