import "./card12.css";
import React from "react";
import { GrGallery } from "react-icons/gr";

const Card12 = () => {
  return (
    <div class="upload-image-container">
      <label for="image-upload" class="upload-label">
        <GrGallery class="upload-logo" />
        Add Images
      </label>

      <input
        type="file"
        id="image-upload"
        accept="image/*"
        class="upload-input"
      />
    </div>
  );
};

export default Card12;
