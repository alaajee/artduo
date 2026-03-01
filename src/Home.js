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
      name: "Soukayna",
      rating: 5,
      text: "Thank you guys — it was a greaaat experience, I'm sure it won't be the last time!"
    },
    {
      name: "Asmae",
      rating: 5,
      text: "Personnellement j'ai bcp aimé ! Merci beaucoup à Racha et Safae et merci aux participants, on a passé un très bon moment ensemble."
    },
    {
      name: "Imane",
      rating: 5,
      text: "Merci à Racha et à Safaa pour ce super atelier. C'était un vrai moment de détente, de bonne humeur et de créativité. J'ai adoré votre énergie, votre bienveillance et la belle ambiance que vous avez su créer. Grâce à vous, on est tous repartis avec le sourire et un peu de fierté en regardant nos toiles — bravo et encore merci pour ce beau moment !"
    },
    {
      name: "Loubna",
      rating: 5,
      text: "Merci au team et merci à tous les participants — it was so heartwarming and peaceful."
    },
    {
      name: "Aida",
      rating: 5,
      text: "Merci à vous de nous avoir permis de vivre cette belle expérience. Merci pour votre gentillesse, bienveillance et patience... Ravie d'avoir fait votre connaissance."
    },
    {
      name: "Samira",
      rating: 5,
      text: "Merci à vous — ma fille Lina vraiment très satisfaite."
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