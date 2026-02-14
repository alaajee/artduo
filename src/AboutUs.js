import './App.css';
import './AboutUs.css';
import TeamMember from './TeamMember';
import picture from './logo_no_bg.png';
import picture1 from './pic.jpeg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const teamMembers = [
    {
      name: "Racha Bentahar",
      title: "Ceramic artist & clay enthusiast",
      image: picture1
    },
    {
      name: "Safae El Ouahabi",
      title: "Painter and visual artist",
      image: picture1
    }
  ];

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
        
        <Link to="/artstore" className="App-link"> ART STORE </Link>
        <Link to="/contact" className="App-link"> CONTACT US </Link>
      </header>

      <div className="About-us-section">
        <h1 className="about-us-title">About Us</h1>
        
        <div className="mission-statement">
          <p className="mission-text">
            We started this journey with one belief: <strong>Art has the power to heal, reconnect, and bring joy.</strong>
          </p>
          <p className="mission-text">
            We invite you to slow down, explore, and reconnect with yourself, with others, and with nature. 
            Whether you're painting, shaping clay, or simply enjoying the moment — You're in the right place.
          </p>
          <p className="mission-closing">
            Welcome to the duo. <br />
            Welcome to the experience.
          </p>
        </div>

        <h2 className="team-section-title">Meet Our Artists</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;