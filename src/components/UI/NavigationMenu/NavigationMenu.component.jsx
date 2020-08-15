// Import: Dependencies
import React, { useEffect } from "react";

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
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>Home</p>
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>About</p>
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>Contact</p>
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>Projects</p>
      </div>
    </div>
  );
}

// Export: NavigationMenu
export default NavigationMenu;
