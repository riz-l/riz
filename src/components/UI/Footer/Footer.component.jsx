// Import: Dependencies
import React from "react";

// Import: Styling
import "./Footer.styles.scss";

// UI: Footer
function Footer({ isOpen }) {
  return (
    <div className="Footer__container">
      <div className="Footer">
        <h3 className="Footer__container-title">Riz Layton</h3>
        <div className="Footer__social-media">
          <div title="GitHub" className="Footer__social-media-item">
            <span className="fab fa-github-square" />
          </div>
          <div title="Stack Overflow" className="Footer__social-media-item">
            <span className="fab fa-stack-overflow" />
          </div>
          <div title="Twitter" className="Footer__social-media-item">
            <span className="fab fa-twitter" />
          </div>
          <div title="Discord" className="Footer__social-media-item">
            <span className="fab fa-discord" />
          </div>
          <div title="Instagram" className="Footer__social-media-item">
            <span className="fab fa-instagram" />
          </div>
        </div>
        <div className="Footer__short-link-container">
          <div className="Footer__short-links">
            <h4>Shop</h4>
            <ul>
              <li>Keyboards</li>
              <li>Artisans</li>
              <li>Switches</li>
              <li>Cables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Footer
export default Footer;
