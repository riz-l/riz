// Import: Dependencies
import React, { useEffect } from "react";

// Import: Styling
import "./Contact.styles.scss";

// Page: Contact
function Contact({ isOpen }) {
  // Upon navigation to Contact, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render Contact code
  return (
    <div
      className="Contact__container"
      style={
        isOpen
          ? { filter: "blur(3px)", transition: "filter 0.3s ease-in-out" }
          : null
      }
    >
      <div className="Contact">
        <div className="Contact__text">
          <h1 className="Contact__title">Contact</h1>
          <span className="Contact__lead">Contact</span>
          <div className="Contact__section Contact__section-summary">
            <h2>Get in touch</h2>
            <p>If you'd like to get in touch, please contact me here:</p>
            <div className="Contact__cta-container">
              <div className="Contact__cta">
                <a
                  className="Contact__cta-text"
                  href="mailto: joshua.riz.layton@gmail.com"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
          <div className="Contact__section">
            <h2>Social Media</h2>
            <p>
              If you'd like to see what I'm up to, please check out my social
              media:
            </p>
            <div className="Contact__social-media">
              <div title="GitHub" className="Contact__social-media-item">
                <span className="fab fa-github" />
              </div>
              <div title="Dev" className="Contact__social-media-item">
                <span className="fab fa-dev" />
              </div>
              <div title="Behance" className="Contact__social-media-item">
                <span className="fab fa-behance" />
              </div>
              <div title="Twitter" className="Contact__social-media-item">
                <span className="fab fa-twitter" />
              </div>
              <div title="Instagram" className="Contact__social-media-item">
                <span className="fab fa-instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Contact
export default Contact;
