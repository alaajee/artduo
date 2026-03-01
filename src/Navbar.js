import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import picture from './logo_no_bg.png';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo-link">
        <img src={picture} className="navbar__logo" alt="logo" />
      </Link>

      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="navbar__bar" />
        <span className="navbar__bar" />
        <span className="navbar__bar" />
      </button>

      <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={`navbar__link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/aboutus" className={`navbar__link ${isActive('/aboutus') ? 'active' : ''}`}>About</Link>

        {/* Services with dropdown */}
        <div
          className={`navbar__dropdown-wrap ${servicesOpen ? 'open' : ''}`}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link
            to="/services"
            className={`navbar__link navbar__link--arrow ${isActive('/services') ? 'active' : ''}`}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services
            <span className="navbar__arrow">▾</span>
          </Link>
          <div className="navbar__dropdown">
            <Link to="/services" className="navbar__dropdown-item">Workshops</Link>
            <Link to="/services" className="navbar__dropdown-item">Team Building</Link>
            <Link to="/services" className="navbar__dropdown-item">Private Events</Link>
          </div>
        </div>

        <Link to="/artstore" className={`navbar__link ${isActive('/artstore') ? 'active' : ''}`}>Art Store</Link>
        <Link to="/contact" className={`navbar__link navbar__link--cta ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;