import './App.css';
import './ArtStore.css';
import picture from './logo_no_bg.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import picture2 from './picture10.jpeg';

// Placeholder artwork data - replace src with your actual images
const artworks = [
  { id: 1, src: picture2, alt: 'Artwork 1' },
  { id: 2, src: picture2, alt: 'Artwork 2' },
  { id: 3, src: picture2, alt: 'Artwork 3' },
  { id: 4, src: picture2, alt: 'Artwork 4' },
  { id: 5, src: picture2, alt: 'Artwork 5' },
  { id: 6, src: picture2, alt: 'Artwork 6' },
  { id: 7, src: picture2, alt: 'Artwork 7' },
  { id: 8, src: picture2, alt: 'Artwork 8' },
  { id: 9, src: picture2, alt: 'Artwork 9' },
  { id: 10, src: picture2, alt: 'Artwork 10' },
  { id: 11, src: picture2, alt: 'Artwork 11' },
  { id: 12, src: picture2, alt: 'Artwork 12' },
];

function ArtStore() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

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
        <h1 className="artstore-title">ART STORE</h1>

        <div className="artstore-grid">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card">
              <img src={artwork.src} alt={artwork.alt} className="artwork-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtStore;