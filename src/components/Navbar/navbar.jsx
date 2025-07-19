import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='main-navbar'>
      <div className='logo'>
        <h1>PACIFIQUE</h1>
      </div>

      <div className={`navlinks ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="nav-button">
  <button
    onClick={() => window.open('/INGABIRE Resume.pdf', '_blank', 'noopener,noreferrer')}
  >
    Resume
  </button>
</div>


      <div className='menu-icon' onClick={toggleMenu}>
        {/* Hamburger icon */}
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
