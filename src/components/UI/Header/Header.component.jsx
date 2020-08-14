// Import: Dependencies
import React from "react";

// Import: Styling
import "./Header.styles.scss";

// UI: Header
function Header({ isOpen, setIsOpen }) {
  return (
    <div className="Header__container">
      <div className="Header">
        <div className="Header__logo-container">
          <span className="Header__logo"></span>
        </div>
        <div
          className="Header__toggle-container"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <div className="Header__toggle-menu">
            <div className="Header__menu-bar" />
            <div className="Header__menu-bar" />
            <div className="Header__menu-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
