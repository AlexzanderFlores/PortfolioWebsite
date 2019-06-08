import React, { useState } from 'react';

import './Navigation.css';

export default () => {
  const [menuOpen, setMenuOpen] = useState('');

  /**
   * Toggles the menu-open class for mobile views
   */
  const toggleMenu = () => setMenuOpen(menuOpen ? '' : 'menu-open');

  /**
   * Scrolls to an element on the page
   * @param {String} target The ID of the element to scroll to
   */
  const scrollTo = target => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (window) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav>
      <ul id="nav-list-left">
        <li>Alexzander Flores</li>
      </ul>

      <ul id="nav-list-right" className={menuOpen}>
        <li onClick={scrollTo.bind(this, 'about-me-container')}>About Me</li>
        <li onClick={scrollTo.bind(this, 'experience')}>Experience</li>
        <li onClick={scrollTo.bind(this, 'projects')}>Projects</li>
      </ul>

      <div id="nav-list-burger" className={menuOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};
