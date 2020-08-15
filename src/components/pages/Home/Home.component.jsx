// Import: Dependencies
import React, { useState } from "react";

// Import: Styling
import "./Home.styles.scss";

// Page: Home
function Home({ isOpen }) {
  // State = isLightTheme
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Render Home code
  return (
    <div
      className="Home__container"
      style={
        isOpen
          ? { filter: "blur(3px)", transition: "filter 0.3s ease-in-out" }
          : null
      }
    >
      <div className="Home">
        <div className="Home__text">
          <h1 className="Home__title">Riz Layton</h1>
          <span className="Home__title-lead">Web &amp; App developer</span>
          <div className="Home__cta-container">
            <div className="Home__cta">
              <span className="Home__cta-text">My projects</span>
            </div>
          </div>
        </div>
        <div className="Home__image">
          <div className="Home__image-outer-square">
            <div className="Home__image-first-inner-circle">
              <div className="Home__image-second-inner-square">
                <div className="Home__image-third-inner-circle">
                  <div
                    className="Home__image-fourth-inner-circle"
                    onClick={() => {
                      setIsLightTheme((isLightTheme) => !isLightTheme);
                    }}
                  >
                    <div className="Home__theme-toggle">
                      <span className="far fa-lightbulb"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Home
export default Home;
