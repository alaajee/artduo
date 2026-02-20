import { useState } from 'react';
import { Link } from 'react-router-dom';
import picture from './logo_no_bg.png';
import './App.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <header className="App-header">
      <img src={picture} className="App-logo" alt="logo" />

      {/* Hamburger button — visible uniquement sur mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Nav links */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="App-link" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/aboutus" className="App-link" onClick={() => setMenuOpen(false)}>ABOUT US</Link>

        <div
          className="services-dropdown-container"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <Link to="/services" className="App-link services-link" onClick={() => setMenuOpen(false)}>
            SERVICES
            <span className="dropdown-arrow">▼</span>
          </Link>
          {showServicesDropdown && (
            <div className="dropdown-menu">
              <Link to="/services" className="dropdown-item" onClick={() => { setMenuOpen(false); setShowServicesDropdown(false); }}>WORKSHOPS</Link>
              <Link to="/services" className="dropdown-item" onClick={() => { setMenuOpen(false); setShowServicesDropdown(false); }}>TEAM BUILDING</Link>
              <Link to="/services" className="dropdown-item" onClick={() => { setMenuOpen(false); setShowServicesDropdown(false); }}>PRIVATE EVENTS</Link>
            </div>
          )}
        </div>

        <Link to="/artstore" className="App-link" onClick={() => setMenuOpen(false)}>ART STORE</Link>
        <Link to="/contact" className="App-link" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
      </nav>
    </header>
  );
}

export default Navbar;