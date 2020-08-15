// Import: Dependencies
import React from "react";

// Import: Styling
import "./Header.styles.scss";

// UI: Header
function Header({ isOpen, setIsOpen }) {
  // Render Header code
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
            <div
              className="Header__menu-bar"
              style={
                isOpen
                  ? {
                      background: "#f7f7f7",
                      transition: "background 0.3s ease-in-out",
                    }
                  : { background: "#181818" }
              }
            />
            <div
              className="Header__menu-bar"
              style={
                isOpen
                  ? {
                      background: "#f7f7f7",
                      transition: "background 0.3s ease-in-out",
                    }
                  : { background: "#181818" }
              }
            />
            <div
              className="Header__menu-bar"
              style={
                isOpen
                  ? {
                      background: "#f7f7f7",
                      transition: "background 0.3s ease-in-out",
                    }
                  : { background: "#181818" }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
