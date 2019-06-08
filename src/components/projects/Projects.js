import React from 'react';

import nestnetworking from '../../media/nestnetworking.png';
import devdock from '../../media/devdock.png';
import hytaledata from '../../media/hytaledata.png';
import neverpayextra from '../../media/neverpayextra.png';
import './Projects.css';

const nextJS = 'Next JS';
const AWS = 'AWS';
const webLanguages = ['HTML5', 'CSS3', 'JavaScript'];

const Project = ({
  name,
  languages,
  description,
  liveDemo,
  liveProject,
  viewText,
  repoLink,
  limitedRepo,
  imagePath,
  videoId
}) => {
  return (
    <div className="project card">
      <div className="project-name">{name}</div>

      <div className="project-languages">
        {languages.map(language => {
          return (
            <div key={`${name}-${language}`} className="project-language">
              {language}
            </div>
          );
        })}
      </div>

      <div className="project-description">{description}</div>

      <div className="project-links">
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noreferrer noopener">
            <button>
              {viewText || 'View ' + (liveProject ? 'Live Website' : 'Demo')}
            </button>
          </a>
        )}

        <a href={repoLink} target="_blank" rel="noreferrer noopener">
          <button>Github Repo{limitedRepo && ' (Limited)'}</button>
        </a>
      </div>

      {imagePath && (
        <div className="project-image">
          <img src={imagePath} alt={`${name} project screenshot`} />
        </div>
      )}

      {videoId && (
        <div>
          <iframe
            title="ProMcGames Survival Games"
            src={`https://www.youtube.com/embed/${videoId}`}
          />
        </div>
      )}
    </div>
  );
};

export default () => {
  return (
    <div id="projects">
      <Project
        name="Nest Networking"
        languages={[
          nextJS,
          'Node JS',
          AWS,
          'Chrome API',
          ...webLanguages,
          'SASS'
        ]}
        description="Nest Networking is a startup that helps B2B agencies find more clients. We've gathered hundreds of thousands of business's data from all over the US. Marketing agencies can then search through this data to find businesses who are in need of their services."
        liveDemo="https://nestnetworking.com"
        liveProject
        repoLink="https://github.com/AlexzanderFlores"
        limitedRepo
        imagePath={nestnetworking}
      />

      <Project
        name="DevDock"
        languages={['React JS', nextJS, ...webLanguages]}
        description="Website design &amp; development agency targeting small and local businesses. Mostly focused on helping businesses get a mobile friendly website that optimizes conversion rates."
        liveDemo="https://devdock.org"
        liveProject
        repoLink="https://github.com/AlexzanderFlores"
        imagePath={devdock}
      />

      <Project
        name="Hytale Data"
        languages={[
          nextJS,
          'Node JS',
          AWS,
          'Discord API',
          'Open API 3.0',
          ...webLanguages
        ]}
        description="Planned analytical tools for the 'Hytale' video game servers. This project is on hold/cancelled as the game 'Hytale' is not released yet."
        liveDemo="https://hytaledata.com"
        viewText="View Archived Website"
        repoLink="https://github.com/AlexzanderFlores"
        imagePath={hytaledata}
      />

      <Project
        name="Never Pay Extra"
        languages={[
          'Node JS',
          AWS,
          'Chrome API',
          'Discord API',
          ...webLanguages
        ]}
        description="Save money while shopping online. As you view a product on top e-commerce websites the extension will check for cheaper prices on other websites. Checks are done via UPC codes. The website has its own search functionality."
        liveDemo="https://google.com"
        viewText="View Archived Website"
        repoLink="https://github.com/AlexzanderFlores"
        imagePath={neverpayextra}
      />

      <Project
        name="Pro Mc Games"
        languages={['Java', 'SQL', 'Linux']}
        description="Minecraft network that served over 250,000 unique players over its two-year lifespan before being sold."
        repoLink="https://github.com/AlexzanderFlores"
        videoId="pD6Rj2oLKNs"
      />

      <Project
        name="Portfolio Website"
        languages={['React JS', AWS, ...webLanguages]}
        description="The portfolio website you're viewing currently."
        repoLink="https://github.com/AlexzanderFlores"
      />
    </div>
  );
};
