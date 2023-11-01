import "../Styles/container.css";

import React from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";

const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="all">
        <Gallery />
      </div>
    </div>
  );
};

export default Container;
