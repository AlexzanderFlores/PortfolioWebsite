import React from 'react';

import Navigation from './components/navigation/Navigation';
import AboutMe from './components/aboutme/AboutMe';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

export default () => {
  return (
    <div id="app">
      <Navigation />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
};
