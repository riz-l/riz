// Import: Dependencies
import React from "react";

// Import: Styling
import "./About.styles.scss";

// Page: About
function About({ isOpen }) {
  return (
    <div
      className="About__container"
      style={
        isOpen
          ? { filter: "blur(3px)", transition: "filter 0.3s ease-in-out" }
          : null
      }
    >
      <div className="About">
        <div className="About__text">
          <h1 className="About__title">About</h1>
        </div>
      </div>
    </div>
  );
}

// Export: About
export default About;
