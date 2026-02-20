import './App.css';
import './Services.css';
import picture from './logo_no_bg.png';
import picture2 from './picture10.jpeg';
import picture3 from './picture11.jpeg';
import picture4 from './picture12.jpeg';
import picture5 from './picture13.jpeg';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Services() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
              <Link to="/services#workshops" className="dropdown-item">WORKSHOPS</Link>
              <Link to="/services#teambuilding" className="dropdown-item">TEAM BUILDING</Link>
              <Link to="/services#privateevents" className="dropdown-item">PRIVATE EVENTS</Link>
            </div>
          )}
        </div>

        <Link to="/artstore" className="App-link"> ART STORE </Link>
        <Link to="/contact" className="App-link"> CONTACT US </Link>
      </header>

      <div className="services-content">
        <section id="workshops" className="service-section workshops-section">
          <h1 className="section-title">Workshops</h1>
          
          <div className="workshops-description">
            <p className="workshop-text">Every week, we host creative workshops across Rabat.</p>
            <p className="workshop-text">Each session has a different theme: painting, clay, or mixed media.</p>
            <p className="workshop-text">We provide all the materials, just bring your curiosity!</p>
            <p className="workshop-text-emphasis">Open to all levels: kids, adults, beginners, and art lovers.</p>
          </div>
        </section>

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

        <section id="teambuilding" className="service-section teambuilding-section">
          <h1 className="section-title">Team Building</h1>
          <p className="teambuilding-subtitle">
            Strengthen your team spirit and creativity with our<br />
            interactive art workshops
          </p>

          <h2 className="why-title">Why teams love it :</h2>

          <div className="teambuilding-cards">
            <div className="teambuilding-card">
              <p>Encourages creativity &amp; fresh ideas</p>
            </div>
            <div className="teambuilding-card">
              <p>A fun break from routine</p>
            </div>
            <div className="teambuilding-card">
              <p>Suitable for small or large teams</p>
            </div>
            <div className="teambuilding-card">
              <p>We bring everything to your workplace</p>
            </div>
          </div>
        </section>

        <section className="teambuilding-booking-section">
          <h2 className="teambuilding-booking-title">Book your next team building</h2>
          <div className="teambuilding-booking-layout">
            <div className="teambuilding-booking-image">
              <img src="/images/teambuilding-photo.jpg" alt="Art workshop" className="booking-photo" />
            </div>
            <form className="teambuilding-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" />
                </div>
              </div>
              <div className="form-group form-group-full">
                <label className="form-label">Message</label>
                <textarea className="form-textarea"></textarea>
              </div>
              <button type="submit" className="book-now-btn">BOOK NOW</button>
            </form>
          </div>
        </section>

        <section id="privateevents" className="service-section privateevents-section">
          <h1 className="section-title privateevents-title">PRIVATE EVENTS</h1>
          <p className="privateevents-subtitle">We design custom artistic experiences for your special moments:</p>

          <div className="privateevents-grid">
            <div className="privateevent-item">
              <div className="privateevent-img-wrap">
                <img src={picture2} alt="Birthdays" className="privateevent-img" />
              </div>
              <p className="privateevent-label">Birthdays</p>
            </div>

            <div className="privateevent-item">
              <div className="privateevent-img-wrap">
                <img src={picture3} alt="Family or friends gatherings" className="privateevent-img" />
              </div>
              <p className="privateevent-label">Family or friends gatherings</p>
            </div>

            <div className="privateevent-item">
              <div className="privateevent-img-wrap">
                <img src={picture4} alt="Henna nights & pre-weddings" className="privateevent-img" />
              </div>
              <p className="privateevent-label">Henna nights &amp; pre-weddings</p>
            </div>

            <div className="privateevent-item">
              <div className="privateevent-img-wrap">
                <img src={picture5} alt="Gender reveals" className="privateevent-img" />
              </div>
              <p className="privateevent-label">Gender reveals</p>
            </div>

            <div className="privateevent-item">
              <div className="privateevent-img-wrap">
                <img src={picture2} alt="Moroccan or boho-themed events" className="privateevent-img" />
              </div>
              <p className="privateevent-label">Moroccan or boho-themed events</p>
            </div>
          </div>
        </section>

        <section className="teambuilding-booking-section">
          <h2 className="teambuilding-booking-title">Book your next private event</h2>
          <div className="teambuilding-booking-layout">
            <div className="teambuilding-booking-image">
              <img src="/images/privateevent-photo.jpg" alt="Private event" className="booking-photo" />
            </div>
            <form className="teambuilding-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Event Type</label>
                  <input type="text" className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" />
                </div>
              </div>
              <div className="form-group form-group-full">
                <label className="form-label">Message</label>
                <textarea className="form-textarea"></textarea>
              </div>
              <button type="submit" className="book-now-btn">BOOK NOW</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;