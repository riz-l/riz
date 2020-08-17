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
          <span className="About__lead">About</span>
          <div className="About__section About__section-summary">
            <h2>Summary</h2>
            <p>
              I am a website/application developer at DXC Technology, working
              primarily in React JS, HTML, CSS and JS. I also work with Team
              Defence Information (TDI) as a Mobile Application Adoption in
              Defence co-lead in the Joint Information Group - Vanguard (JIG-V).
            </p>
            <p>
              I am currently looking for opportunities to further my career
              either through new employment or in contributing towards active
              projects.
            </p>
            <hr />
          </div>
          <div className="About__section">
            <h2>Experience</h2>
            <div className="About__experience">
              <div className="About__experience-item">
                <span title="HTML" className="fab fa-html5"></span>
                <p>HTML</p>
              </div>
              <div className="About__experience-item">
                <span title="CSS" className="fab fa-css3-alt"></span>
                <p>CSS</p>
              </div>
              <div className="About__experience-item">
                <span title="SASS" className="fab fa-sass"></span>
                <p>Sass</p>
              </div>
              <div className="About__experience-item">
                <span title="JavaScript" className="fab fa-js"></span>
                <p>JavaScript</p>
              </div>
              <div className="About__experience-item">
                <span title="React JS" className="fab fa-react"></span>
                <p>React JS</p>
              </div>
              <div className="About__experience-item">
                <span title="Node JS" className="fab fa-node"></span>
                <p>Node NS</p>
              </div>
              <div className="About__experience-item">
                <span title="SQL" className="fas fa-database"></span>
                <p>SQL</p>
              </div>
              <div className="About__experience-item">
                <span title="Google Firebase" className="fab fa-google"></span>
                <p>Google Firebase</p>
              </div>
              <div className="About__experience-item">
                <span
                  title="Microsoft Azure"
                  className="fab fa-microsoft"
                ></span>
                <p>Microsoft Azure</p>
              </div>
              <div className="About__experience-item">
                <span title="AWS" className="fab fa-aws"></span>
                <p>AWS</p>
              </div>
              <div className="About__experience-item">
                <span title="XAML" className="fas fa-code"></span>
                <p>XAML</p>
              </div>
            </div>
          </div>
          <div className="About__section">
            <h2>Background</h2>
            <p>
              After completing an MA in International Relations at the
              University of Nottingham, I joined DXC Technology's UK Healthcare
              branch through their graduate scheme. Though I obviously had (and
              still have!) a huge interest in international relations, whether
              that's state security, terrorism studies or theory, I took an
              immediate interest in working within the STEM industry.
            </p>
            <p>
              Shortly after joining DXC Technology I self-taught HTML, CSS and
              JS to become involved in Offering Delivery and Transformation
              (OD&amp;T). The thought of turning concepts into workable code,
              and even further - working applications and software - fascinated
              me.
            </p>
            <p>
              In my day job I work on an application used by ambulance crews on
              tablets whilst attending emergency incidents. This mostly involves
              coding in React JS daily, as well as Azure cloud database
              integration and SQL. In my spare time, I am a Mobile Application
              Adoption in Defence co-lead in{" "}
              <span title="Team Defence Information">TDI</span>'s{" "}
              <span title="Joint Information Group - Vanguard">JIG-V</span>.
              This involves assisting with policy advice, mobile application
              guidance and also developing small-scale projects such as the
              'Acronym Search'.
            </p>
          </div>
          <div className="About__section">
            <h2>R&eacute;sum&eacute; / CV</h2>
            <p>
              If you'd like to find out more about me in detail, please feel
              free to download a copy of my r&eacute;sum&eacute; / CV:
            </p>
            <div className="About__cta-container">
              <div className="About__cta">
                <span className="About__cta-text">Download Now</span>
              </div>
            </div>
          </div>
          <div className="About__section">
            <h2>About Me</h2>
            <p>
              Aside from all of the work-stuff, here's a little about my
              personal interests 😎
            </p>
            <p className="About__question">What are your favourite movies?</p>
            <p>
              Top Gun, The Right Stuff, Event Horizon, Ex Machina, Starship
              Troopers, Lord of the Rings, Star Wars.
            </p>
            <p className="About__question">What are your favourite TV shows?</p>
            <p>
              Battlestar Galactica, The Expanse, Silicon Valley, The Kingdom and
              Into the Badlands.
            </p>
            <p className="About__question">What are your hobbies?</p>
            <p>
              I love all things PC and mechanical keyboards, I just wish I could
              afford to facilitate my love. I'm also a huge Real Madrid fan and
              I love to play video games!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: About
export default About;
