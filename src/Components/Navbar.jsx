import React from "react";
import "../Styles/navbar.css";
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
