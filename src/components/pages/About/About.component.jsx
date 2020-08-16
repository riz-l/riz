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
          <div className="About__section">
            <h2>Summary</h2>
            <p>
              I am a website/application developer at DXC Technology, working
              primarily in ReactJS, HTML, CSS and JS.
            </p>
            <p>
              I am currently looking for opportunities to further my career
              either through new employment or in contributing towards active
              projects.
            </p>
          </div>
          <div className="About__section">
            <h2>Background</h2>
            <p>
              After completing an MA in International Relations at the
              University of Nottingham, I joined DXC Technology's UK Healthcare
              branch through their graduate scheme. Though I obviously had (and
              still have!) a huge interest in international relations, whether
              that's state security, terrorism studies or politics, I took an
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
              In my day job I work on an application developed to be used by
              ambulance crews on tablets whilst attending emergency incidents.
              In my spare time, I am the Mobile Application Adoption in Defence
              (MAAD) co-lead in Team Defence Information's (TDI's) Joint
              Information Group - Vanguard (JIG-V). Lot's of acronyms, sorry.
            </p>
          </div>
          <div className="About__section">
            <h2>R&eacute;sum&eacute;</h2>
          </div>
          <div className="About__section">
            <h2>About (the real) Me</h2>
            <p>
              So far you've been able to read a little about the work me, but
              you're now able to read about the real-me!
            </p>
            <p>What are your favourite movies?</p>
            <p>
              Top Gun, The Right Stuff, Event Horizon, Ex Machina, Starship
              Troopers, Lord of the Rings, Star Wars.
            </p>
            <p>What are your favourite TV shows?</p>
            <p>
              Battlestar Galatica, The Expanse, Silicon Valley, The Kingdom and
              Into the Badlands.
            </p>
            <p>What are your hobbies?</p>
            <p>
              I love all things mechanical keyboards and PC, I just wish I could
              afford to facilitate my love. Also - I'm a huge Real Madrid fan!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: About
export default About;
