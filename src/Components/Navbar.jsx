import "../Styles/navbar.css";
import React from "react";

const Navbar = ({ counter, onDelete }) => {
  return (
    <div className="navbar">
      <div className="logo">
        {counter > 0 ? `${counter} items selected` : "Gallery"}
        {counter > 0 && (
          <button className="btn" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
