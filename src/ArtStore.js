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
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const openLightbox = (artwork) => setSelectedArtwork(artwork);
  const closeLightbox = () => setSelectedArtwork(null);

  return (
    <div className="App">
      <Navbar />

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