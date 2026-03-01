import './App.css';
import Navbar from './Navbar';
import Testimonial from './Testimonial';
import picture1 from './feel-create.jpg';
import picture2 from './client-test.jpg';
import picture4 from './ourservices.jpg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Home() {
  const heroRef = useRef(null);

  const testimonials = [
    {
      name: "Reese Miller",
      rating: 5,
      text: "I hadn't touched a paintbrush in years, but the atmosphere was so relaxing that it felt easy and fun. Such a beautiful way to spend a day outdoors"
    },
    {
      name: "Samira Hadid",
      rating: 5,
      text: "Even though I am not experienced in painting, I really enjoyed it. The team made it simple, and I left with a painting I was proud of."
    },
    {
      name: "Richard Sanchez",
      rating: 5,
      text: "I joined just for the experience — not expecting much because I hadn't painted in a long time. But I loved every moment, it was inspiring and refreshing!"
    },
    {
      name: "Pedro Fernandes",
      rating: 5,
      text: "The workshop was exactly what I needed to disconnect. Even without painting skills, I felt guided, comfortable, and creative again"
    },
    {
      name: "Juliana Silva",
      rating: 5,
      text: "It's been years since I painted, but this outdoor session gave me so much joy. Great vibes, great people, and a unique way to enjoy the city."
    },
    {
      name: "Rufus Stewart",
      rating: 5,
      text: "I was nervous at first, but the experience was beyond amazing. You don't need to be an artist to have fun — I left relaxed and happy with my artwork."
    }
  ];

  return (
    <div className="App">
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-image-wrap">
          <img src={picture1} className="hero-img" alt="Feel, Create, Reconnect" />
          <div className="hero-grain" />
        </div>
        <div className="hero-text-block">
          <p className="hero-eyebrow">Outdoor Art Workshops</p>
          <h1 className="hero-headline">
            Feel.<br />Create.<br />Reconnect.
          </h1>
          <Link to="/services" className="hero-btn">Discover Our Workshops</Link>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ── TWO COLUMN PREVIEW ── */}
      <section className="preview-section">
        <div className="preview-card">
          <div className="preview-img-wrap">
            <img src={picture4} className="preview-img" alt="Our Services" />
          </div>
          <div className="preview-body">
            <span className="preview-tag">What We Offer</span>
            <h2 className="preview-title">Our Services</h2>
            <p className="preview-desc">
              Curated outdoor painting experiences designed for all levels — from first-timers to returning creators.
            </p>
            <Link to="/services" className="preview-link">Explore →</Link>
          </div>
        </div>

        <div className="preview-divider" />

        <div className="preview-card">
          <div className="preview-img-wrap">
            <img src={picture2} className="preview-img" alt="Client Testimonials" />
          </div>
          <div className="preview-body">
            <span className="preview-tag">Voices</span>
            <h2 className="preview-title">Stories from Our Community</h2>
            <p className="preview-desc">
              Real moments, real emotions. Hear what our participants say about the workshops.
            </p>
            <a href="#testimonials" className="preview-link">Read stories →</a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="footer-cta">
        <p className="footer-cta-sub">Ready to pick up a brush?</p>
        <h2 className="footer-cta-title">Join a Workshop</h2>
        <Link to="/contact" className="footer-cta-btn">Get in Touch</Link>
      </section>
    </div>
  );
}

export default Home;