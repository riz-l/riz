// Import: Dependencies
import React from "react";

// Import: Styling
import "./Footer.styles.scss";

// UI: Footer
function Footer({ isOpen }) {
  return (
    <div
      className="Footer__container"
      style={
        isOpen
          ? { filter: "blur(3px)", transition: "filter 0.3s ease-in-out" }
          : null
      }
    >
      <div className="Footer">
        <h3 className="Footer__container-title">Riz Layton</h3>
        <div className="Footer__social-media">
          <div title="GitHub" className="Footer__social-media-item">
            <span className="fab fa-github" />
          </div>
          <div title="Dev" className="Footer__social-media-item">
            <span className="fab fa-dev" />
          </div>
          <div title="Behance" className="Footer__social-media-item">
            <span className="fab fa-behance" />
          </div>
          <div title="Twitter" className="Footer__social-media-item">
            <span className="fab fa-twitter" />
          </div>
          <div title="Instagram" className="Footer__social-media-item">
            <span className="fab fa-instagram" />
          </div>
        </div>
        <hr />
        <div className="Footer__short-link-container">
          <div className="Footer__short-links">
            <h4>About</h4>
            <ul>
              <li>
                <p>Summary</p>
              </li>
              <li>
                <p>Experience</p>
              </li>
              <li>
                <p>Background</p>
              </li>
              <li>
                <p>R&eacute;sum&eacute; / CV</p>
              </li>
              <li>
                <p>About Me</p>
              </li>
            </ul>
          </div>
          <div className="Footer__short-links">
            <h4>Contact</h4>
            <ul>
              <li>
                <p>Social Media</p>
              </li>
              <li>
                <p>Email</p>
              </li>
            </ul>
          </div>
          <div className="Footer__short-links">
            <h4>Projects</h4>
            <ul>
              <li>
                <p>Acronym Search</p>
              </li>
              <li>
                <p>Keyboard Shop</p>
              </li>
              <li>
                <p>OneResponse</p>
              </li>
              <li>
                <p>OneResponse - Management</p>
              </li>
              <li>
                <p>Personal Website</p>
              </li>
              <li>
                <p>UK&amp;I Lorenzo Customer Portal</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Footer
export default Footer;
