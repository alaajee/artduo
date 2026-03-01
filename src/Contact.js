import './App.css';
import './Contact.css';
import Navbar from './Navbar';

function Contact() {
  return (
    <div className="App">
      <Navbar />

      <div className="contact-content">
        <div className="contact-header">
          <span className="section-tag">Get in Touch</span>
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-title-line" />
        </div>

        <div className="contact-list">

          <a
            href="https://www.instagram.com/artenduo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="1.5"/>
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
            <div className="contact-text">
              <span className="contact-platform">Instagram</span>
              <span className="contact-handle">@artenduo</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>

          <a
            href="https://www.tiktok.com/@lartenduo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon contact-icon--tiktok">
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="contact-svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
              </svg>
            </div>
            <div className="contact-text">
              <span className="contact-platform">TikTok</span>
              <span className="contact-handle">@lartenduo</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>

          <a
            href="mailto:artenduobusiness@gmail.com"
            className="contact-item"
          >
            <div className="contact-icon contact-icon--email">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-svg">
                <path d="M2 7l10 7 10-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="contact-text">
              <span className="contact-platform">Email</span>
              <span className="contact-handle">artenduobusiness@gmail.com</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Contact;