import './App.css';
import './Services.css';
import picture from './logo_no_bg.png';
import { useState } from 'react';

function Services() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />

        <a href='/' className="App-link"> HOME </a>
        <a href='/aboutus' className="App-link"> ABOUT US </a>
        
        <div 
          className="services-dropdown-container"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <a href='/services' className="App-link services-link">
            SERVICES
            <span className="dropdown-arrow">▼</span>
          </a>
          {showServicesDropdown && (
            <div className="dropdown-menu">
              <a href="/services#workshops" className="dropdown-item">WORKSHOPS</a>
              <a href="/services#teambuilding" className="dropdown-item">TEAM BUILDING</a>
              <a href="/services#privateevents" className="dropdown-item">PRIVATE EVENTS</a>
            </div>
          )}
        </div>

        <a href='/artstore' className="App-link"> ART STORE </a>
        <a href='/contact' className="App-link"> CONTACT US </a>
      </header>

      <div className="services-content">
        {/* Workshops Section */}
        <section id="workshops" className="service-section workshops-section">
          <h1 className="section-title">Workshops</h1>
          
          <div className="workshops-description">
            <p className="workshop-text">Every week, we host creative workshops across Rabat.</p>
            <p className="workshop-text">Each session has a different theme: painting, clay, or mixed media.</p>
            <p className="workshop-text">We provide all the materials, just bring your curiosity!</p>
            <p className="workshop-text-emphasis">Open to all levels: kids, adults, beginners, and art lovers.</p>
          </div>
        </section>

        {/* How to Book Section */}
        <section className="booking-section">
          <h2 className="booking-title">HOW TO BOOK ?</h2>
          <p className="booking-subtitle">
            We announce the program weekly in instagram(location, date & time).<br />
            Here's how you can join us:
          </p>
          
          <a href="https://www.instagram.com/artenduo" target="_blank" rel="noopener noreferrer" className="instagram-handle">
            <svg className="instagram-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2"/>
              <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient)"/>
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
            </svg>
            <span className="instagram-text">@ARTENDUO</span>
          </a>

          <div className="steps-container">
            <div className="step-card">
              <h3 className="step-title">Step 1</h3>
              <div className="step-divider"></div>
              <p className="step-text">
                Check our weekly program and choose your favorite workshop
              </p>
            </div>

            <div className="step-card">
              <h3 className="step-title">Step 2</h3>
              <div className="step-divider"></div>
              <p className="step-text">
                Contact us on Instagram and send us your name + WhatsApp number
              </p>
            </div>

            <div className="step-card">
              <h3 className="step-title">Step 3</h3>
              <div className="step-divider"></div>
              <p className="step-text">
                We'll add you to the WhatsApp group with all participants. From there, you can pay your deposit to secure your spot
              </p>
            </div>
          </div>
        </section>

        {/* Team Building Section */}
        <section id="teambuilding" className="service-section">
          <h1 className="section-title">Team Building</h1>
          <div className="service-description">
            <p className="service-text">Coming soon...</p>
          </div>
        </section>

        {/* Private Events Section */}
        <section id="privateevents" className="service-section">
          <h1 className="section-title">Private Events</h1>
          <div className="service-description">
            <p className="service-text">Coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;