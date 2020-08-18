// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./NavigationMenu.styles.scss";

// UI: NavigationMenu
function NavigationMenu({ isOpen, setIsOpen }) {
  // Render NavigationMenu code
  return (
    <div
      className={`NavigationMenu ${isOpen ? `NavigationMenu__open` : null}`}
      isOpen={isOpen}
    >
      <Link to="/" onClick={() => setIsOpen(!isOpen)}>
        <p>Home</p>
      </Link>
      <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
        <p>About</p>
      </Link>
      <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
        <p>Contact</p>
      </Link>
      <Link to="/projects" onClick={() => setIsOpen(!isOpen)}>
        <p>Projects</p>
      </Link>
    </div>
  );
}

// Export: NavigationMenu
export default NavigationMenu;
