import './App.css';
import './Contact.css';
import picture from './logo_no_bg.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />

        <Link to="/" className="App-link"> HOME </Link>
        <Link to="/aboutus" className="App-link"> ABOUT US </Link>

        <div
          className="services-dropdown-container"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <Link to="/services" className="App-link services-link">
            SERVICES
            <span className="dropdown-arrow">▼</span>
          </Link>
          {showServicesDropdown && (
            <div className="dropdown-menu">
              <Link to="/services" className="dropdown-item">WORKSHOPS</Link>
              <Link to="/services" className="dropdown-item">TEAM BUILDING</Link>
              <Link to="/services" className="dropdown-item">PRIVATE EVENTS</Link>
            </div>
          )}
        </div>

        <Link to="/artstore" className="App-link"> ART STORE </Link>
        <Link to="/contact" className="App-link active-link"> CONTACT US </Link>
      </header>

      <div className="contact-content">
        <h1 className="contact-title">CONTACT US</h1>

        <div className="contact-list">

          <a
            href="https://www.instagram.com/artenduo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)"/>
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="contact-handle">@artenduo</span>
          </a>

          <a
            href="https://www.tiktok.com/@lartenduo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon contact-icon-tiktok">
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="contact-svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
              </svg>
            </div>
            <span className="contact-handle">@lartenduo</span>
          </a>

          <a
            href="mailto:artenduobusiness@gmail.com"
            className="contact-item"
          >
            <div className="contact-icon contact-icon-email">
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="contact-svg">
                <rect x="2" y="4" width="20" height="16" rx="3" fill="white" opacity="0.2"/>
                <path d="M2 7l10 7 10-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="white" strokeWidth="0" fill="none"/>
              </svg>
            </div>
            <span className="contact-handle">artenduobusiness@gmail.com</span>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Contact;