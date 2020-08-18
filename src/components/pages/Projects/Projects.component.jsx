// Import: Dependencies
import React, { useEffect } from "react";

// Import: Styling
import "./Projects.styles.scss";

// Import: Assets
import AcronymSearch from "../../../assets/images/acronym-search.png";

// Page: Projects
function Projects({ isOpen }) {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render Projects code
  return (
    <div
      className="Projects__container"
      style={
        isOpen
          ? { filter: "blur(3px)", transition: "filter 0.3s ease-in-out" }
          : null
      }
    >
      <div className="Projects__background" />
      <div className="Projects">
        <div className="Projects__text">
          <h1 className="Projects__title">Projects</h1>
          <div className="Projects__section">
            <h2>Acronym Search</h2>
            <p>
              Team Defence Information (TDI) and the Joint Information Group -
              Vanguard (JIG-V) were tasked with making acronyms and their
              respective definitions easily accessible throughout the wider
              Defence industry, and easier to learn.
            </p>
            <p>
              Using publicly available acronym-definition pairs, the 'Acronym
              Search' was created.
            </p>

            <div className="Projects__section-visual">
              <div className="Projects__section-image">
                <img src={AcronymSearch} alt="Acronym Search" />
              </div>
              <div className="Projects__section-technologies">
                <div className="Projects__technologies">
                  <div title="HTML" className="Projects__technology-item">
                    <span className="fab fa-html5"></span>
                  </div>
                  <div title="CSS" className="Projects__technology-item">
                    <span className="fab fa-css3-alt"></span>
                  </div>
                  <div title="Bootstrap" className="Projects__technology-item">
                    <span className="fab fa-bootstrap"></span>
                  </div>
                  <div title="JavaScript" className="Projects__technology-item">
                    <span className="fab fa-js"></span>
                  </div>
                  <div title="Node JS" className="Projects__technology-item">
                    <span className="fab fa-node"></span>
                  </div>
                  <div
                    title="Google Firebase"
                    className="Projects__technology-item"
                  >
                    <span className="fab fa-google"></span>
                  </div>
                  <div title="Algolia" className="Projects__technology-item">
                    <span className="fab fa-algolia"></span>
                  </div>
                  <div
                    title="Progressive Web App (PWA)"
                    className="Projects__technology-item"
                  >
                    <span className="fas fa-download"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Projects__section">
            <h2>Keyboard Shop</h2>
            <p>
              As a proof of concept to demonstrate my understanding of a
              web-store, I created the 'Keyboard Shop', under the pseudo company
              name of 'rizji'.
            </p>
            <p>
              The web-store allows users to login with either their email and
              password, or with Google sign-in. Additionally, users are able to
              browse the store, add items to their cart, and ultimately pay for
              these items using Stripe.
            </p>
            <h3>Technologies used:</h3>
            <div className="Projects__technologies">
              <div title="HTML" className="Projects__technology-item">
                <span className="fab fa-html5"></span>
              </div>
              <div title="CSS" className="Projects__technology-item">
                <span className="fab fa-css3-alt"></span>
              </div>
              <div title="Sass" className="Projects__technology-item">
                <span className="fab fa-sass"></span>
              </div>
              <div title="JavaScript" className="Projects__technology-item">
                <span className="fab fa-js"></span>
              </div>
              <div title="React JS" className="Projects__technology-item">
                <span className="fab fa-react"></span>
              </div>
              <div title="Node JS" className="Projects__technology-item">
                <span className="fab fa-node"></span>
              </div>
              <div
                title="Google Firebase"
                className="Projects__technology-item"
              >
                <span className="fab fa-google"></span>
              </div>
              <div title="Jira" className="Projects__technology-item">
                <span className="fab fa-jira"></span>
              </div>
              <div title="Figma" className="Projects__technology-item">
                <span className="fab fa-figma"></span>
              </div>
              <div title="Stripe" className="Projects__technology-item">
                <span className="fab fa-stripe"></span>
              </div>
              <div
                title="Progressive Web App (PWA)"
                className="Projects__technology-item"
              >
                <span className="fas fa-download"></span>
              </div>
            </div>
          </div>
          <div className="Projects__section">
            <h2>OneResponse</h2>
            <p>
              OneResponse is a Windows 10 tablet application, used by ambulance
              crews whilst attending emergency incidents. Importantly, the
              application must adhere to all NHS policies, and must enable and
              facilitate ambulance crew processes whilst engaging with Patients.
            </p>
            <p>
              The application allows ambulance crews to constantly record
              incident information, such as the patient's age and name, all the
              way to their triaged injuries, ongoing medication(s), and the
              ambulance crew's recommendations.
            </p>
            <h3>Technologies used:</h3>
            <div className="Projects__technologies">
              <div title="XAML" className="Projects__technology-item">
                <span className="fas fa-code"></span>
              </div>
              <div title="SQL" className="Projects__technology-item">
                <span className="fas fa-database"></span>
              </div>
              <div
                title="Microsoft Azure"
                className="Projects__technology-item"
              >
                <span className="fab fa-microsoft"></span>
              </div>
              <div title="Jira" className="Projects__technology-item">
                <span className="fab fa-jira"></span>
              </div>
            </div>
          </div>
          <div className="Projects__section">
            <h2>OneResponse - Management</h2>
            <p>
              OneResponse - Management is a report dashboard extension of
              OneResponse, and is used by patient receiving locations (such as
              various hospitals and their own departments) to view a Patient's
              details without needing access to the tablet variant.
            </p>
            <p>
              The report dashboard extension is not used to input patient data,
              but instead used to view a Patient's data, either briefly, in the
              form of an SBAR report summary, or extensively through each
              individual report view. Patient details and the overall Patient
              list are fetched via a private API, and this data is used to
              populate the report dashboard.
            </p>
            <h3>Technologies used:</h3>
            <div className="Projects__technologies">
              <div title="HTML" className="Projects__technology-item">
                <span className="fab fa-html5"></span>
              </div>
              <div title="CSS" className="Projects__technology-item">
                <span className="fab fa-css3-alt"></span>
              </div>
              <div title="Sass" className="Projects__technology-item">
                <span className="fab fa-sass"></span>
              </div>
              <div title="JavaScript" className="Projects__technology-item">
                <span className="fab fa-js"></span>
              </div>
              <div title="React JS" className="Projects__technology-item">
                <span className="fab fa-react"></span>
              </div>
              <div title="Node JS" className="Projects__technology-item">
                <span className="fab fa-node"></span>
              </div>
              <div title="SQL" className="Projects__technology-item">
                <span className="fas fa-database"></span>
              </div>
              <div
                title="Microsoft Azure"
                className="Projects__technology-item"
              >
                <span className="fab fa-microsoft"></span>
              </div>
              <div title="Jira" className="Projects__technology-item">
                <span className="fab fa-jira"></span>
              </div>
              <div title="Figma" className="Projects__technology-item">
                <span className="fab fa-figma"></span>
              </div>
              <div
                title="Progressive Web App (PWA)"
                className="Projects__technology-item"
              >
                <span className="fas fa-download"></span>
              </div>
            </div>
          </div>
          <div className="Projects__section">
            <h2>Personal Website</h2>
            <p>
              In order to effectively showcase my own abilities, enable contact
              and demonstrate my working portfolio, I created this personal
              website.
            </p>
            <p>
              Although I had many different ideas for thematic direction, I
              eventually decided upon a minimalistic approach which could
              communicate my abilities easily, without being too over-bearing.
            </p>
            <h3>Technologies used:</h3>
            <div className="Projects__technologies">
              <div title="HTML" className="Projects__technology-item">
                <span className="fab fa-html5"></span>
              </div>
              <div title="CSS" className="Projects__technology-item">
                <span className="fab fa-css3-alt"></span>
              </div>
              <div title="Sass" className="Projects__technology-item">
                <span className="fab fa-sass"></span>
              </div>
              <div title="JavaScript" className="Projects__technology-item">
                <span className="fab fa-js"></span>
              </div>
              <div title="React JS" className="Projects__technology-item">
                <span className="fab fa-react"></span>
              </div>
              <div title="Node JS" className="Projects__technology-item">
                <span className="fab fa-node"></span>
              </div>
              <div title="AWS" className="Projects__technology-item">
                <span className="fab fa-aws"></span>
              </div>
              <div title="Figma" className="Projects__technology-item">
                <span className="fab fa-figma"></span>
              </div>
              <div
                title="Progressive Web App (PWA)"
                className="Projects__technology-item"
              >
                <span className="fas fa-download"></span>
              </div>
              <div title="Jira" className="Projects__technology-item">
                <span className="fab fa-jira"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Projects
export default Projects;
