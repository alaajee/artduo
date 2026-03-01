import './App.css';
import './Services.css';
import Navbar from './Navbar';
import picture2 from './picture10.jpeg';
import picture3 from './picture11.jpeg';
import picture4 from './picture12.jpeg';
import picture5 from './picture13.jpeg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar />

      <div className="services-content">

        {/* ── WORKSHOPS ── */}
        <section id="workshops" className="svc-section">
          <div className="svc-section__inner">
            <span className="section-tag">Weekly</span>
            <h1 className="svc-title">Workshops</h1>
            <div className="svc-title-line" />

            <div className="workshops-prose">
              <p>Every week, we host creative workshops across Rabat.</p>
              <p>Each session has a different theme: painting, clay, or mixed media.</p>
              <p>We provide all the materials — just bring your curiosity!</p>
              <p className="workshops-prose__em">Open to all levels: kids, adults, beginners, and art lovers.</p>
            </div>
          </div>
        </section>

        {/* ── HOW TO BOOK ── */}
        <section className="booking-section">
          <div className="booking-section__inner">
            <span className="section-tag">Join Us</span>
            <h2 className="svc-title svc-title--sm">How to Book</h2>
            <div className="svc-title-line" />

            <p className="booking-intro">
              We announce the programme weekly on Instagram with location, date &amp; time.
            </p>

            <a
              href="https://www.instagram.com/artenduo"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
            >
              <svg className="insta-icon" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig)" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="url(#ig)" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig)"/>
                <defs>
                  <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
              </svg>
              @artenduo
            </a>

            <div className="steps-grid">
              {[
                { n: "01", text: "Check our weekly programme and choose your favourite workshop" },
                { n: "02", text: "Message us on Instagram with your name and WhatsApp number" },
                { n: "03", text: "We'll add you to the WhatsApp group — pay your deposit to confirm your spot" },
              ].map(({ n, text }) => (
                <div className="step-card" key={n}>
                  <span className="step-num">{n}</span>
                  <div className="step-divider" />
                  <p className="step-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM BUILDING ── */}
        <section id="teambuilding" className="svc-section svc-section--parchment">
          <div className="svc-section__inner">
            <span className="section-tag">Corporate</span>
            <h1 className="svc-title">Team Building</h1>
            <div className="svc-title-line" />
            <p className="svc-subtitle">
              Strengthen your team spirit and creativity with our interactive art workshops
            </p>

            <p className="why-label">Why teams love it</p>
            <div className="tb-cards">
              {[
                "Encourages creativity & fresh ideas",
                "A fun break from routine",
                "Suitable for small or large teams",
                "We bring everything to your workplace",
              ].map((text, i) => (
                <div className="tb-card" key={i}>
                  <span className="tb-card__num">0{i + 1}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM BUILDING BOOKING ── */}
        <section className="form-section">
          <div className="form-section__inner">
            <span className="section-tag">Reserve</span>
            <h2 className="svc-title svc-title--sm">Book your Team Building</h2>
            <div className="svc-title-line" />
            <form className="art-form" onSubmit={(e) => e.preventDefault()}>
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
              <div className="form-group form-group--full">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" />
              </div>
              <button type="submit" className="art-btn">Send Request</button>
            </form>
          </div>
        </section>

        {/* ── PRIVATE EVENTS ── */}
        <section id="privateevents" className="svc-section svc-section--parchment">
          <div className="svc-section__inner">
            <span className="section-tag">Bespoke</span>
            <h1 className="svc-title">Private Events</h1>
            <div className="svc-title-line" />
            <p className="svc-subtitle">We design custom artistic experiences for your special moments</p>

            <div className="events-grid">
              {[
                { img: picture2, label: "Birthdays" },
                { img: picture3, label: "Family & friends gatherings" },
                { img: picture4, label: "Henna nights & pre-weddings" },
                { img: picture5, label: "Gender reveals" },
                { img: picture2, label: "Moroccan or boho-themed events" },
              ].map(({ img, label }, i) => (
                <div className="event-card" key={i}>
                  <div className="event-card__img-wrap">
                    <img src={img} alt={label} className="event-card__img" />
                  </div>
                  <p className="event-card__label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRIVATE EVENT BOOKING ── */}
        <section className="form-section">
          <div className="form-section__inner">
            <span className="section-tag">Reserve</span>
            <h2 className="svc-title svc-title--sm">Book your Private Event</h2>
            <div className="svc-title-line" />
            <form className="art-form" onSubmit={(e) => e.preventDefault()}>
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
              <div className="form-group form-group--full">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" />
              </div>
              <button type="submit" className="art-btn">Send Request</button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Services;