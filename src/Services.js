import './App.css';
import './Services.css';
import Navbar from './Navbar';
import picture2 from './picture10.jpeg';
import picture3 from './picture11.jpeg';
import picture4 from './picture12.jpeg';
import picture5 from './picture13.jpeg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

// ── Reusable booking form ──
function BookingForm({ endpoint, fields }) {
  const [values, setValues]   = useState({});
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handle = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res  = await fetch(`${API_URL}${endpoint}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setMessage(data.message);
      setValues({});
      e.target.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <form className="art-form" onSubmit={submit}>
      {fields.map((row, i) => (
        <div className="form-row" key={i}>
          {row.map(({ label, name, type = 'text' }) => (
            <div className="form-group" key={name}>
              <label className="form-label">{label}</label>
              <input
                type={type}
                name={name}
                className="form-input"
                value={values[name] || ''}
                onChange={handle}
                required={name === 'fullName' || name === 'email'}
              />
            </div>
          ))}
        </div>
      ))}

      <div className="form-group form-group--full">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          className="form-textarea"
          value={values.message || ''}
          onChange={handle}
        />
      </div>

      {message && (
        <p className={`form-feedback form-feedback--${status}`}>
          {status === 'success' ? '✓ ' : '✕ '}{message}
        </p>
      )}

      <button type="submit" className="art-btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Request'}
      </button>
    </form>
  );
}

// ── Page ──
function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
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
              <p>Every week (or every 15 days), we host creative art workshops in Rabat and Tangier, each session built around a unique theme: painting, clay…</p>
              <p>We provide all the materials — just bring your curiosity and good vibes.</p>
              <p className="workshops-prose__em">Our workshops are open to everyone: kids, adults, beginners, art lovers, locals and foreigners.</p>
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
                { n: "03", text: "We'll contact you by WhatsApp, send you all the details and ask you to confirm your spot with a 50 DHS deposit. Your place is officially secured once the deposit is sent." },
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
            <BookingForm
              endpoint="/api/book/teambuilding"
              fields={[
                [
                  { label: 'Full Name',    name: 'fullName' },
                  { label: 'Company Name', name: 'companyName' },
                ],
                [
                  { label: 'Phone Number', name: 'phone', type: 'tel' },
                  { label: 'Email',        name: 'email', type: 'email' },
                ],
              ]}
            />
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
            <BookingForm
              endpoint="/api/book/privateevent"
              fields={[
                [
                  { label: 'Full Name',  name: 'fullName' },
                  { label: 'Event Type', name: 'eventType' },
                ],
                [
                  { label: 'Phone Number', name: 'phone', type: 'tel' },
                  { label: 'Email',        name: 'email', type: 'email' },
                ],
              ]}
            />
          </div>
        </section>

      </div>
    </div>
  );
}

export default Services;