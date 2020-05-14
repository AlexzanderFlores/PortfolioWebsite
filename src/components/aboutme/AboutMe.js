import React from "react";

import "./AboutMe.css";

export default () => {
  return (
    <div id="about-me-container">
      <div id="about-me" className="card">
        <div id="about-heading">
          <h1>About Me</h1>

          <img
            src="https://devdock.org/static/media/alex.2586cb40.png"
            alt="Alexzander Flores"
          />
        </div>

        <div id="about-info">
          <p>
            Hey! My name is Alex and I'm a self-taught full-stack software
            developer with {new Date().getFullYear() - 2008} years of
            experience. Throughout those years I've done dozens of freelancing
            jobs with large influencers, and made a living off of my own startup
            for multiple years before selling it.
          </p>

          <p>
            Software development is my passion and I continue to learn daily. I
            try to challenge myself to improve my skills and keep up-to-date
            with industry best practices.
          </p>

          <p>
            <h3>Need to get in contact?</h3>

            <p>
              Email me:{" "}
              <a href="mailto:alexzanderflores@nestnetworking.com">
                alexzanderflores@nestnetworking.com
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
