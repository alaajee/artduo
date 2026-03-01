import './App.css';
import './ArtStore.css';
import Navbar from './Navbar';
import { useState } from 'react';

import picture1 from './pic1.jpg';
import picture2 from './pic2.jpg';
import picture3 from './pic3.jpg';
import picture4 from './pic4.jpg';
import picture5 from './pic5.jpg';
import picture6 from './pic6.jpg';
import picture7 from './pic7.jpg';

// ── Update each artwork with real info when you have it ──
const artworks = [
  {
    id: 1, src: picture1,
    title: 'Artwork Title',
    artist: 'Artist Name',
    price: '000 DHS',
    details: '00 × 00 cm · Acrylic on canvas',
  },
  {
    id: 2, src: picture2,
    title: 'Artwork Title',
    artist: 'Artist Name',
    price: '000 DHS',
    details: '00 × 00 cm · Watercolour',
  },
  {
    id: 3, src: picture3,
    title: 'Artwork Title',
    artist: 'Artist Name',
    price: '000 DHS',
    details: '00 × 00 cm · Mixed media',
  },
  {
    id: 4, src: picture4,
    title: 'Artwork Title',
    artist: 'Artist Name',
    price: '000 DHS',
    details: '00 × 00 cm · Ceramic',
  },
  {
    id: 5, src: picture5,
    title: 'Artwork Title',
    artist: 'Artist Name',
    price: '000 DHS',
    details: '00 × 00 cm · Oil on canvas',
  },
  {
    id: 6, src: picture6,
    title: 'Artwork Title',
    artist: 'Artist Name',
    price: '000 DHS',
    details: 'Handmade · Limited edition',
  },
  {
    id: 7, src: picture7,
    title: 'Artwork Title',
    artist: 'Artist Name',
    price: '000 DHS',
    details: '00 × 00 cm · Acrylic on canvas',
  },
];

function ArtStore() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const openLightbox  = (artwork) => setSelectedArtwork(artwork);
  const closeLightbox = () => setSelectedArtwork(null);

  return (
    <div className="App">
      <Navbar />

      <div className="artstore-content">

        {/* ── HEADER ── */}
        <header className="artstore-header">
          <p className="artstore-eyebrow">Original Works &amp; Prints</p>
          <h1 className="artstore-title">The Collection</h1>
          <p className="artstore-intro">
            We collaborate with talented artists to offer a curated selection of artworks:
            paintings, ceramics, handmade pieces, and other creative objects.
          </p>
        </header>

        {/* ── GALLERY ── */}
        <div className="artstore-gallery">
          {artworks.map((artwork, index) => (
            <div
              className="artwork-card"
              key={artwork.id}
              onClick={() => openLightbox(artwork)}
            >
              <img src={artwork.src} alt={artwork.title} className="artwork-img" />
              <button className="artwork-view-btn">View</button>
              <div className="artwork-label">
                <span className="artwork-label-number">
                  {String(index + 1).padStart(2, '0')} / 07
                </span>
                <span className="artwork-label-text">{artwork.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── HOW TO ORDER ── */}
        <section className="artstore-order">
          <div className="artstore-order__inner">
            <span className="section-tag">Purchase</span>
            <h2 className="artstore-order__title">How to Order</h2>
            <div className="artstore-order__line" />
            <div className="artstore-order__steps">
              {[
                { n: "01", text: "Screenshot the artwork you love." },
                { n: "02", text: "Send it to us on Instagram @ARTENDUO." },
                { n: "03", text: "We'll reply with confirmation and ask for a deposit to secure your order." },
                { n: "04", text: "The remaining balance is paid cash on delivery." },
              ].map(({ n, text }) => (
                <div className="artstore-order__step" key={n}>
                  <span className="artstore-order__num">{n}</span>
                  <p className="artstore-order__text">{text}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/artenduo"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
              style={{ marginTop: '40px' }}
            >
              <svg className="insta-icon" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig2)" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="url(#ig2)" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig2)"/>
                <defs>
                  <linearGradient id="ig2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
              </svg>
              @artenduo
            </a>
          </div>
        </section>

      </div>

      {/* ── LIGHTBOX ── */}
      {selectedArtwork && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>

            <div className="lightbox-inner">
              <img
                src={selectedArtwork.src}
                alt={selectedArtwork.title}
                className="lightbox-img"
              />
              <div className="lightbox-info">
                <p className="lightbox-info__artist">{selectedArtwork.artist}</p>
                <h2 className="lightbox-info__title">{selectedArtwork.title}</h2>
                <div className="lightbox-info__line" />
                <p className="lightbox-info__details">{selectedArtwork.details}</p>
                <p className="lightbox-info__price">{selectedArtwork.price}</p>
                <a
                  href="https://www.instagram.com/artenduo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightbox-info__cta"
                >
                  Order on Instagram →
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ArtStore;