// Import: Dependencies
import React from "react";

// Import: Styling
import "./Home.styles.scss";

// Page: Home
function Home() {
  return (
    <div className="Home__container">
      <div className="Home">
        <div className="Home__text">
          <h1 className="Home__title">Riz Layton</h1>
          <span className="Home__title-lead">Web &amp; App developer</span>
          <div className="Home__cta">
            <span className="Home__cta-text">My work</span>
          </div>
        </div>
        <div className="Home__image"></div>
      </div>
    </div>
  );
}

// Export: Home
export default Home;
