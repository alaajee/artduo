import './App.css';
import './ArtStore.css';
import picture from './logo_no_bg.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import picture1 from './pic1.jpg';
import picture2 from './pic2.jpg';  
import picture3 from './pic3.jpg';
import picture4 from './pic4.jpg';
import picture5 from './pic5.jpg';
import picture6 from './pic6.jpg';
import picture7 from './pic7.jpg';

const artworks = [
  { id: 1, src: picture1, alt: 'Artwork 1' },
  { id: 2, src: picture2, alt: 'Artwork 2' },
  { id: 3, src: picture3, alt: 'Artwork 3' },
  { id: 4, src: picture4, alt: 'Artwork 4' },
  { id: 5, src: picture5, alt: 'Artwork 5' },
  { id: 6, src: picture6, alt: 'Artwork 6' },
  { id: 7, src: picture7, alt: 'Artwork 7' },
];

function ArtStore() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const openLightbox = (artwork) => setSelectedArtwork(artwork);
  const closeLightbox = () => setSelectedArtwork(null);

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

        <Link to="/artstore" className="App-link active-link"> ART STORE </Link>
        <Link to="/contact" className="App-link"> CONTACT US </Link>
      </header>

      <div className="artstore-content">
        <header className="artstore-header">
          <p className="artstore-eyebrow">Original Works &amp; Prints</p>
          <h1 className="artstore-title">The Collection</h1>
          <p className="artstore-subtitle">Seven pieces — each one a story</p>
        </header>

        <div className="artstore-gallery">
          {artworks.map((artwork, index) => (
            <div className="artwork-card" key={artwork.id}>
              <img src={artwork.src} alt={artwork.alt} className="artwork-img" />
              <button
                className="artwork-view-btn"
                onClick={() => openLightbox(artwork)}
              >
                View
              </button>
              <div className="artwork-label">
                <span className="artwork-label-number">
                  {String(index + 1).padStart(2, '0')} / 07
                </span>
                <span className="artwork-label-text">{artwork.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="artstore-footer-note">
          <span /> All works available for purchase <span />
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <img
              src={selectedArtwork.src}
              alt={selectedArtwork.alt}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{selectedArtwork.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtStore;