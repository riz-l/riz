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
      <div>
        <p>About</p>
      </div>
      <div>
        <p>Contact</p>
      </div>
      <div>
        <p>Projects</p>
      </div>
    </div>
  );
}

// Export: NavigationMenu
export default NavigationMenu;
